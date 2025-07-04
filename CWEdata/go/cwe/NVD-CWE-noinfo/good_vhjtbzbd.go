# The following fields are used for back-end

backend:
  base:
    success:
      other: Success.
    unknown:
      other: Unknown error.
    request_format_error:
      other: Request format is not valid.
    unauthorized_error:
      other: Unauthorized.
    database_error:
      other: Data server error.
  role:
    name:
      user:
        other: User
      admin:
        other: Admin
      moderator:
        other: Moderator
    description:
      user:
        other: Default with no special access.
      admin:
        other: Have the full power to access the site.
      moderator:
        other: Has access to all posts except admin settings.
  email:
    other: Email
  password:
    other: Password
  email_or_password_wrong_error:
    other: Email and password do not match.
  error:
    admin:
      cannot_update_their_password:
        other: You cannot modify your password.
      cannot_modify_self_status:
        other: You cannot modify your status.
      cannot_modify_self_status:
        other: You cannot modify your status.
      email_or_password_wrong:
        other: Email and password do not match.
    answer:
      not_found:
        other: Answer do not found.
      cannot_deleted:
        other: No permission to delete.
      cannot_update:
        other: No permission to update.
    comment:
      edit_without_permission:
        other: Comment are not allowed to edit.
      not_found:
        other: Comment not found.
      cannot_edit_after_deadline:
        other: The comment time has been too long to modify.
    email:
      duplicate:
        other: Email already exists.
      need_to_be_verified:
        other: Email should be verified.
      verify_url_expired:
        other: Email verified URL has expired, please resend the email.
    lang:
      not_found:
        other: Language file not found.
    object:
      captcha_verification_failed:
        other: Captcha wrong.
      disallow_follow:
        other: You are not allowed to follow.
      disallow_vote:
        other: You are not allowed to vote.
      disallow_vote_your_self:
        other: You can't vote for your own post.
      not_found:
        other: Object not found.
      verification_failed:
        other: Verification failed.
      email_or_password_incorrect:
        other: Email and password do not match.
      old_password_verification_failed:
        other: The old password verification failed
      new_password_same_as_previous_setting:
        other: The new password is the same as the previous one.
    question:
      not_found:
        other: Question not found.
      cannot_deleted:
        other: No permission to delete.
      cannot_close:
        other: No permission to close.
      cannot_update:
        other: No permission to update.
    rank:
      fail_to_meet_the_condition:
        other: Rank fail to meet the condition.
    report:
      handle_failed:
        other: Report handle failed.
      not_found:
        other: Report not found.
    tag:
      not_found:
        other: Tag not found.
      recommend_tag_not_found:
        other: Recommend Tag is not exist.
      recommend_tag_enter:
        other: Please enter at least one required tag.
      not_contain_synonym_tags:
        other: Should not contain synonym tags.
      cannot_update:
        other: No permission to update.
      is_used_cannot_delete:
        other: "You cannot delete a tag that is in use"
      cannot_set_synonym_as_itself:
        other: You cannot set the synonym of the current tag as itself.
    smtp:
      config_from_name_cannot_be_email:
        other: The From Name cannot be a email address.
    theme:
      not_found:
        other: Theme not found.
    revision:
      review_underway:
        other: Can't edit currently, there is a version in the review queue.
      no_permission:
        other: No permission to Revision.
    user:
      email_or_password_wrong:
        other:
          other: Email and password do not match.
      not_found:
        other: User not found.
      suspended:
        other: User has been suspended.
      username_invalid:
        other: Username is invalid.
      username_duplicate:
        other: Username is already in use.
      set_avatar:
        other: Avatar set failed.
      cannot_update_your_role:
        other: You cannot modify your role.
      not_allowed_registration:
        other: Currently the site is not open for registration
    config:
      read_config_failed:
        other: Read config failed
    database:
      connection_failed:
        other: Database connection failed
      create_table_failed:
        other: Create table failed
    install:
      create_config_failed:
        other: Can't create the config.yaml file.
    upload:
      unsupported_file_format:
        other: Unsupported file format.
  report:
    spam:
      name:
        other: spam
      desc:
        other: This post is an advertisement, or vandalism. It is not useful or relevant
          to the current topic.
    rude:
      name:
        other: rude or abusive
      desc:
        other: A reasonable person would find this content inappropriate for respectful
          discourse.
    duplicate:
      name:
        other: a duplicate
      desc:
        other: This question has been asked before and already has an answer.
    not_answer:
      name:
        other: not an answer
      desc:
        other: This was posted as an answer, but it does not attempt to answer the
          question. It should possibly be an edit, a comment, another question,
          or deleted altogether.
    not_need:
      name:
        other: no longer needed
      desc:
        other: This comment is outdated, conversational or not relevant to this post.
    other:
      name:
        other: something else
      desc:
        other: This post requires staff attention for another reason not listed above.
  question:
    close:
      duplicate:
        name:
          other: spam
        desc:
          other: This question has been asked before and already has an answer.
      guideline:
        name:
          other: a community-specific reason
        desc:
          other: This question doesn't meet a community guideline.
      multiple:
        name:
          other: needs details or clarity
        desc:
          other: This question currently includes multiple questions in one. It should
            focus on one problem only.
      other:
        name:
          other: something else
        desc:
          other: This post requires another reason not listed above.
    operation_type:
      asked:
        other: asked
      answered:
        other: answered
      modified:
        other: modified
  notification:
    action:
      update_question:
        other: updated question
      answer_the_question:
        other: answered question
      update_answer:
        other: updated answer
      accept_answer:
        other: accepted answer
      comment_question:
        other: commented question
      comment_answer:
        other: commented answer
      reply_to_you:
        other: replied to you
      mention_you:
        other: mentioned you
      your_question_is_closed:
        other: Your question has been closed
      your_question_was_deleted:
        other: Your question has been deleted
      your_answer_was_deleted:
        other: Your answer has been deleted
      your_comment_was_deleted:
        other: Your comment has been deleted

