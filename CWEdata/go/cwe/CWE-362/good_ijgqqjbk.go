definitions:
  handler.RespBody:
    properties:
      code:
        description: http code
        type: integer
      data:
        description: response data
      msg:
        description: response message
        type: string
      reason:
        description: reason key
        type: string
    type: object
  install.CheckConfigFileResp:
    properties:
      config_file_exist:
        type: boolean
      db_connection_success:
        type: boolean
      db_table_exist:
        type: boolean
    type: object
  install.CheckDatabaseReq:
    properties:
      db_file:
        type: string
      db_host:
        type: string
      db_name:
        type: string
      db_password:
        type: string
      db_type:
        enum:
        - postgres
        - sqlite3
        - mysql
        type: string
      db_username:
        type: string
    required:
    - db_type
    type: object
  install.InitBaseInfoReq:
    properties:
      contact_email:
        maxLength: 500
        type: string
      email:
        maxLength: 500
        type: string
      lang:
        maxLength: 30
        type: string
      name:
        maxLength: 30
        type: string
      password:
        maxLength: 32
        minLength: 8
        type: string
      site_name:
        maxLength: 30
        type: string
      site_url:
        maxLength: 512
        type: string
    required:
    - contact_email
    - email
    - lang
    - name
    - password
    - site_name
    - site_url
    type: object
  pager.PageModel:
    properties:
      count:
        type: integer
      list: {}
    type: object
  schema.ActObjectInfo:
    properties:
      answer_id:
        type: string
      display_name:
        type: string
      main_tag_slug_name:
        type: string
      object_type:
        type: string
      question_id:
        type: string
      title:
        type: string
      username:
        type: string
    type: object
  schema.ActObjectTimeline:
    properties:
      activity_id:
        type: string
      activity_type:
        type: string
      cancelled:
        type: boolean
      cancelled_at:
        type: integer
      comment:
        type: string
      created_at:
        type: integer
      id:
        type: string
      object_id:
        type: string
      object_type:
        type: string
      revision_id:
        type: string
      user_display_name:
        type: string
      username:
        type: string
    type: object
  schema.ActionRecordResp:
    properties:
      captcha_id:
        type: string
      captcha_img:
        type: string
      verify:
        type: boolean
    type: object
  schema.AddCommentReq:
    properties:
      mention_username_list:
        description: '@ user id list'
        items:
          type: string
        type: array
      object_id:
        description: object id
        type: string
      original_text:
        description: original comment content
        type: string
      parsed_text:
        description: parsed comment content
        type: string
      reply_comment_id:
        description: reply comment id
        type: string
    required:
    - object_id
    - original_text
    - parsed_text
    type: object
  schema.AddReportReq:
    properties:
      content:
        description: report content
        maxLength: 500
        type: string
      object_id:
        description: object id
        maxLength: 20
        type: string
      report_type:
        description: report type
        type: integer
    required:
    - object_id
    - report_type
    type: object
  schema.AddUserReq:
    properties:
      display_name:
        maxLength: 30
        type: string
      email:
        maxLength: 500
        type: string
      password:
        maxLength: 32
        minLength: 8
        type: string
    required:
    - display_name
    - email
    - password
    type: object
  schema.AdminSetAnswerStatusRequest:
    properties:
      answer_id:
        type: string
      status:
        type: string
    type: object
  schema.AdminSetQuestionStatusRequest:
    properties:
      question_id:
        type: string
      status:
        type: string
    type: object
  schema.AnswerAcceptedReq:
    properties:
      answer_id:
        type: string
      question_id:
        type: string
    type: object
  schema.AnswerAddReq:
    properties:
      content:
        description: content
        type: string
      html:
        description: html
        type: string
      question_id:
        description: question_id
        type: string
    type: object
  schema.AnswerUpdateReq:
    properties:
      content:
        description: content
        type: string
      edit_summary:
        description: edit_summary
        type: string
      html:
        description: html
        type: string
      id:
        description: id
        type: string
      question_id:
        description: question_id
        type: string
      title:
        description: title
        type: string
    type: object
  schema.AvatarInfo:
    properties:
      custom:
        maxLength: 200
        type: string
      gravatar:
        maxLength: 200
        type: string
      type:
        maxLength: 100
        type: string
    type: object
  schema.CloseQuestionReq:
    properties:
      close_msg:
        description: close_type
        type: string
      close_type:
        description: close_type
        type: integer
      id:
        type: string
    required:
    - id
    type: object
  schema.CollectionSwitchReq:
    properties:
      group_id:
        description: user collection group TagID
        type: string
      object_id:
        description: object TagID
        type: string
    required:
    - group_id
    - object_id
    type: object
  schema.CollectionSwitchResp:
    properties:
      object_collection_count:
        type: string
      object_id:
        type: string
      switch:
        type: boolean
    type: object
  schema.FollowReq:
    properties:
      is_cancel:
        description: is cancel
        type: boolean
      object_id:
        description: object id
        type: string
    required:
    - object_id
    type: object
  schema.FollowResp:
    properties:
      follows:
        description: the followers of object
        type: integer
      is_followed:
        description: if user is followed object will be true,otherwise false
        type: boolean
    type: object
  schema.GetCommentPersonalWithPageResp:
    properties:
      answer_id:
        description: answer id
        type: string
      comment_id:
        description: comment id
        type: string
      content:
        description: content
        type: string
      created_at:
        description: create time
        type: integer
      object_id:
        description: object id
        type: string
      object_type:
        description: object type
        enum:
        - question
        - answer
        - tag
        - comment
        type: string
      question_id:
        description: question id
        type: string
      title:
        description: title
        type: string
    type: object
  schema.GetCommentResp:
    properties:
      comment_id:
        description: comment id
        type: string
      created_at:
        description: create time
        type: integer
      is_vote:
        description: current user if already vote this comment
        type: boolean
      member_actions:
        description: MemberActions
        items:
          $ref: '#/definitions/schema.PermissionMemberAction'
        type: array
      object_id:
        description: object id
        type: string
      original_text:
        description: original comment content
        type: string
      parsed_text:
        description: parsed comment content
        type: string
      reply_comment_id:
        description: reply comment id
        type: string
      reply_user_display_name:
        description: reply user display name
        type: string
      reply_user_id:
        description: reply user id
        type: string
      reply_user_status:
        description: reply user status
        type: string
      reply_username:
        description: reply user username
        type: string
      user_avatar:
        description: user avatar
        type: string
      user_display_name:
        description: user display name
        type: string
      user_id:
        description: user id
        type: string
      user_status:
        description: user status
        type: string
      username:
        description: username
        type: string
      vote_count:
        description: user vote amount
        type: integer
    type: object
  schema.GetFollowingTagsResp:
    properties:
      display_name:
        description: display name
        type: string
      main_tag_slug_name:
        description: if main tag slug name is not empty, this tag is synonymous with
          the main tag
        type: string
      recommend:
        type: boolean
      reserved:
        type: boolean
      slug_name:
        description: slug name
        type: string
      tag_id:
        description: tag id
        type: string
    type: object
  schema.GetObjectTimelineResp:
    properties:
      object_info:
        $ref: '#/definitions/schema.ActObjectInfo'
      timeline:
        items:
          $ref: '#/definitions/schema.ActObjectTimeline'
        type: array
    type: object
  schema.GetOtherUserInfoByUsernameResp:
    properties:
      answer_count:
        description: answer count
        type: integer
      avatar:
        description: avatar
        type: string
      bio:
        description: bio markdown
        type: string
      bio_html:
        description: bio html
        type: string
      created_at:
        description: create time
        type: integer
      display_name:
        description: display name
        type: string
      follow_count:
        description: |-
          email
          follow count
        type: integer
      id:
        description: user id
        type: string
      ip_info:
        description: ip info
        type: string
      is_admin:
        description: is admin
        type: boolean
      last_login_date:
        description: last login date
        type: integer
      location:
        description: location
        type: string
      mobile:
        description: mobile
        type: string
      question_count:
        description: question count
        type: integer
      rank:
        description: rank
        type: integer
      status:
        type: string
      status_msg:
        type: string
      username:
        description: username
        type: string
      website:
        description: website
        type: string
    type: object
  schema.GetOtherUserInfoResp:
    properties:
      has:
        type: boolean
      info:
        $ref: '#/definitions/schema.GetOtherUserInfoByUsernameResp'
    type: object
  schema.GetRankPersonalWithPageResp:
    properties:
      answer_id:
        description: answer id
        type: string
      content:
        description: content
        type: string
      created_at:
        description: create time
        type: integer
      object_id:
        description: object id
        type: string
      object_type:
        description: object type
        enum:
        - question
        - answer
        - tag
        - comment
        type: string
      question_id:
        description: question id
        type: string
      rank_type:
        description: rank type
        type: string
      reputation:
        description: reputation
        type: integer
      title:
        description: title
        type: string
    type: object
  schema.GetReportTypeResp:
    properties:
      content_type:
        description: content type
        type: string
      description:
        description: report description
        type: string
      have_content:
        description: is have content
        type: boolean
      name:
        description: report name
        type: string
      source:
        description: report source
        type: string
      type:
        description: report type
        type: integer
    type: object
  schema.GetRevisionResp:
    properties:
      content:
        description: content parsed
      create_at:
        type: integer
      id:
        description: id
        type: string
      object_id:
        description: object id
        type: string
      reason:
        type: string
      status:
        description: 'revision status(normal: 1; delete 2)'
        type: integer
      title:
        description: title
        type: string
      use_id:
        description: user id
        type: string
      user_info:
        $ref: '#/definitions/schema.UserBasicInfo'
    type: object
  schema.GetRoleResp:
    properties:
      description:
        type: string
      id:
        type: integer
      name:
        type: string
    type: object
  schema.GetSMTPConfigResp:
    properties:
      encryption:
        description: '"" SSL'
        type: string
      from_email:
        type: string
      from_name:
        type: string
      smtp_authentication:
        type: boolean
      smtp_host:
        type: string
      smtp_password:
        type: string
      smtp_port:
        type: integer
      smtp_username:
        type: string
    type: object
  schema.GetSiteLegalInfoResp:
    properties:
      privacy_policy_original_text:
        type: string
      privacy_policy_parsed_text:
        type: string
      terms_of_service_original_text:
        type: string
      terms_of_service_parsed_text:
        type: string
    type: object
  schema.GetTagPageResp:
    properties:
      created_at:
        description: created time
        type: integer
      display_name:
        description: display_name
        type: string
      excerpt:
        description: excerpt
        type: string
      follow_count:
        description: follower amount
        type: integer
      is_follower:
        description: is follower
        type: boolean
      original_text:
        description: original text
        type: string
      parsed_text:
        description: parsed_text
        type: string
      question_count:
        description: question amount
        type: integer
      recommend:
        type: boolean
      reserved:
        type: boolean
      slug_name:
        description: slug_name
        type: string
      tag_id:
        description: tag_id
        type: string
      updated_at:
        description: updated time
        type: integer
    type: object
  schema.GetTagResp:
    properties:
      created_at:
        description: created time
        type: integer
      description:
        description: description text
        type: string
      display_name:
        description: display name
        type: string
      excerpt:
        description: excerpt
        type: string
      follow_count:
        description: follower amount
        type: integer
      is_follower:
        description: is follower
        type: boolean
      main_tag_slug_name:
        description: if main tag slug name is not empty, this tag is synonymous with
          the main tag
        type: string
      member_actions:
        description: MemberActions
        items:
          $ref: '#/definitions/schema.PermissionMemberAction'
        type: array
      original_text:
        description: original text
        type: string
      parsed_text:
        description: parsed text
        type: string
      question_count:
        description: question amount
        type: integer
      recommend:
        type: boolean
      reserved:
        type: boolean
      slug_name:
        description: slug name
        type: string
      tag_id:
        description: tag id
        type: string
      updated_at:
        description: updated time
        type: integer
    type: object
  schema.GetTagSynonymsResp:
    properties:
      member_actions:
        description: MemberActions
        items:
          $ref: '#/definitions/schema.PermissionMemberAction'
        type: array
      synonyms:
        description: synonyms
        items:
          $ref: '#/definitions/schema.TagSynonym'
        type: array
    type: object
  schema.GetUnreviewedRevisionResp:
    properties:
      info:
        $ref: '#/definitions/schema.UnreviewedRevisionInfoInfo'
      type:
        type: string
      unreviewed_info:
        $ref: '#/definitions/schema.GetRevisionResp'
    type: object
  schema.GetUserPageResp:
    properties:
      avatar:
        description: avatar
        type: string
      created_at:
        description: create time
        type: integer
      deleted_at:
        description: delete time
        type: integer
      display_name:
        description: display name
        type: string
      e_mail:
        description: email
        type: string
      rank:
        description: rank
        type: integer
      role_id:
        description: role id
        type: integer
      role_name:
        description: role name
        type: string
      status:
        description: user status(normal,suspended,deleted,inactive)
        type: string
      suspended_at:
        description: suspended time
        type: integer
      user_id:
        description: user id
        type: string
      username:
        description: username
        type: string
    type: object
  schema.GetUserResp:
    properties:
      access_token:
        description: access token
        type: string
      answer_count:
        description: answer count
        type: integer
      authority_group:
        description: authority group
        type: integer
      avatar:
        description: avatar
        type: string
      bio:
        description: bio markdown
        type: string
      bio_html:
        description: bio html
        type: string
      created_at:
        description: create time
        type: integer
      display_name:
        description: display name
        type: string
      e_mail:
        description: email
        type: string
      follow_count:
        description: follow count
        type: integer
      id:
        description: user id
        type: string
      ip_info:
        description: ip info
        type: string
      is_admin:
        description: is admin
        type: boolean
      language:
        description: language
        type: string
      last_login_date:
        description: last login date
        type: integer
      location:
        description: location
        type: string
      mail_status:
        description: mail status(1 pass 2 to be verified)
        type: integer
      mobile:
        description: mobile
        type: string
      notice_status:
        description: notice status(1 on 2off)
        type: integer
      question_count:
        description: question count
        type: integer
      rank:
        description: rank
        type: integer
      status:
        description: user status
        type: string
      username:
        description: username
        type: string
      website:
        description: website
        type: string
    type: object
  schema.GetUserToSetShowResp:
    properties:
      access_token:
        description: access token
        type: string
      answer_count:
        description: answer count
        type: integer
      authority_group:
        description: authority group
        type: integer
      avatar:
        $ref: '#/definitions/schema.AvatarInfo'
      bio:
        description: bio markdown
        type: string
      bio_html:
        description: bio html
        type: string
      created_at:
        description: create time
        type: integer
      display_name:
        description: display name
        type: string
      e_mail:
        description: email
        type: string
      follow_count:
        description: follow count
        type: integer
      id:
        description: user id
        type: string
      ip_info:
        description: ip info
        type: string
      is_admin:
        description: is admin
        type: boolean
      language:
        description: language
        type: string
      last_login_date:
        description: last login date
        type: integer
      location:
        description: location
        type: string
      mail_status:
        description: mail status(1 pass 2 to be verified)
        type: integer
      mobile:
        description: mobile
        type: string
      notice_status:
        description: notice status(1 on 2off)
        type: integer
      question_count:
        description: question count
        type: integer
      rank:
        description: rank
        type: integer
      status:
        description: user status
        type: string
      username:
        description: username
        type: string
      website:
        description: website
        type: string
    type: object
  schema.GetVoteWithPageResp:
    properties:
      answer_id:
        description: answer id
        type: string
      content:
        description: content
        type: string
      created_at:
        description: create time
        type: integer
      object_id:
        description: object id
        type: string
      object_type:
        description: object type
        enum:
        - question
        - answer
        - tag
        - comment
        type: string
      question_id:
        description: question id
        type: string
      title:
        description: title
        type: string
      vote_type:
        description: vote type
        type: string
    type: object
  schema.NotificationClearIDRequest:
    properties:
      id:
        type: string
    type: object
  schema.NotificationClearRequest:
    properties:
      type:
        description: inbox achievement
        type: string
    type: object
  schema.PermissionMemberAction:
    properties:
      action:
        type: string
      name:
        type: string
      type:
        type: string
    type: object
  schema.PostRenderReq:
    properties:
      content:
        type: string
    type: object
  schema.QuestionAdd:
    properties:
      content:
        description: content
        maxLength: 65535
        minLength: 6
        type: string
      html:
        description: html
        maxLength: 65535
        minLength: 6
        type: string
      tags:
        description: tags
        items:
          $ref: '#/definitions/schema.TagItem'
        type: array
      title:
        description: question title
        maxLength: 150
        minLength: 6
        type: string
    required:
    - content
    - html
    - tags
    - title
    type: object
  schema.QuestionPageReq:
    properties:
      orderCond:
        enum:
        - newest
        - active
        - frequent
        - score
        - unanswered
        type: string
      page:
        minimum: 1
        type: integer
      pageSize:
        minimum: 1
        type: integer
      tag:
        maxLength: 100
        type: string
      username:
        maxLength: 100
        type: string
    type: object
  schema.QuestionPageResp:
    properties:
      accepted_answer_id:
        description: answer information
        type: string
      answer_count:
        type: integer
      collection_count:
        type: integer
      description:
        type: string
      follow_count:
        type: integer
      id:
        type: string
      last_answer_id:
        type: string
      operated_at:
        description: operator information
        type: integer
      operation_type:
        type: string
      operator:
        $ref: '#/definitions/schema.QuestionPageRespOperator'
      status:
        type: integer
      tags:
        items:
          $ref: '#/definitions/schema.TagResp'
        type: array
      title:
        type: string
      unique_view_count:
        type: integer
      url_title:
        type: string
      view_count:
        description: question statistical information
        type: integer
      vote_count:
        type: integer
    type: object
  schema.QuestionPageRespOperator:
    properties:
      display_name:
        type: string
      id:
        type: string
      rank:
        type: integer
      username:
        type: string
    type: object
  schema.QuestionUpdate:
    properties:
      content:
        description: content
        maxLength: 65535
        minLength: 6
        type: string
      edit_summary:
        description: edit summary
        type: string
      html:
        description: html
        maxLength: 65535
        minLength: 6
        type: string
      id:
        description: question id
        type: string
      tags:
        description: tags
        items:
          $ref: '#/definitions/schema.TagItem'
        type: array
      title:
        description: question title
        maxLength: 150
        minLength: 6
        type: string
    required:
    - content
    - html
    - id
    - tags
    - title
    type: object
  schema.RemoveAnswerReq:
    properties:
      id:
        description: answer id
        type: string
    required:
    - id
    type: object
  schema.RemoveCommentReq:
    properties:
      comment_id:
        description: comment id
        type: string
    required:
    - comment_id
    type: object
  schema.RemoveQuestionReq:
    properties:
      id:
        description: question id
        type: string
    required:
    - id
    type: object
  schema.RemoveTagReq:
    properties:
      tag_id:
        description: tag_id
        type: string
    required:
    - tag_id
    type: object
  schema.ReopenQuestionReq:
    properties:
      question_id:
        type: string
    type: object
  schema.ReportHandleReq:
    properties:
      flagged_content:
        type: string
      flagged_type:
        type: integer
      id:
        type: string
    required:
    - flagged_type
    - id
    type: object
  schema.RevisionAuditReq:
    properties:
      id:
        description: object id
        type: string
      operation:
        description: approve or reject
        type: string
    required:
    - id
    - operation
    type: object
  schema.SearchListResp:
    properties:
      count:
        type: integer
      extra:
        description: extra fields
      list:
        description: search response
        items:
          $ref: '#/definitions/schema.SearchResp'
        type: array
    type: object
  schema.SearchObject:
    properties:
      accepted:
        type: boolean
      answer_count:
        type: integer
      created_at:
        type: integer
      excerpt:
        type: string
      id:
        type: string
      question_id:
        type: string
      status:
        description: Status
        type: string
      tags:
        description: tags
        items:
          $ref: '#/definitions/schema.TagResp'
        type: array
      title:
        type: string
      user_info:
        $ref: '#/definitions/schema.UserBasicInfo'
        description: user info
      vote_count:
        type: integer
    type: object
  schema.SearchResp:
    properties:
      object:
        $ref: '#/definitions/schema.SearchObject'
        description: this object
      object_type:
        description: object_type
        type: string
    type: object
  schema.SiteBrandingReq:
    properties:
      favicon:
        maxLength: 512
        type: string
      logo:
        maxLength: 512
        type: string
      mobile_logo:
        maxLength: 512
        type: string
      square_icon:
        maxLength: 512
        type: string
    type: object
  schema.SiteBrandingResp:
    properties:
      favicon:
        maxLength: 512
        type: string
      logo:
        maxLength: 512
        type: string
      mobile_logo:
        maxLength: 512
        type: string
      square_icon:
        maxLength: 512
        type: string
    type: object
  schema.SiteCustomCssHTMLReq:
    properties:
      custom_css:
        maxLength: 65536
        type: string
      custom_footer:
        maxLength: 65536
        type: string
      custom_head:
        maxLength: 65536
        type: string
      custom_header:
        maxLength: 65536
        type: string
    type: object
  schema.SiteCustomCssHTMLResp:
    properties:
      custom_css:
        maxLength: 65536
        type: string
      custom_footer:
        maxLength: 65536
        type: string
      custom_head:
        maxLength: 65536
        type: string
      custom_header:
        maxLength: 65536
        type: string
    type: object
  schema.SiteGeneralReq:
    properties:
      contact_email:
        maxLength: 512
        type: string
      description:
        maxLength: 2000
        type: string
      name:
        maxLength: 128
        type: string
      short_description:
        maxLength: 255
        type: string
      site_url:
        maxLength: 512
        type: string
    required:
    - contact_email
    - name
    - site_url
    type: object
  schema.SiteGeneralResp:
    properties:
      contact_email:
        maxLength: 512
        type: string
      description:
        maxLength: 2000
        type: string
      name:
        maxLength: 128
        type: string
      short_description:
        maxLength: 255
        type: string
      site_url:
        maxLength: 512
        type: string
    required:
    - contact_email
    - name
    - site_url
    type: object
  schema.SiteInfoResp:
    properties:
      branding:
        $ref: '#/definitions/schema.SiteBrandingResp'
      custom_css_html:
        $ref: '#/definitions/schema.SiteCustomCssHTMLResp'
      general:
        $ref: '#/definitions/schema.SiteGeneralResp'
      interface:
        $ref: '#/definitions/schema.SiteInterfaceResp'
      login:
        $ref: '#/definitions/schema.SiteLoginResp'
      site_seo:
        $ref: '#/definitions/schema.SiteSeoReq'
      theme:
        $ref: '#/definitions/schema.SiteThemeResp'
    type: object
  schema.SiteInterfaceReq:
    properties:
      language:
        maxLength: 128
        type: string
      time_zone:
        maxLength: 128
        type: string
    required:
    - language
    - time_zone
    type: object
  schema.SiteInterfaceResp:
    properties:
      language:
        maxLength: 128
        type: string
      time_zone:
        maxLength: 128
        type: string
    required:
    - language
    - time_zone
    type: object
  schema.SiteLegalReq:
    properties:
      privacy_policy_original_text:
        type: string
      privacy_policy_parsed_text:
        type: string
      terms_of_service_original_text:
        type: string
      terms_of_service_parsed_text:
        type: string
    type: object
  schema.SiteLegalResp:
    properties:
      privacy_policy_original_text:
        type: string
      privacy_policy_parsed_text:
        type: string
      terms_of_service_original_text:
        type: string
      terms_of_service_parsed_text:
        type: string
    type: object
  schema.SiteLoginReq:
    properties:
      allow_new_registrations:
        type: boolean
      login_required:
        type: boolean
    type: object
  schema.SiteLoginResp:
    properties:
      allow_new_registrations:
        type: boolean
      login_required:
        type: boolean
    type: object
  schema.SiteSeoReq:
    properties:
      permalink:
        maximum: 3
        minimum: 0
        type: integer
      robots:
        type: string
    required:
    - permalink
    - robots
    type: object
  schema.SiteSeoResp:
    properties:
      permalink:
        maximum: 3
        minimum: 0
        type: integer
      robots:
        type: string
    required:
    - permalink
    - robots
    type: object
  schema.SiteThemeReq:
    properties:
      theme:
        maxLength: 255
        type: string
      theme_config:
        additionalProperties: true
        type: object
    required:
    - theme
    type: object
  schema.SiteThemeResp:
    properties:
      theme:
        type: string
      theme_config:
        additionalProperties: true
        type: object
      theme_options:
        items:
          $ref: '#/definitions/schema.ThemeOption'
        type: array
    type: object
  schema.SiteWriteReq:
    properties:
      recommend_tags:
        items:
          type: string
        type: array
      required_tag:
        type: boolean
      reserved_tags:
        items:
          type: string
        type: array
    type: object
  schema.SiteWriteResp:
    properties:
      recommend_tags:
        items:
          type: string
        type: array
      required_tag:
        type: boolean
      reserved_tags:
        items:
          type: string
        type: array
    type: object
  schema.TagItem:
    properties:
      display_name:
        description: display_name
        maxLength: 35
        type: string
      original_text:
        description: original text
        type: string
      parsed_text:
        description: parsed text
        type: string
      slug_name:
        description: slug_name
        maxLength: 35
        type: string
    type: object
  schema.TagResp:
    properties:
      display_name:
        type: string
      main_tag_slug_name:
        description: if main tag slug name is not empty, this tag is synonymous with
          the main tag
        type: string
      recommend:
        type: boolean
      reserved:
        type: boolean
      slug_name:
        type: string
    type: object
  schema.TagSynonym:
    properties:
      display_name:
        description: display name
        type: string
      main_tag_slug_name:
        description: if main tag slug name is not empty, this tag is synonymous with
          the main tag
        type: string
      slug_name:
        description: slug name
        type: string
      tag_id:
        description: tag id
        type: string
    type: object
  schema.ThemeOption:
    properties:
      label:
        type: string
      value:
        type: string
    type: object
  schema.UnreviewedRevisionInfoInfo:
    properties:
      content:
        type: string
      html:
        type: string
      object_id:
        type: string
      tags:
        items:
          $ref: '#/definitions/schema.TagResp'
        type: array
      title:
        type: string
    type: object
  schema.UpdateCommentReq:
    properties:
      comment_id:
        description: comment id
        type: string
      original_text:
        description: original comment content
        type: string
      parsed_text:
        description: parsed comment content
        type: string
    required:
    - comment_id
    type: object
  schema.UpdateFollowTagsReq:
    properties:
      slug_name_list:
        description: tag slug name list
        items:
          type: string
        type: array
    type: object
  schema.UpdateInfoRequest:
    properties:
      avatar:
        $ref: '#/definitions/schema.AvatarInfo'
        description: avatar
      bio:
        description: bio
        maxLength: 4096
        type: string
        description: display_name
        type: string
        description: location
        type: string
      username:
        description: username
        maxLength: 30
        type: string
      website:
        description: website
        maxLength: 500
        type: string
    required:
    - display_name
    type: object
  schema.UpdateSMTPConfigReq:
    properties:
      encryption:
        description: '"" SSL'
        enum:
        - SSL
        type: string
      from_email:
        maxLength: 256
        type: string
      from_name:
        maxLength: 256
        type: string
      smtp_authentication:
        type: boolean
      smtp_host:
        maxLength: 256
        type: string
      smtp_password:
        maxLength: 256
        type: string
      smtp_port:
        maximum: 65535
        minimum: 1
        type: integer
      smtp_username:
        maxLength: 256
        type: string
      test_email_recipient:
        type: string
    type: object
  schema.UpdateTagReq:
    properties:
      display_name:
        description: display_name
        maxLength: 35
        type: string
      edit_summary:
        description: edit summary
        type: string
      original_text:
        description: original text
        type: string
      parsed_text:
        description: parsed text
        type: string
      slug_name:
        description: slug_name
        maxLength: 35
        type: string
      tag_id:
        description: tag_id
        type: string
    required:
    - tag_id
    type: object
  schema.UpdateTagSynonymReq:
    properties:
      synonym_tag_list:
        description: synonym tag list
        items:
          $ref: '#/definitions/schema.TagItem'
        type: array
      tag_id:
        description: tag_id
        type: string
    required:
    - synonym_tag_list
    - tag_id
    type: object
  schema.UpdateUserInterfaceRequest:
    properties:
      language:
        description: language
        maxLength: 100
        type: string
    required:
    - language
    type: object
  schema.UpdateUserPasswordReq:
    properties:
      password:
        maxLength: 32
        minLength: 8
        type: string
      user_id:
        type: string
    required:
    - password
    - user_id
    type: object
  schema.UpdateUserRoleReq:
    properties:
      role_id:
        description: role id
        type: integer
      user_id:
        description: user id
        type: string
    required:
    - role_id
    - user_id
    type: object
  schema.UpdateUserStatusReq:
    properties:
      status:
        description: user status
        enum:
        - normal
        - suspended
        - deleted
        - inactive
        type: string
      user_id:
        description: user id
        type: string
    required:
    - status
    - user_id
    type: object
  schema.UserBasicInfo:
    properties:
      avatar:
        description: avatar
        type: string
      display_name:
        description: display_name
        type: string
      id:
        description: user_id
        type: string
      ip_info:
        description: ip info
        type: string
      location:
        description: location
        type: string
      rank:
        description: rank
        type: integer
      status:
        description: status
        type: string
      username:
        description: name
        type: string
      website:
        description: website
        type: string
    type: object
  schema.UserChangeEmailSendCodeReq:
    properties:
      captcha_code:
        maxLength: 500
        type: string
      captcha_id:
        maxLength: 500
        type: string
      e_mail:
        maxLength: 500
        type: string
    required:
    - e_mail
    type: object
  schema.UserChangeEmailVerifyReq:
    properties:
      code:
        maxLength: 500
        type: string
    required:
    - code
    type: object
  schema.UserEmailLogin:
    properties:
      captcha_code:
        description: captcha_code
        type: string
      captcha_id:
        description: captcha_id
        type: string
      e_mail:
        description: e_mail
        maxLength: 500
        type: string
      pass:
        description: password
        maxLength: 32
        minLength: 8
        type: string
    required:
    - e_mail
    - pass
    type: object
  schema.UserModifyPassWordRequest:
    properties:
      old_pass:
        description: old password
        type: string
      pass:
        description: password
        type: string
    type: object
  schema.UserNoticeSetRequest:
    properties:
      notice_switch:
        type: boolean
    type: object
  schema.UserNoticeSetResp:
    properties:
      notice_switch:
        type: boolean
    type: object
  schema.UserRankingResp:
    properties:
      staffs:
        items:
          $ref: '#/definitions/schema.UserRankingSimpleInfo'
        type: array
      users_with_the_most_reputation:
        items:
          $ref: '#/definitions/schema.UserRankingSimpleInfo'
        type: array
      users_with_the_most_vote:
        items:
          $ref: '#/definitions/schema.UserRankingSimpleInfo'
        type: array
    type: object
  schema.UserRankingSimpleInfo:
    properties:
      avatar:
        description: avatar
        type: string
      display_name:
        description: display name
        type: string
      rank:
        description: rank
        type: integer
      username:
        description: username
        type: string
      vote_count:
        description: vote
        type: integer
    type: object
  schema.UserRePassWordRequest:
    properties:
      code:
        description: code
        maxLength: 100
        type: string
      pass:
        description: Password
        maxLength: 32
        type: string
    required:
    - code
    - pass
    type: object
  schema.UserRegisterReq:
    properties:
      captcha_code:
        description: captcha_code
        type: string
      captcha_id:
        description: captcha_id
        type: string
      e_mail:
        description: email
        maxLength: 500
        type: string
      name:
        description: name
        maxLength: 30
        type: string
      pass:
        description: password
        maxLength: 32
        minLength: 8
        type: string
    required:
    - e_mail
    - name
    - pass
    type: object
  schema.UserRetrievePassWordRequest:
    properties:
      captcha_code:
        description: captcha_code
        type: string
      captcha_id:
        description: captcha_id
        type: string
      e_mail:
        description: e_mail
        maxLength: 500
        type: string
    required:
    - e_mail
    type: object
  schema.VoteReq:
    properties:
      is_cancel:
        description: is cancel
        type: boolean
      object_id:
        description: id
        type: string
    required:
    - object_id
    type: object
  schema.VoteResp:
    properties:
      down_votes:
        type: integer
      up_votes:
        type: integer
      vote_status:
        type: string
      votes:
        type: integer
    type: object
  translator.LangOption:
    properties:
      label:
        type: string
      value:
        type: string
    type: object
