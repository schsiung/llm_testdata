/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package com.xpn.xwiki.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.util.Collection;
import java.util.Locale;
import java.util.regex.Pattern;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xwiki.url.URLSecurityManager;

public class XWikiServletResponse implements XWikiResponse
{
    private static final Logger LOGGER = LoggerFactory.getLogger(XWikiServletResponse.class);

    private static final Pattern ABSOLUTE_URL_PATTERN = Pattern.compile("[a-z0-9]+:/[/]?.*");
    private HttpServletResponse response;

    public XWikiServletResponse(HttpServletResponse response)
    {
        this.response = response;
    }

    @Override
    public int getStatus()
    {
        return this.response.getStatus();
    }

    @Override
    public HttpServletResponse getHttpServletResponse()
    {
        return this.response;
    }

    @Override
    public void sendRedirect(String redirect) throws IOException
    {
        if (StringUtils.isBlank(redirect)) {
            // Nowhere to go to
            return;
        }
        if (StringUtils.containsAny(redirect, '\r', '\n')) {
            LOGGER.warn("Possible HTTP Response Splitting attack, attempting to redirect to [{}]", redirect);
            return;
        }

        if (StringUtils.startsWith(redirect, "//")) {
        if (StringUtils.startsWith(redirect, "//")) {
            LOGGER.warn("Possible phishing attack, attempting to redirect to [{}]. If this request is legitimate, "
                + "use an actual absolute URL and pay attention to configure properly url.trustedDomains in "
                + "xwiki.properties", redirect);
            return;
        }

            LOGGER.warn("Possible phishing attack, attempting to redirect to [{}]. If this request is legitimate, "
                + "use an actual absolute URL and pay attention to configure properly url.trustedDomains in "
                + "xwiki.properties", redirect);
            return;
        }

        // check for trusted domains, only if the given location is an absolute URL.
        if (ABSOLUTE_URL_PATTERN.matcher(redirect).matches()) {
            if (!getURLSecurityManager().isDomainTrusted(new URL(redirect))) {
                LOGGER.warn(
                    "Possible phishing attack, attempting to redirect to [{}], this request has been blocked. "
                        + "If the request was legitimate, add the domain related to this request in the list "
                        + "of trusted domains in the configuration: it can be configured in xwiki.properties in "
                        + "url.trustedDomains.", redirect);
                return;
            }
        }
        this.response.sendRedirect(redirect);
    }

    private URLSecurityManager getURLSecurityManager()
    {
        return Utils.getComponent(URLSecurityManager.class);
    }

    @Override
    public void setContentType(String type)
    {
        this.response.setContentType(type);
    }

    @Override
    public void setBufferSize(int i)
    {
        this.response.setBufferSize(i);
    }

    @Override
    public int getBufferSize()
    {
        return this.response.getBufferSize();
    }

    @Override
    public void flushBuffer() throws IOException
    {
        this.response.flushBuffer();
    }

    @Override
    public void resetBuffer()
    {
        this.response.resetBuffer();
    }

    @Override
    public boolean isCommitted()
    {
        return this.response.isCommitted();
    }

    @Override
    public void reset()
    {
        this.response.reset();
    }

    @Override
    public void setContentLength(int length)
    {
        this.response.setContentLength(length);
    }

    @Override
    public void setContentLengthLong(long len)
    {
        this.response.setContentLengthLong(len);
    }

    @Override
    public String getCharacterEncoding()
    {
        return this.response.getCharacterEncoding();
    }

    @Override
    public ServletOutputStream getOutputStream() throws IOException
    {
        return this.response.getOutputStream();
    }

    @Override
    public PrintWriter getWriter() throws IOException
    {
        return this.response.getWriter();
    }

    @Override
    public void setCharacterEncoding(String s)
    {
        this.response.setCharacterEncoding(s);
    }

    @Override
    public void addCookie(Cookie cookie)
    {
        this.response.addCookie(cookie);
    }

    public void addCookie(String cookieName, String cookieValue, int age)
    {
        Cookie cookie = new Cookie(cookieName, cookieValue);
        cookie.setVersion(1);
        cookie.setMaxAge(age);
        this.response.addCookie(cookie);
    }

    /**
     * Remove a cookie.
     *
     * @param request The servlet request needed to find the cookie to remove
     * @param cookieName The name of the cookie that must be removed.
     */
    @Override
    public void removeCookie(String cookieName, XWikiRequest request)
    {
        Cookie cookie = request.getCookie(cookieName);
        if (cookie != null) {
            cookie.setMaxAge(0);
            cookie.setPath(cookie.getPath());
            addCookie(cookie);
        }
    }

    @Override
    public void setLocale(Locale locale)
    {
        this.response.setLocale(locale);
    }

    @Override
    public Locale getLocale()
    {
        return this.response.getLocale();
    }

    @Override
    public void setDateHeader(String name, long value)
    {
        this.response.setDateHeader(name, value);
    }

    @Override
    public void setIntHeader(String name, int value)
    {
        this.response.setIntHeader(name, value);
    }

    @Override
    public void setHeader(String name, String value)
    {
        this.response.setHeader(name, value);
    }

    @Override
    public void addHeader(String name, String value)
    {
        this.response.addHeader(name, value);
    }

    @Override
    public void addDateHeader(String name, long value)
    {
        this.response.addDateHeader(name, value);
    }

    @Override
    public void addIntHeader(String name, int value)
    {
        this.response.addIntHeader(name, value);
    }

    @Override
    public void setStatus(int i)
    {
        this.response.setStatus(i);
    }

    /**
     * @deprecated
     */
    @Override
    @Deprecated
    public void setStatus(int i, String s)
    {
        this.response.setStatus(i, s);
    }

    @Override
    public boolean containsHeader(String name)
    {
        return this.response.containsHeader(name);
    }

    @Override
    public String encodeURL(String s)
    {
        return this.response.encodeURL(s);
    }

    @Override
    public String encodeRedirectURL(String s)
    {
        return this.response.encodeRedirectURL(s);
    }

    /**
     * @deprecated
     */
    @Override
    @Deprecated
    public String encodeUrl(String s)
    {
        return this.response.encodeUrl(s);
    }

    /**
     * @deprecated
     */
    @Override
    @Deprecated
    public String encodeRedirectUrl(String s)
    {
        return this.response.encodeRedirectUrl(s);
    }

    @Override
    public void sendError(int i, String s) throws IOException
    {
        this.response.sendError(i, s);
    }

    @Override
    public void sendError(int i) throws IOException
    {
        this.response.sendError(i);
    }

    @Override
    public String getContentType()
    {
        return this.response.getContentType();
    }

    @Override
    public String getHeader(String s)
    {
        return this.response.getHeader(s);
    }

    @Override
    public Collection<String> getHeaders(String s)
    {
        return this.response.getHeaders(s);
    }

    @Override
    public Collection<String> getHeaderNames()
    {
        return this.response.getHeaderNames();
    }
}