# The following fields are used for interface presentation(Front-end)
ui:
  how_to_format:
    title: How to Format
    desc: >-
      <ul class="mb-0"><li><p class="mb-2">to make links</p><pre
      class="mb-2"><code>&lt;https://url.com&gt;<br/><br/>[Title](https://url.com)</code></pre></li><li><p
      class="mb-2">put returns between paragraphs</p></li><li><p
      class="mb-2"><em>_italic_</em> or **<strong>bold</strong>**</p></li><li><p
      class="mb-2">indent code by 4 spaces</p></li><li><p class="mb-2">quote by
      placing <code>&gt;</code> at start of line</p></li><li><p
      class="mb-2">backtick escapes <code>`like _this_`</code></p></li><li><p
      class="mb-2">create code fences with backticks <code>`</code></p><pre
      class="mb-0"><code>```<br/>code here<br/>```</code></pre></li></ul>
  pagination:
    prev: Prev
    next: Next
  page_title:
    question: Question
    questions: Questions
    tag: Tag
    tags: Tags
    tag_wiki: tag wiki
    edit_tag: Edit Tag
    ask_a_question: Add Question
    edit_question: Edit Question
    edit_answer: Edit Answer
    search: Search
    posts_containing: Posts containing
    settings: Settings
    notifications: Notifications
    login: Log In
    sign_up: Sign Up
    account_recovery: Account Recovery
    account_activation: Account Activation
    confirm_email: Confirm Email
    account_suspended: Account Suspended
    admin: Admin
    change_email: Modify Email
    install: Answer Installation
    upgrade: Answer Upgrade
    maintenance: Website Maintenance
    users: Users
  notifications:
    title: Notifications
    inbox: Inbox
    achievement: Achievements
    all_read: Mark all as read
    show_more: Show more
  suspended:
    title: Your Account has been Suspended
    until_time: "Your account was suspended until {{ time }}."
    forever: This user was suspended forever.
    end: You don't meet a community guideline.
  editor:
    blockquote:
      text: Blockquote
    bold:
      text: Strong
    chart:
      text: Chart
      flow_chart: Flow chart
      sequence_diagram: Sequence diagram
      class_diagram: Class diagram
      state_diagram: State diagram
      entity_relationship_diagram: Entity relationship diagram
      user_defined_diagram: User defined diagram
      gantt_chart: Gantt chart
      pie_chart: Pie chart
    code:
      text: Code Sample
      add_code: Add code sample
      form:
        fields:
          code:
            label: Code
            msg:
              empty: Code cannot be empty.
          language:
            label: Language
            placeholder: Automatic detection
      btn_cancel: Cancel
      btn_confirm: Add
    formula:
      text: Formula
      options:
        inline: Inline formula
        block: Block formula
    heading:
      text: Heading
      options:
        h1: Heading 1
        h2: Heading 2
        h3: Heading 3
        h4: Heading 4
        h5: Heading 5
        h6: Heading 6
    help:
      text: Help
    hr:
      text: Horizontal Rule
    image:
      text: Image
      add_image: Add image
      tab_image: Upload image
      form_image:
        fields:
          file:
            label: Image File
            btn: Select image
            msg:
              empty: File cannot be empty.
              only_image: Only image files are allowed.
              max_size: File size cannot exceed 4MB.
          desc:
            label: Description
      tab_url: Image URL
      form_url:
        fields:
          url:
            label: Image URL
            msg:
              empty: Image URL cannot be empty.
          name:
            label: Description
      btn_cancel: Cancel
      btn_confirm: Add
      uploading: Uploading
    indent:
      text: Indent
    outdent:
      text: Outdent
    italic:
      text: Emphasis
    link:
      text: Hyperlink
      add_link: Add hyperlink
      form:
        fields:
          url:
            label: URL
            msg:
              empty: URL cannot be empty.
          name:
            label: Description
      btn_cancel: Cancel
      btn_confirm: Add
    ordered_list:
      text: Numbered List
    unordered_list:
      text: Bulleted List
    table:
      text: Table
      heading: Heading
      cell: Cell
  close_modal:
    title: I am closing this post as...
    btn_cancel: Cancel
    btn_submit: Submit
    remark:
      empty: Cannot be empty.
    msg:
      empty: Please select a reason.
  report_modal:
    flag_title: I am flagging to report this post as...
    close_title: I am closing this post as...
    review_question_title: Review question
    review_answer_title: Review answer
    review_comment_title: Review comment
    btn_cancel: Cancel
    btn_submit: Submit
    remark:
      empty: Cannot be empty.
    msg:
      empty: Please select a reason.
  tag_modal:
    title: Create new tag
    form:
      fields:
        display_name:
          label: Display Name
          msg:
            empty: Display name cannot be empty.
            range: Display name up to 35 characters.
        slug_name:
          label: URL Slug
          desc: 'Must use the character set "a-z", "0-9", "+ # - ."'
          msg:
            empty: URL slug cannot be empty.
            range: URL slug up to 35 characters.
            character: URL slug contains unallowed character set.
        desc:
          label: Description
    btn_cancel: Cancel
    btn_submit: Submit
  tag_info:
    created_at: Created
    edited_at: Edited
    history: History
    synonyms:
      title: Synonyms
      text: The following tags will be remapped to
      empty: No synonyms found.
      btn_add: Add a synonym
      btn_edit: Edit
      btn_save: Save
    synonyms_text: The following tags will be remapped to
    delete:
      title: Delete this tag
      tip_with_posts: >-
        <p>We do not allowed <strong>deleting tag with posts</strong>.</p>
        <p>Please remove this tag from the posts first.</p>
      tip_with_synonyms: >-
        <p>We do not allowed <strong>deleting tag with synonyms</strong>.</p>
        <p>Please remove the synonyms from this tag first.</p>
      tip: Are you sure you wish to delete?
      close: Close
  edit_tag:
    title: Edit Tag
    default_reason: Edit tag
    form:
      fields:
        revision:
          label: Revision
        display_name:
          label: Display Name
        slug_name:
          label: URL Slug
          info: 'Must use the character set "a-z", "0-9", "+ # - ."'
        desc:
          label: Description
        edit_summary:
          label: Edit Summary
          placeholder: >-
            Briefly explain your changes (corrected spelling, fixed grammar,
            improved formatting)
    btn_save_edits: Save edits
    btn_cancel: Cancel
  dates:
    long_date: MMM D
    long_date_with_year: "MMM D, YYYY"
    long_date_with_time: "MMM D, YYYY [at] HH:mm"
    now: now
    x_seconds_ago: "{{count}}s ago"
    x_minutes_ago: "{{count}}m ago"
    x_hours_ago: "{{count}}h ago"
    hour: hour
    day: day
  comment:
    btn_add_comment: Add comment
    reply_to: Reply to
    btn_reply: Reply
    btn_edit: Edit
    btn_delete: Delete
    btn_flag: Flag
    btn_save_edits: Save edits
    btn_cancel: Cancel
    show_more: Show more comments
    tip_question: >-
      Use comments to ask for more information or suggest improvements. Avoid
      answering questions in comments.
    tip_answer: >-
      Use comments to reply to other users or notify them of changes. If you are
      adding new information, edit your post instead of commenting.
  edit_answer:
    title: Edit Answer
    default_reason: Edit answer
    form:
      fields:
        revision:
          label: Revision
        answer:
          label: Answer
          feedback:
            characters: content must be at least 6 characters in length.
        edit_summary:
          label: Edit Summary
          placeholder: >-
            Briefly explain your changes (corrected spelling, fixed grammar,
            improved formatting)
    btn_save_edits: Save edits
    btn_cancel: Cancel
  tags:
    title: Tags
    sort_buttons:
      popular: Popular
      name: Name
      newest: newest
    button_follow: Follow
    button_following: Following
    tag_label: questions
    search_placeholder: Filter by tag name
    no_desc: The tag has no description.
    more: More
  ask:
    title: Add Question
    edit_title: Edit Question
    default_reason: Edit question
    similar_questions: Similar questions
    form:
      fields:
        revision:
          label: Revision
        title:
          label: Title
          placeholder: Be specific and imagine you're asking a question to another person
          msg:
            empty: Title cannot be empty.
            range: Title up to 150 characters
        body:
          label: Body
          msg:
            empty: Body cannot be empty.
        tags:
          label: Tags
          msg:
            empty: Tags cannot be empty.
        answer:
          label: Answer
          msg:
            empty: Answer cannot be empty.
        edit_summary:
          label: Edit Summary
          placeholder: >-
            Briefly explain your changes (corrected spelling, fixed grammar,
            improved formatting)
    btn_post_question: Post your question
    btn_save_edits: Save edits
    answer_question: Answer your own question
    post_question&answer: Post your question and answer
  tag_selector:
    add_btn: Add tag
    create_btn: Create new tag
    search_tag: Search tag
    hint: "Describe what your question is about, at least one tag is required."
    no_result: No tags matched
    tag_required_text: Required tag (at least one)
  header:
    nav:
      question: Questions
      tag: Tags
      user: Users
      profile: Profile
      setting: Settings
      logout: Log out
      admin: Admin
      review: Review
    search:
      placeholder: Search
  footer:
    build_on: >-
      Built on <1> Answer </1>- the open-source software that powers Q&A
      communities.<br />Made with love © {{cc}}.
  upload_img:
    name: Change
    loading: loading...
  pic_auth_code:
    title: Captcha
    placeholder: Type the text above
    msg:
      empty: Captcha cannot be empty.
  inactive:
    first: >-
      You're almost done! We sent an activation mail to <bold>{{mail}}</bold>.
      Please follow the instructions in the mail to activate your account.
    info: "If it doesn't arrive, check your spam folder."
    another: >-
      We sent another activation email to you at <bold>{{mail}}</bold>. It might
      take a few minutes for it to arrive; be sure to check your spam folder.
    btn_name: Resend activation email
    change_btn_name: Change email
    msg:
      empty: Cannot be empty.
  login:
    page_title: Welcome to {{site_name}}
    login_to_continue: Log in to continue
    info_sign: Don't have an account? <1>Sign up</1>
    info_login: Already have an account? <1>Log in</1>
    agreements: By registering, you agree to the <1>privacy policy</1> and <3>terms of service</3>.
    forgot_pass: Forgot password?
    name:
      label: Name
      msg:
        empty: Name cannot be empty.
        range: Name up to 30 characters.
    email:
      label: Email
      msg:
        empty: Email cannot be empty.
    password:
      label: Password
      msg:
        empty: Password cannot be empty.
        different: The passwords entered on both sides are inconsistent
  account_forgot:
    page_title: Forgot Your Password
    btn_name: Send me recovery email
    send_success: >-
      If an account matches <strong>{{mail}}</strong>, you should receive an email
      with instructions on how to reset your password shortly.
    email:
      label: Email
      msg:
        empty: Email cannot be empty.
  change_email:
    page_title: Welcome to {{site_name}}
    btn_cancel: Cancel
    btn_update: Update email address
    send_success: >-
      If an account matches <strong>{{mail}}</strong>, you should receive an email
      with instructions on how to reset your password shortly.
    email:
      label: New Email
      msg:
        empty: Email cannot be empty.
  password_reset:
    page_title: Password Reset
    btn_name: Reset my password
    reset_success: >-
      You successfully changed your password; you will be redirected to the log in
      page.
    link_invalid: >-
      Sorry, this password reset link is no longer valid. Perhaps your password is
      already reset?
    to_login: Continue to log in page
    password:
      label: Password
      msg:
        empty: Password cannot be empty.
        length: The length needs to be between 8 and 32
        different: The passwords entered on both sides are inconsistent
    password_confirm:
      label: Confirm New Password
  settings:
    page_title: Settings
    nav:
      profile: Profile
      notification: Notifications
      account: Account
      interface: Interface
    profile:
      heading: Profile
      btn_name: Save
      display_name:
        label: Display Name
        msg: Display name cannot be empty.
        msg_range: Display name up to 30 characters.
      username:
        label: Username
        caption: People can mention you as "@username".
        msg: Username cannot be empty.
        msg_range: Username up to 30 characters.
        character: 'Must use the character set "a-z", "0-9", " - . _"'
      avatar:
        label: Profile Image
        gravatar: Gravatar
        gravatar_text: You can change image on <1>gravatar.com</1>
        custom: Custom
        btn_refresh: Refresh
        custom_text: You can upload your image.
        default: System
        msg: Please upload an avatar
      bio:
        label: About Me
      website:
        label: Website
        placeholder: "https://example.com"
        msg: Website incorrect format
      location:
        label: Location
        placeholder: "City, Country"
    notification:
      heading: Notifications
      email:
        label: Email Notifications
        radio: "Answers to your questions, comments, and more"
    account:
      heading: Account
      change_email_btn: Change email
      change_pass_btn: Change password
      change_email_info: >-
        We've sent an email to that address. Please follow the confirmation
        instructions.
      email:
        label: Email
        msg: Email cannot be empty.
      password_title: Password
      current_pass:
        label: Current Password
        msg:
          empty: Current Password cannot be empty.
          length: The length needs to be between 8 and 32.
          different: The two entered passwords do not match.
      new_pass:
        label: New Password
      pass_confirm:
        label: Confirm New Password
    interface:
      heading: Interface
      lang:
        label: Interface Language
        text: User interface language. It will change when you refresh the page.
  toast:
    update: update success
    update_password: Password changed successfully.
    flag_success: Thanks for flagging.
    forbidden_operate_self: Forbidden to operate on yourself
    review: Your revision will show after review.
  related_question:
    title: Related Questions
    btn: Add question
    answers: answers
  question_detail:
    Asked: Asked
    asked: asked
    update: Modified
    edit: edited
    Views: Viewed
    Follow: Follow
    Following: Following
    answered: answered
    closed_in: Closed in
    show_exist: Show existing question.
    answers:
      title: Answers
      score: Score
      newest: Newest
      btn_accept: Accept
      btn_accepted: Accepted
    write_answer:
      title: Your Answer
      btn_name: Post your answer
      add_another_answer: Add another answer
      confirm_title: Continue to answer
      continue: Continue
      confirm_info: >-
        <p>Are you sure you want to add another answer?</p><p>You could use the
        edit link to refine and improve your existing answer, instead.</p>
      empty: Answer cannot be empty.
      characters: content must be at least 6 characters in length.
    reopen:
      title: Reopen this post
      content: Are you sure you want to reopen?
      success: This post has been reopened
  delete:
    title: Delete this post
    question: >-
      We do not recommend <strong>deleting questions with answers</strong> because
      doing so deprives future readers of this knowledge.</p><p>Repeated deletion
      of answered questions can result in your account being blocked from asking.
      Are you sure you wish to delete?
    answer_accepted: >-
      <p>We do not recommend <strong>deleting accepted answer</strong> because
      doing so deprives future readers of this knowledge. </p> Repeated deletion
      of accepted answers can result in your account being blocked from answering.
      Are you sure you wish to delete?
    other: Are you sure you wish to delete?
    tip_question_deleted: This post has been deleted
    tip_answer_deleted: This answer has been deleted
  btns:
    confirm: Confirm
    cancel: Cancel
    save: Save
    delete: Delete
    login: Log in
    signup: Sign up
    logout: Log out
    verify: Verify
    add_question: Add question
    approve: Approve
    reject: Reject
    skip: Skip
  search:
    title: Search Results
    keywords: Keywords
    options: Options
    follow: Follow
    following: Following
    counts: "{{count}} Results"
    more: More
    sort_btns:
      relevance: Relevance
      newest: Newest
      active: Active
      score: Score
      more: More
    tips:
      title: Advanced Search Tips
      tag: "<1>[tag]</1> search withing a tag"
      user: "<1>user:username</1> search by author"
      answer: "<1>answers:0</1> unanswered questions"
      score: "<1>score:3</1> posts with a 3+ score"
      question: "<1>is:question</1> search questions"
      is_answer: "<1>is:answer</1> search answers"
    empty: We couldn't find anything. <br /> Try different or less specific keywords.
  share:
    name: Share
    copy: Copy link
    via: Share post via...
    copied: Copied
    facebook: Share to Facebook
    twitter: Share to Twitter
  cannot_vote_for_self: You can't vote for your own post
  modal_confirm:
    title: Error...
  account_result:
    page_title: Welcome to {{site_name}}
    success: Your new account is confirmed; you will be redirected to the home page.
    link: Continue to homepage
    invalid: >-
      Sorry, this account confirmation link is no longer valid. Perhaps your
      account is already active?
    confirm_new_email: Your email has been updated.
    confirm_new_email_invalid: >-
      Sorry, this confirmation link is no longer valid. Perhaps your email was
      already changed?
  unsubscribe:
    page_title: Unsubscribe
    success_title: Unsubscribe Successful
    success_desc: You have been successfully removed from this subscriber list and won't receive any further emails from us.
    link: Change settings
  question:
    following_tags: Following Tags
    edit: Edit
    save: Save
    follow_tag_tip: Follow tags to curate your list of questions.
    hot_questions: Hot Questions
    all_questions: All Questions
    x_questions: "{{ count }} Questions"
    x_answers: "{{ count }} answers"
    questions: Questions
    answers: Answers
    newest: Newest
    active: Active
    frequent: Frequent
    score: Score
    unanswered: Unanswered
    modified: modified
    answered: answered
    asked: asked
    closed: closed
    follow_a_tag: Follow a tag
    more: More
  personal:
    overview: Overview
    answers: Answers
    answer: answer
    questions: Questions
    question: question
    bookmarks: Bookmarks
    reputation: Reputation
    comments: Comments
    votes: Votes
    newest: Newest
    score: Score
    edit_profile: Edit Profile
    visited_x_days: "Visited {{ count }} days"
    viewed: Viewed
    joined: Joined
    last_login: Seen
    about_me: About Me
    about_me_empty: "// Hello, World !"
    top_answers: Top Answers
    top_questions: Top Questions
    stats: Stats
    list_empty: No posts found.<br />Perhaps you'd like to select a different tab?
    accepted: Accepted
    answered: answered
    asked: asked
    upvote: upvote
    downvote: downvote
    mod_short: Mod
    mod_long: Moderators
    x_reputation: reputation
    x_votes: votes received
    x_answers: answers
    x_questions: questions
  install:
    title: Answer
    next: Next
    done: Done
    config_yaml_error: Can't create the config.yaml file.
    lang:
      label: Please Choose a Language
    db_type:
      label: Database Engine
    db_username:
      label: Username
      placeholder: root
      msg: Username cannot be empty.
    db_password:
      label: Password
      placeholder: root
      msg: Password cannot be empty.
    db_host:
      label: Database Host
      placeholder: "db:3306"
      msg: Database Host cannot be empty.
    db_name:
      label: Database Name
      placeholder: answer
      msg: Database Name cannot be empty.
    db_file:
      label: Database File
      placeholder: /data/answer.db
      msg: Database File cannot be empty.
    config_yaml:
      title: Create config.yaml
      label: The config.yaml file created.
      desc: >-
        You can create the <1>config.yaml</1> file manually in the
        <1>/var/wwww/xxx/</1> directory and paste the following text into it.
      info: After you've done that, click "Next" button.
    site_information: Site Information
    admin_account: Admin Account
    site_name:
      label: Site Name
      msg: Site Name cannot be empty.
    site_url:
      label: Site URL
      text: The address of your site.
      msg:
        empty: Site URL cannot be empty.
        incorrect: Site URL incorrect format.
    contact_email:
      label: Contact Email
      text: Email address of key contact responsible for this site.
      msg:
        empty: Contact Email cannot be empty.
        incorrect: Contact Email incorrect format.
    admin_name:
      label: Name
      msg: Name cannot be empty.
    admin_password:
      label: Password
      text: >-
        You will need this password to log in. Please store it in a secure
        location.
      msg: Password cannot be empty.
    admin_email:
      label: Email
      text: You will need this email to log in.
      msg:
        empty: Email cannot be empty.
        incorrect: Email incorrect format.
    ready_title: Your Answer is Ready!
    ready_desc: >-
      If you ever feel like changing more settings, visit <1>admin section</1>;
      find it in the site menu.
    good_luck: "Have fun, and good luck!"
    warn_title: Warning
    warn_desc: >-
      The file <1>config.yaml</1> already exists. If you need to reset any of the
      configuration items in this file, please delete it first.
    install_now: You may try <1>installing now</1>.
    installed: Already installed
    installed_desc: >-
      You appear to have already installed. To reinstall please clear your old
      database tables first.
    db_failed: Database connection failed
    db_failed_desc: >-
      This either means that the database information in your <1>config.yaml</1> file is incorrect or that contact with the database server could not be established. This could mean your host’s database server is down.
  counts:
    views: views
    votes: votes
    answers: answers
    accepted: Accepted
  page_404:
    desc: "Unfortunately, this page doesn't exist."
    back_home: Back to homepage
  page_50X:
    desc: The server encountered an error and could not complete your request.
    back_home: Back to homepage
  page_maintenance:
    desc: "We are under maintenance, we'll be back soon."
  nav_menus:
    dashboard: Dashboard
    contents: Contents
    questions: Questions
    answers: Answers
    users: Users
    flags: Flags
    settings: Settings
    general: General
    interface: Interface
    smtp: SMTP
    branding: Branding
    legal: Legal
    write: Write
    tos: Terms of Service
    privacy: Privacy
    seo: SEO
    customize: Customize
    themes: Themes
    css-html: CSS/HTML
    login: Login
  admin:
    admin_header:
      title: Admin
    dashboard:
      title: Dashboard
      welcome: Welcome to Answer Admin!
      site_statistics: Site Statistics
      questions: "Questions:"
      answers: "Answers:"
      comments: "Comments:"
      votes: "Votes:"
      active_users: "Active users:"
      flags: "Flags:"
      site_health_status: Site Health Status
      version: "Version:"
      https: "HTTPS:"
      uploading_files: "Uploading files:"
      smtp: "SMTP:"
      timezone: "Timezone:"
      system_info: System Info
      storage_used: "Storage used:"
      uptime: "Uptime:"
      answer_links: Answer Links
      documents: Documents
      feedback: Feedback
      support: Support
      review: Review
      config: Config
      update_to: Update to
      latest: Latest
      check_failed: Check failed
      "yes": "Yes"
      "no": "No"
      not_allowed: Not allowed
      allowed: Allowed
      enabled: Enabled
      disabled: Disabled
    flags:
      title: Flags
      pending: Pending
      completed: Completed
      flagged: Flagged
      created: Created
      action: Action
      review: Review
    change_modal:
      title: Change user status to...
      btn_cancel: Cancel
      btn_submit: Submit
      normal_name: normal
      normal_desc: A normal user can ask and answer questions.
      suspended_name: suspended
      suspended_desc: A suspended user can't log in.
      deleted_name: deleted
      deleted_desc: "Delete profile, authentication associations."
      inactive_name: inactive
      inactive_desc: An inactive user must re-validate their email.
      confirm_title: Delete this user
      confirm_content: Are you sure you want to delete this user? This is permanent!
      confirm_btn: Delete
      msg:
        empty: Please select a reason.
    status_modal:
      title: "Change {{ type }} status to..."
      normal_name: normal
      normal_desc: A normal post available to everyone.
      closed_name: closed
      closed_desc: "A closed question can't answer, but still can edit, vote and comment."
      deleted_name: deleted
      deleted_desc: All reputation gained and lost will be restored.
      btn_cancel: Cancel
      btn_submit: Submit
      btn_next: Next
    user_role_modal:
      title: Change user role to...
      btn_cancel: Cancel
      btn_submit: Submit
    users:
      title: Users
      name: Name
      email: Email
      reputation: Reputation
      created_at: Created Time
      delete_at: Deleted Time
      suspend_at: Suspended Time
      status: Status
      role: Role
      action: Action
      change: Change
      all: All
      staff: Staff
      inactive: Inactive
      suspended: Suspended
      deleted: Deleted
      normal: Normal
      Moderator: Moderator
      Admin: Admin
      User: User
      filter:
        placeholder: "Filter by name, user:id"
      set_new_password: Set new password
      change_status: Change status
      change_role: Change role
      show_logs: Show logs
      add_user: Add user
      new_password_modal:
        title: Set new password
        form:
          fields:
            password:
              label: Password
              text: The user will be logged out and need to login again.
              msg: Password must be at 8-32 characters in length.
        btn_cancel: Cancel
        btn_submit: Submit
      user_modal:
        title: Add new user
        form:
          fields:
            display_name:
              label: Display Name
              msg: Display Name must be at 3-30 characters in length.
            email:
              label: Email
              msg: Email is not valid.
            password:
              label: Password
              msg: Password must be at 8-32 characters in length.

        btn_cancel: Cancel
        btn_submit: Submit

    questions:
      page_title: Questions
      normal: Normal
      closed: Closed
      deleted: Deleted
      post: Post
      votes: Votes
      answers: Answers
      created: Created
      status: Status
      action: Action
      change: Change
      filter:
        placeholder: "Filter by title, question:id"
    answers:
      page_title: Answers
      normal: Normal
      deleted: Deleted
      post: Post
      votes: Votes
      created: Created
      status: Status
      action: Action
      change: Change
      filter:
        placeholder: "Filter by title, answer:id"
    general:
      page_title: General
      name:
        label: Site Name
        msg: Site name cannot be empty.
        text: "The name of this site, as used in the title tag."
      site_url:
        label: Site URL
        msg: Site url cannot be empty.
        validate: Please enter a valid URL.
        text: The address of your site.
      short_desc:
        label: Short Site Description
        msg: Short site description cannot be empty.
        text: "Short description, as used in the title tag on homepage."
      desc:
        label: Site Description
        msg: Site description cannot be empty.
        text: "Describe this site in one sentence, as used in the meta description tag."
      contact_email:
        label: Contact Email
        msg: Contact email cannot be empty.
        validate: Contact email is not valid.
        text: Email address of key contact responsible for this site.
    interface:
      page_title: Interface
      language:
        label: Interface Language
        msg: Interface language cannot be empty.
        text: User interface language. It will change when you refresh the page.
      time_zone:
        label: Timezone
        msg: Timezone cannot be empty.
        text: Choose a city in the same timezone as you.
    smtp:
      page_title: SMTP
      from_email:
        label: From Email
        msg: From email cannot be empty.
        text: The email address which emails are sent from.
      from_name:
        label: From Name
        msg: From name cannot be empty.
        text: The name which emails are sent from.
      smtp_host:
        label: SMTP Host
        msg: SMTP host cannot be empty.
        text: Your mail server.
      encryption:
        label: Encryption
        msg: Encryption cannot be empty.
        text: For most servers SSL is the recommended option.
        ssl: SSL
        none: None
      smtp_port:
        label: SMTP Port
        msg: SMTP port must be number 1 ~ 65535.
        text: The port to your mail server.
      smtp_username:
        label: SMTP Username
        msg: SMTP username cannot be empty.
      smtp_password:
        label: SMTP Password
        msg: SMTP password cannot be empty.
      test_email_recipient:
        label: Test Email Recipients
        text: Provide email address that will receive test sends.
        msg: Test email recipients is invalid
      smtp_authentication:
        label: Enable authentication
        title: SMTP Authentication
        msg: SMTP authentication cannot be empty.
        "yes": "Yes"
        "no": "No"
    branding:
      page_title: Branding
      logo:
        label: Logo
        msg: Logo cannot be empty.
        text: The logo image at the top left of your site. Use a wide rectangular image with a height of 56 and an aspect ratio greater than 3:1. If left blank, the site title text will be shown.
      mobile_logo:
        label: Mobile Logo
        text: The logo used on mobile version of your site. Use a wide rectangular image with a height of 56. If left blank, the image from the "logo" setting will be used.
      square_icon:
        label: Square Icon
        msg: Square icon cannot be empty.
        text: Image used as the base for metadata icons. Should ideally be larger than 512x512.
      favicon:
        label: Favicon
        text: A favicon for your site. To work correctly over a CDN it must be a png. Will be resized to 32x32. If left blank, "square icon" will be used.
    legal:
      page_title: Legal
      terms_of_service:
        label: Terms of Service
        text: "You can add terms of service content here. If you already have a document hosted elsewhere, provide the full URL here."
      privacy_policy:
        label: Privacy Policy
        text: "You can add privacy policy content here. If you already have a document hosted elsewhere, provide the full URL here."
    write:
      page_title: Write
      recommend_tags:
        label: Recommend Tags
        text: "Please input tag slug above, one tag per line."
      required_tag:
        title: Required Tag
        label: Set recommend tag as required
        text: "Every new question must have at least one recommend tag."
      reserved_tags:
        label: Reserved Tags
        text: "Reserved tags can only be added to a post by moderator."
    seo:
      page_title: SEO
      permalink:
        label: Permalink
        text: Custom URL structures can improve the usability, and forward-compatibility of your links.
      robots:
        label: robots.txt
        text: This will permanently override any related site settings.
    themes:
      page_title: Themes
      themes:
        label: Themes
        text: Select an existing theme.
      navbar_style:
        label: Navbar Style
        text: Select an existing theme.
      primary_color:
        label: Primary Color
        text: Modify the colors used by your themes
    css_and_html:
      page_title: CSS and HTML
      custom_css:
        label: Custom CSS
        text: This will insert as <link>
      head:
        label: Head
        text: This will insert before </head>
      header:
        label: Header
        text: This will insert after <body>
      footer:
        label: Footer
        text: This will insert before </html>.
    login:
      page_title: Login
      membership:
        title: Membership
        label: Allow new registrations
        text: Turn off to prevent anyone from creating a new account.
      private:
        title: Private
        label: Login required
        text: Only logged in users can access this community.

  form:
    optional: (optional)
    empty: cannot be empty
    invalid: is invalid
    btn_submit: Save
    not_found_props: "Required property {{ key }} not found."
  page_review:
    review: Review
    proposed: proposed
    question_edit: Question edit
    answer_edit: Answer edit
    tag_edit: Tag edit
    edit_summary: Edit summary
    edit_question: Edit question
    edit_answer: Edit answer
    edit_tag: Edit tag
    empty: No review tasks left.
  timeline:
    undeleted: undeleted
    deleted: deleted
    downvote: downvote
    upvote: upvote
    accept: accept
    cancelled: cancelled
    commented: commented
    rollback: rollback
    edited: edited
    answered: answered
    asked: asked
    closed: closed
    reopened: reopened
    created: created
    title: "History for"
    tag_title: "Timeline for"
    show_votes: "Show votes"
    n_or_a: N/A
    title_for_question: "Timeline for"
    title_for_answer: "Timeline for answer to {{ title }} by {{ author }}"
    title_for_tag: "Timeline for tag"
    datetime: Datetime
    type: Type
    by: By
    comment: Comment
    no_data: "We couldn't find anything."
  users:
    title: Users
    users_with_the_most_reputation: Users with the highest reputation scores
    users_with_the_most_vote: Users who voted the most
    staffs: Our community staff
    reputation: reputation
    votes: votes
  prompt:
    leave_page: "Are you sure you want to leave the page?"
    changes_not_save: "Your changes may not be saved."