info:
  contact: {}
paths:
  /:
    get:
      consumes:
      - application/json
      description: if config file not exist try to redirect to install page
      produces:
      - application/json
      responses: {}
      summary: if config file not exist try to redirect to install page
      tags:
      - installation
  /answer/admin/api/answer/page:
    get:
      consumes:
      - application/json
      description: Status:[available,deleted]
      parameters:
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: user status
        enum:
        - available
        - deleted
        in: query
        name: status
        type: string
      - description: answer id or question title
        in: query
        name: query
        type: string
      - description: question id
        in: query
        name: question_id
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: AdminSearchAnswerList
      tags:
      - admin
  /answer/admin/api/answer/status:
    put:
      consumes:
      - application/json
      description: Status:[available,deleted]
      parameters:
      - description: AdminSetAnswerStatusRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AdminSetAnswerStatusRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: AdminSetAnswerStatus
      tags:
      - admin
  /answer/admin/api/dashboard:
    get:
      consumes:
      - application/json
      description: DashboardInfo
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: DashboardInfo
      tags:
      - admin
  /answer/admin/api/language/options:
    get:
      description: Get language options
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: Get language options
      tags:
      - Lang
  /answer/admin/api/question/page:
    get:
      consumes:
      - application/json
      description: Status:[available,closed,deleted]
      parameters:
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: user status
        enum:
        - available
        - closed
        - deleted
        in: query
        name: status
        type: string
      - description: question id or title
        in: query
        name: query
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: AdminSearchList
      tags:
      - admin
  /answer/admin/api/question/status:
    put:
      consumes:
      - application/json
      description: Status:[available,closed,deleted]
      parameters:
      - description: AdminSetQuestionStatusRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AdminSetQuestionStatusRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: AdminSetQuestionStatus
      tags:
      - admin
  /answer/admin/api/reasons:
    get:
      consumes:
      - application/json
      description: get reasons by object type and action
      parameters:
      - description: object_type
        enum:
        - question
        - answer
        - comment
        - user
        in: query
        name: object_type
        required: true
        type: string
      - description: action
        enum:
        - status
        - close
        - flag
        - review
        in: query
        name: action
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: get reasons by object type and action
      tags:
      - reason
  /answer/admin/api/report/:
    put:
      consumes:
      - application/json
      description: handle flag
      parameters:
      - description: flag
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.ReportHandleReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      - ApiKeyAuth: []
      summary: handle flag
      tags:
      - admin
  /answer/admin/api/reports/page:
    get:
      consumes:
      - application/json
      description: list report records
      parameters:
      - description: status
        enum:
        - pending
        - completed
        in: query
        name: status
        required: true
        type: string
      - description: object_type
        enum:
        - all
        - question
        - answer
        - comment
        in: query
        name: object_type
        required: true
        type: string
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      - ApiKeyAuth: []
      summary: list report page
      tags:
      - admin
  /answer/admin/api/roles:
    get:
      description: get role list
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  items:
                    $ref: '#/definitions/schema.GetRoleResp'
                  type: array
              type: object
      summary: get role list
      tags:
      - admin
  /answer/admin/api/setting/smtp:
    get:
      description: GetSMTPConfig get smtp config
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetSMTPConfigResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: GetSMTPConfig get smtp config
      tags:
      - admin
    put:
      description: update smtp config
      parameters:
      - description: smtp config
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateSMTPConfigReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update smtp config
      tags:
      - admin
  /answer/admin/api/siteinfo/branding:
    get:
      description: get site interface
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteBrandingResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site interface
      tags:
      - admin
    put:
      description: update site info branding
      parameters:
      - description: branding info
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteBrandingReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site info branding
      tags:
      - admin
  /answer/admin/api/siteinfo/custom-css-html:
    get:
      description: get site info custom html css config
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteCustomCssHTMLResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site info custom html css config
      tags:
      - admin
    put:
      description: update site custom css html config
      parameters:
      - description: login info
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteCustomCssHTMLReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site custom css html config
      tags:
      - admin
  /answer/admin/api/siteinfo/general:
    get:
      description: get site general information
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteGeneralResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site general information
      tags:
      - admin
    put:
      description: update site general information
      parameters:
      - description: general
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteGeneralReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site general information
      tags:
      - admin
  /answer/admin/api/siteinfo/interface:
    get:
      description: get site interface
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteInterfaceResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site interface
      tags:
      - admin
    put:
      description: update site info interface
      parameters:
      - description: general
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteInterfaceReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site info interface
      tags:
      - admin
  /answer/admin/api/siteinfo/legal:
    get:
      description: Set the legal information for the site
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteLegalResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: Set the legal information for the site
      tags:
      - admin
    put:
      description: update site legal info
      parameters:
      - description: write info
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteLegalReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site legal info
      tags:
      - admin
  /answer/admin/api/siteinfo/login:
    get:
      description: get site info login config
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteLoginResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site info login config
      tags:
      - admin
    put:
      description: update site login
      parameters:
      - description: login info
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteLoginReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site login
      tags:
      - admin
  /answer/admin/api/siteinfo/seo:
    get:
      description: get site seo information
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteSeoResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site seo information
      tags:
      - admin
    put:
      description: update site seo information
      parameters:
      - description: seo
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteSeoReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site seo information
      tags:
      - admin
  /answer/admin/api/siteinfo/theme:
    get:
      description: get site info theme config
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteThemeResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site info theme config
      tags:
      - admin
    put:
      description: update site custom css html config
      parameters:
      - description: login info
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteThemeReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site custom css html config
      tags:
      - admin
  /answer/admin/api/siteinfo/write:
    get:
      description: get site interface
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteWriteResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get site interface
      tags:
      - admin
    put:
      description: update site write info
      parameters:
      - description: write info
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.SiteWriteReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update site write info
      tags:
      - admin
  /answer/admin/api/theme/options:
    get:
      description: Get theme options
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: Get theme options
      tags:
      - admin
  /answer/admin/api/user:
    post:
      consumes:
      - application/json
      description: add user
      parameters:
      - description: user
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AddUserReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: add user
      tags:
      - admin
  /answer/admin/api/user/password:
    put:
      consumes:
      - application/json
      description: update user password
      parameters:
      - description: user
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateUserPasswordReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update user password
      tags:
      - admin
  /answer/admin/api/user/role:
    put:
      consumes:
      - application/json
      description: update user role
      parameters:
      - description: user
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateUserRoleReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update user role
      tags:
      - admin
  /answer/admin/api/user/status:
    put:
      consumes:
      - application/json
      description: update user
      parameters:
      - description: user
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateUserStatusReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update user
      tags:
      - admin
  /answer/admin/api/users/page:
    get:
      description: get user page
      parameters:
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: 'search query: email, username or id:[id]'
        in: query
        name: query
        type: string
      - description: staff user
        in: query
        name: staff
        type: boolean
      - description: user status
        enum:
        - suspended
        - deleted
        - inactive
        in: query
        name: status
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      records:
                        items:
                          $ref: '#/definitions/schema.GetUserPageResp'
                        type: array
                    type: object
              type: object
      security:
      - ApiKeyAuth: []
      summary: get user page
      tags:
      - admin
  /answer/api/v1/activity/timeline:
    get:
      description: get object timeline
      parameters:
      - description: object id
        in: query
        name: object_id
        type: string
      - description: tag slug name
        in: query
        name: tag_slug_name
        type: string
      - description: object type
        enum:
        - question
        - answer
        - tag
        in: query
        name: object_type
        type: string
      - description: is show vote
        in: query
        name: show_vote
        type: boolean
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetObjectTimelineResp'
              type: object
      summary: get object timeline
      tags:
      - Comment
  /answer/api/v1/activity/timeline/detail:
    get:
      description: get object timeline detail
      parameters:
      - description: revision id
        in: query
        name: revision_id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetObjectTimelineResp'
              type: object
      summary: get object timeline detail
      tags:
      - Comment
  /answer/api/v1/answer:
    delete:
      consumes:
      - application/json
      description: delete answer
      parameters:
      - description: answer
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.RemoveAnswerReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: delete answer
      tags:
      - api-answer
    post:
      consumes:
      - application/json
      description: Insert Answer
      parameters:
      - description: AnswerAddReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AnswerAddReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      security:
      - ApiKeyAuth: []
      summary: Insert Answer
      tags:
      - api-answer
    put:
      consumes:
      - application/json
      description: Update Answer
      parameters:
      - description: AnswerUpdateReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AnswerUpdateReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      security:
      - ApiKeyAuth: []
      summary: Update Answer
      tags:
      - api-answer
  /answer/api/v1/answer/acceptance:
    post:
      consumes:
      - application/json
      description: Accepted
      parameters:
      - description: AnswerAcceptedReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AnswerAcceptedReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      security:
      - ApiKeyAuth: []
      summary: Accepted
      tags:
      - api-answer
  /answer/api/v1/answer/info:
    get:
      consumes:
      - application/json
      description: Get Answer
      parameters:
      - default: "1"
        description: Answer TagID
        in: query
        name: id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      summary: Get Answer
      tags:
      - api-answer
  /answer/api/v1/answer/page:
    get:
      consumes:
      - application/json
      description: AnswerList <br> <b>order</b> (default or updated)
      parameters:
      - description: question_id
        in: query
        name: question_id
        required: true
        type: string
      - description: order
        in: query
        name: order
        required: true
        type: string
      - description: page
        in: query
        name: page
        required: true
        type: string
      - description: page_size
        in: query
        name: page_size
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      security:
      - ApiKeyAuth: []
      summary: AnswerList
      tags:
      - api-answer
  /answer/api/v1/collection/switch:
    post:
      consumes:
      - application/json
      description: add collection
      parameters:
      - description: collection
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.CollectionSwitchReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.CollectionSwitchResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: add collection
      tags:
      - Collection
  /answer/api/v1/comment:
    delete:
      consumes:
      - application/json
      description: remove comment
      parameters:
      - description: comment
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.RemoveCommentReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: remove comment
      tags:
      - Comment
    get:
      description: get comment by id
      parameters:
      - description: id
        in: query
        name: id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetCommentResp'
                        type: array
                    type: object
              type: object
      summary: get comment by id
      tags:
      - Comment
    post:
      consumes:
      - application/json
      description: add comment
      parameters:
      - description: comment
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AddCommentReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetCommentResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: add comment
      tags:
      - Comment
    put:
      consumes:
      - application/json
      description: update comment
      parameters:
      - description: comment
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateCommentReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update comment
      tags:
      - Comment
  /answer/api/v1/comment/page:
    get:
      description: get comment page
      parameters:
      - description: page
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: object id
        in: query
        name: object_id
        required: true
        type: string
      - description: query condition
        enum:
        - vote
        in: query
        name: query_cond
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetCommentResp'
                        type: array
                    type: object
              type: object
      summary: get comment page
      tags:
      - Comment
  /answer/api/v1/file:
    post:
      consumes:
      - multipart/form-data
      description: upload file
      parameters:
      - description: identify the source of the file upload
        enum:
        - post
        - avatar
        - branding
        in: formData
        name: source
        required: true
        type: string
      - description: file
        in: formData
        name: file
        required: true
        type: file
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  type: string
              type: object
      security:
      - ApiKeyAuth: []
      summary: upload file
      tags:
      - Upload
  /answer/api/v1/follow:
    post:
      consumes:
      - application/json
      description: follow object or cancel follow operation
      parameters:
      - description: follow
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.FollowReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.FollowResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: follow object or cancel follow operation
      tags:
      - Activity
  /answer/api/v1/follow/tags:
    put:
      consumes:
      - application/json
      description: update user follow tags
      parameters:
      - description: follow
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateFollowTagsReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update user follow tags
      tags:
      - Activity
  /answer/api/v1/language/config:
    get:
      description: get language config mapping
      parameters:
      - description: Accept-Language
        in: header
        name: Accept-Language
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: get language config mapping
      tags:
      - Lang
  /answer/api/v1/language/options:
    get:
      description: Get language options
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: Get language options
      tags:
      - Lang
  /answer/api/v1/notification/page:
    get:
      consumes:
      - application/json
      description: get notification list
      parameters:
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: type
        enum:
        - inbox
        - achievement
        in: query
        name: type
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: get notification list
      tags:
      - Notification
  /answer/api/v1/notification/read/state:
    put:
      consumes:
      - application/json
      description: ClearUnRead
      parameters:
      - description: NotificationClearIDRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.NotificationClearIDRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: ClearUnRead
      tags:
      - Notification
  /answer/api/v1/notification/read/state/all:
    put:
      consumes:
      - application/json
      description: ClearUnRead
      parameters:
      - description: NotificationClearRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.NotificationClearRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: ClearUnRead
      tags:
      - Notification
  /answer/api/v1/notification/status:
    get:
      consumes:
      - application/json
      description: GetRedDot
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: GetRedDot
      tags:
      - Notification
    put:
      consumes:
      - application/json
      description: DelRedDot
      parameters:
      - description: NotificationClearRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.NotificationClearRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: DelRedDot
      tags:
      - Notification
  /answer/api/v1/personal/answer/page:
    get:
      consumes:
      - application/json
      description: UserAnswerList
      parameters:
      - default: string
        description: username
        in: query
        name: username
        required: true
        type: string
      - description: order
        enum:
        - newest
        - score
        in: query
        name: order
        required: true
        type: string
      - default: "0"
        description: page
        in: query
        name: page
        required: true
        type: string
      - default: "20"
        description: pagesize
        in: query
        name: pagesize
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserAnswerList
      tags:
      - api-answer
  /answer/api/v1/personal/collection/page:
    get:
      consumes:
      - application/json
      description: UserCollectionList
      parameters:
      - default: "0"
        description: page
        in: query
        name: page
        required: true
        type: string
      - default: "20"
        description: pagesize
        in: query
        name: pagesize
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserCollectionList
      tags:
      - Collection
  /answer/api/v1/personal/comment/page:
    get:
      description: user personal comment list
      parameters:
      - description: page
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: username
        in: query
        name: username
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetCommentPersonalWithPageResp'
                        type: array
                    type: object
              type: object
      summary: user personal comment list
      tags:
      - Comment
  /answer/api/v1/personal/qa/top:
    get:
      consumes:
      - application/json
      description: UserTop
      parameters:
      - default: string
        description: username
        in: query
        name: username
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserTop
      tags:
      - Question
  /answer/api/v1/personal/rank/page:
    get:
      description: user personal rank list
      parameters:
      - description: page
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: username
        in: query
        name: username
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetRankPersonalWithPageResp'
                        type: array
                    type: object
              type: object
      summary: user personal rank list
      tags:
      - Rank
  /answer/api/v1/personal/user/info:
    get:
      consumes:
      - application/json
      description: GetOtherUserInfoByUsername
      parameters:
      - description: username
        in: query
        name: username
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetOtherUserInfoResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: GetOtherUserInfoByUsername
      tags:
      - User
  /answer/api/v1/personal/vote/page:
    get:
      consumes:
      - application/json
      description: user's vote
      parameters:
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetVoteWithPageResp'
                        type: array
                    type: object
              type: object
      security:
      - ApiKeyAuth: []
      summary: user's votes
      tags:
      - Activity
  /answer/api/v1/post/render:
    post:
      consumes:
      - application/json
      description: render post content
      parameters:
      - description: PostRenderReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.PostRenderReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: render post content
      tags:
      - Upload
  /answer/api/v1/question:
    delete:
      consumes:
      - application/json
      description: delete question
      parameters:
      - description: question
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.RemoveQuestionReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: delete question
      tags:
      - Question
    post:
      consumes:
      - application/json
      description: add question
      parameters:
      - description: question
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.QuestionAdd'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: add question
      tags:
      - Question
    put:
      consumes:
      - application/json
      description: update question
      parameters:
      - description: question
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.QuestionUpdate'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: update question
      tags:
      - Question
  /answer/api/v1/question/closemsglist:
    get:
      consumes:
      - application/json
      description: close question msg list
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: close question msg list
      tags:
      - Question
  /answer/api/v1/question/info:
    get:
      consumes:
      - application/json
      description: get question details
      parameters:
      - default: "1"
        description: Question TagID
        in: query
        name: id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      security:
      - ApiKeyAuth: []
      summary: get question details
      tags:
      - Question
  /answer/api/v1/question/page:
    get:
      consumes:
      - application/json
      description: get questions by page
      parameters:
      - description: QuestionPageReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.QuestionPageReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.QuestionPageResp'
                        type: array
                    type: object
              type: object
      summary: get questions by page
      tags:
      - Question
  /answer/api/v1/question/reopen:
    put:
      consumes:
      - application/json
      description: reopen question
      parameters:
      - description: question
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.ReopenQuestionReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: reopen question
      tags:
      - Question
  /answer/api/v1/question/similar:
    get:
      consumes:
      - application/json
      description: add question title like
      parameters:
      - default: string
        description: title
        in: query
        name: title
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: add question title like
      tags:
      - Question
  /answer/api/v1/question/similar/tag:
    get:
      consumes:
      - application/json
      description: Search Similar Question
      parameters:
      - default: ""
        description: question_id
        in: query
        name: question_id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      summary: Search Similar Question
      tags:
      - Question
  /answer/api/v1/question/status:
    put:
      consumes:
      - application/json
      description: Close question
      parameters:
      - description: question
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.CloseQuestionReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: Close question
      tags:
      - Question
  /answer/api/v1/question/tags:
    get:
      description: get tag list
      parameters:
      - description: tag
        in: query
        name: tag
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  items:
                    $ref: '#/definitions/schema.GetTagResp'
                  type: array
              type: object
      security:
      - ApiKeyAuth: []
      summary: get tag list
      tags:
      - Tag
  /answer/api/v1/reasons:
    get:
      consumes:
      - application/json
      description: get reasons by object type and action
      parameters:
      - description: object_type
        enum:
        - question
        - answer
        - comment
        - user
        in: query
        name: object_type
        required: true
        type: string
      - description: action
        enum:
        - status
        - close
        - flag
        - review
        in: query
        name: action
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: get reasons by object type and action
      tags:
      - reason
  /answer/api/v1/report:
    post:
      consumes:
      - application/json
      description: add report <br> source (question, answer, comment, user)
      parameters:
      - description: report
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.AddReportReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      - ApiKeyAuth: []
      summary: add report
      tags:
      - Report
  /answer/api/v1/report/type/list:
    get:
      description: get report type list
      parameters:
      - description: report source
        enum:
        - question
        - answer
        - comment
        - user
        in: query
        name: source
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  items:
                    $ref: '#/definitions/schema.GetReportTypeResp'
                  type: array
              type: object
      summary: get report type list
      tags:
      - Report
  /answer/api/v1/revisions:
    get:
      description: get revision list
      parameters:
      - description: object id
        in: query
        name: object_id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  items:
                    $ref: '#/definitions/schema.GetRevisionResp'
                  type: array
              type: object
      summary: get revision list
      tags:
      - Revision
  /answer/api/v1/revisions/audit:
    put:
      description: revision audit operation:approve or reject
      parameters:
      - description: audit
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.RevisionAuditReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: revision audit
      tags:
      - Revision
  /answer/api/v1/revisions/edit/check:
    get:
      consumes:
      - application/json
      description: check can update revision
      parameters:
      - default: string
        description: id
        in: query
        name: id
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: check can update revision
      tags:
      - Revision
  /answer/api/v1/revisions/unreviewed:
    get:
      description: get unreviewed revision list
      parameters:
      - description: page id
        in: query
        name: page
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetUnreviewedRevisionResp'
                        type: array
                    type: object
              type: object
      security:
      - ApiKeyAuth: []
      summary: get unreviewed revision list
      tags:
      - Revision
  /answer/api/v1/search:
    get:
      description: search object
      parameters:
      - description: query string
        in: query
        name: q
        required: true
        type: string
      - description: order
        enum:
        - newest
        - active
        - score
        - relevance
        in: query
        name: order
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SearchListResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: search object
      tags:
      - Search
  /answer/api/v1/siteinfo:
    get:
      description: get site info
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.SiteInfoResp'
              type: object
      summary: get site info
      tags:
      - site
  /answer/api/v1/siteinfo/legal:
    get:
      description: get site legal info
      parameters:
      - description: legal information type
        enum:
        - tos
        - privacy
        in: query
        name: info_type
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetSiteLegalInfoResp'
              type: object
      summary: get site legal info
      tags:
      - site
  /answer/api/v1/tag:
    delete:
      consumes:
      - application/json
      description: delete tag
      parameters:
      - description: tag
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.RemoveTagReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: delete tag
      tags:
      - Tag
    get:
      consumes:
      - application/json
      description: get tag one
      parameters:
      - description: tag id
        in: query
        name: tag_id
        required: true
        type: string
      - description: tag name
        in: query
        name: tag_name
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetTagResp'
              type: object
      summary: get tag one
      tags:
      - Tag
    put:
      consumes:
      - application/json
      description: update tag
      parameters:
      - description: tag
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateTagReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: update tag
      tags:
      - Tag
  /answer/api/v1/tag/synonym:
    put:
      consumes:
      - application/json
      description: update tag
      parameters:
      - description: tag
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateTagSynonymReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: update tag
      tags:
      - Tag
  /answer/api/v1/tag/synonyms:
    get:
      description: get tag synonyms
      parameters:
      - description: tag id
        in: query
        name: tag_id
        required: true
        type: integer
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetTagSynonymsResp'
              type: object
      summary: get tag synonyms
      tags:
      - Tag
  /answer/api/v1/tags/following:
    get:
      description: get following tag list
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  items:
                    $ref: '#/definitions/schema.GetFollowingTagsResp'
                  type: array
              type: object
      security:
      - ApiKeyAuth: []
      summary: get following tag list
      tags:
      - Tag
  /answer/api/v1/tags/page:
    get:
      description: get tag page
      parameters:
      - description: page size
        in: query
        name: page
        type: integer
      - description: page size
        in: query
        name: page_size
        type: integer
      - description: slug_name
        in: query
        name: slug_name
        type: string
      - description: query condition
        enum:
        - popular
        - name
        - newest
        in: query
        name: query_cond
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  allOf:
                  - $ref: '#/definitions/pager.PageModel'
                  - properties:
                      list:
                        items:
                          $ref: '#/definitions/schema.GetTagPageResp'
                        type: array
                    type: object
              type: object
      summary: get tag page
      tags:
      - Tag
  /answer/api/v1/user/action/record:
    get:
      description: ActionRecord
      parameters:
      - description: action
        enum:
        - login
        - e_mail
        - find_pass
        in: query
        name: action
        required: true
        type: string
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.ActionRecordResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: ActionRecord
      tags:
      - User
  /answer/api/v1/user/email:
    put:
      consumes:
      - application/json
      description: user change email verification
      parameters:
      - description: UserChangeEmailVerifyReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserChangeEmailVerifyReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: user change email verification
      tags:
      - User
  /answer/api/v1/user/email/change/code:
    post:
      consumes:
      - application/json
      description: send email to the user email then change their email
      parameters:
      - description: UserChangeEmailSendCodeReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserChangeEmailSendCodeReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: send email to the user email then change their email
      tags:
      - User
  /answer/api/v1/user/email/notification:
    put:
      consumes:
      - application/json
      description: unsubscribe email notification
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: unsubscribe email notification
      tags:
      - User
  /answer/api/v1/user/email/verification:
    post:
      consumes:
      - application/json
      description: UserVerifyEmail
      parameters:
      - default: ""
        description: code
        in: query
        name: code
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetUserResp'
              type: object
      summary: UserVerifyEmail
      tags:
      - User
  /answer/api/v1/user/email/verification/send:
    post:
      consumes:
      - application/json
      description: UserVerifyEmailSend
      parameters:
      - default: ""
        description: captcha_id
        in: query
        name: captcha_id
        type: string
      - default: ""
        description: captcha_code
        in: query
        name: captcha_code
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      security:
      - ApiKeyAuth: []
      summary: UserVerifyEmailSend
      tags:
      - User
  /answer/api/v1/user/info:
    get:
      consumes:
      - application/json
      description: get user info, if user no login response http code is 200, but
        user info is null
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetUserToSetShowResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: GetUserInfoByUserID
      tags:
      - User
    put:
      consumes:
      - application/json
      description: UserUpdateInfo update user info
      parameters:
      - description: access-token
        in: header
        name: Authorization
        required: true
        type: string
      - description: UpdateInfoRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateInfoRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserUpdateInfo update user info
      tags:
      - User
  /answer/api/v1/user/interface:
    put:
      consumes:
      - application/json
      description: UserUpdateInterface update user interface config
      parameters:
      - description: access-token
        in: header
        name: Authorization
        required: true
        type: string
      - description: UpdateInfoRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UpdateUserInterfaceRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserUpdateInterface update user interface config
      tags:
      - User
  /answer/api/v1/user/login/email:
    post:
      consumes:
      - application/json
      description: UserEmailLogin
      parameters:
      - description: UserEmailLogin
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserEmailLogin'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetUserResp'
              type: object
      summary: UserEmailLogin
      tags:
      - User
  /answer/api/v1/user/logout:
    get:
      consumes:
      - application/json
      description: user logout
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: user logout
      tags:
      - User
  /answer/api/v1/user/notice/set:
    post:
      consumes:
      - application/json
      description: UserNoticeSet
      parameters:
      - description: UserNoticeSetRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserNoticeSetRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.UserNoticeSetResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: UserNoticeSet
      tags:
      - User
  /answer/api/v1/user/password:
    put:
      consumes:
      - application/json
      description: UserModifyPassWord
      parameters:
      - description: UserModifyPassWordRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserModifyPassWordRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserModifyPassWord
      tags:
      - User
  /answer/api/v1/user/password/replacement:
    post:
      consumes:
      - application/json
      description: UseRePassWord
      parameters:
      - description: UserRePassWordRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserRePassWordRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      summary: UseRePassWord
      tags:
      - User
  /answer/api/v1/user/password/reset:
    post:
      consumes:
      - application/json
      description: RetrievePassWord
      parameters:
      - description: UserRetrievePassWordRequest
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserRetrievePassWordRequest'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      summary: RetrievePassWord
      tags:
      - User
  /answer/api/v1/user/ranking:
    get:
      consumes:
      - application/json
      description: get user ranking
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.UserRankingResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: get user ranking
      tags:
      - User
  /answer/api/v1/user/register/captcha:
    get:
      consumes:
      - application/json
      description: UserRegisterCaptcha
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetUserResp'
              type: object
      summary: UserRegisterCaptcha
      tags:
      - User
  /answer/api/v1/user/register/email:
    post:
      consumes:
      - application/json
      description: UserRegisterByEmail
      parameters:
      - description: UserRegisterReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.UserRegisterReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.GetUserResp'
              type: object
      summary: UserRegisterByEmail
      tags:
      - User
  /answer/api/v1/vote/down:
    post:
      consumes:
      - application/json
      description: add vote
      parameters:
      - description: vote
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.VoteReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.VoteResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: vote down
      tags:
      - Activity
  /answer/api/v1/vote/up:
    post:
      consumes:
      - application/json
      description: add vote
      parameters:
      - description: vote
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/schema.VoteReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/schema.VoteResp'
              type: object
      security:
      - ApiKeyAuth: []
      summary: vote up
      tags:
      - Activity
  /custom.css:
    get:
      description: get site robots information
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      summary: get site robots information
      tags:
      - site
  /installation/base-info:
    post:
      consumes:
      - application/json
      description: init base info
      parameters:
      - description: InitBaseInfoReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/install.InitBaseInfoReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: init base info
      tags:
      - installation
  /installation/config-file/check:
    post:
      consumes:
      - application/json
      description: check config file if exist when installation
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/install.CheckConfigFileResp'
              type: object
      summary: check config file if exist when installation
      tags:
      - installation
  /installation/db/check:
    post:
      consumes:
      - application/json
      description: check database if exist when installation
      parameters:
      - description: CheckDatabaseReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/install.CheckDatabaseReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  $ref: '#/definitions/install.CheckConfigFileResp'
              type: object
      summary: check database if exist when installation
      tags:
      - installation
  /installation/init:
    post:
      consumes:
      - application/json
      description: init environment
      parameters:
      - description: CheckDatabaseReq
        in: body
        name: data
        required: true
        schema:
          $ref: '#/definitions/install.CheckDatabaseReq'
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      summary: init environment
      tags:
      - installation
  /installation/language/options:
    get:
      description: get installation language options
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            allOf:
            - $ref: '#/definitions/handler.RespBody'
            - properties:
                data:
                  items:
                    $ref: '#/definitions/translator.LangOption'
                  type: array
              type: object
      summary: get installation language options
      tags:
      - Lang
  /personal/question/page:
    get:
      consumes:
      - application/json
      description: UserList
      parameters:
      - default: string
        description: username
        in: query
        name: username
        required: true
        type: string
      - description: order
        enum:
        - newest
        - score
        in: query
        name: order
        required: true
        type: string
      - default: "0"
        description: page
        in: query
        name: page
        required: true
        type: string
      - default: "20"
        description: pagesize
        in: query
        name: pagesize
        required: true
        type: string
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            $ref: '#/definitions/handler.RespBody'
      security:
      - ApiKeyAuth: []
      summary: UserList
      tags:
      - Question
  /robots.txt:
    get:
      description: get site robots information
      produces:
      - application/json
      responses:
        "200":
          description: OK
          schema:
            type: string
      summary: get site robots information
      tags:
      - site
securityDefinitions:
  ApiKeyAuth:
    in: header
    name: Authorization
    type: apiKey
swagger: "2.0"