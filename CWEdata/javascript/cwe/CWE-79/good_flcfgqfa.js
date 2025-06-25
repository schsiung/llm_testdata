import getAuthorizationUrl from "../lib/oauth/authorization-url"
import emailSignin from "../lib/email/signin"
import type { RequestInternal, OutgoingResponse } from ".."
import type { InternalOptions } from "../types"
import type { Account, User } from "../.."

/** Handle requests to /api/auth/signin */
export default async function signin(params: {
  options: InternalOptions<"oauth" | "email">
  query: RequestInternal["query"]
  body: RequestInternal["body"]
}): Promise<OutgoingResponse> {
  const { options, query, body } = params
  const { url, adapter, callbacks, logger, provider } = options

  if (!provider.type) {
    return {
      status: 500,
      // @ts-expect-error
      text: `Error: Type not specified for ${provider.name}`,
    }
  }

  if (provider.type === "oauth") {
    try {
      const response = await getAuthorizationUrl({ options, query })
      return response
    } catch (error) {
      logger.error("SIGNIN_OAUTH_ERROR", { error: error as Error, provider })
      return { redirect: `${url}/error?error=OAuthSignin` }
    }
  } else if (provider.type === "email") {
    /**
     * @note Technically the part of the email address local mailbox element
     * (everything before the @ symbol) should be treated as 'case sensitive'
     * according to RFC 2821, but in practice this causes more problems than
     * it solves. We treat email addresses as all lower case. If anyone
     * complains about this we can make strict RFC 2821 compliance an option.
     */

    const email = body?.email?.toLowerCase()
    if (!email) return { redirect: `${url}/error?error=EmailSignin` }

    // Verified in `assertConfig`
    const { getUserByEmail } = adapter!
    const user: User = (email ? await getUserByEmail(email) : null) ?? {
      id: email,

      providerAccountId: email,
      type: "email",
    }
    // Check if user is allowed to sign in
      // @ts-expect-error
      const signInCallbackResponse = await callbacks.signIn({
        user,
        account,
        email: { verificationRequest: true },
      })
      if (!signInCallbackResponse) {
        return { redirect: `${url}/error?error=AccessDenied` }
      } else if (typeof signInCallbackResponse === "string") {
        return { redirect: signInCallbackResponse }
      }
    } catch (error) {
      return {
        redirect: `${url}/error?${new URLSearchParams({
          error: error as string,
        })}`,
      }
    }

    try {
      await emailSignin(email, options)
    } catch (error) {
      logger.error("SIGNIN_EMAIL_ERROR", error as Error)
      return { redirect: `${url}/error?error=EmailSignin` }
    }

    const params = new URLSearchParams({
      provider: provider.id,
      type: provider.type,
    })

    return { redirect: `${url}/verify-request?${params}` }
  }
  return { redirect: `${url}/signin` }
}