app_desc = A painless self-hosted Git service

home = Home
dashboard = Dashboard
explore = Explore
help = Help
sign_in = Sign In
sign_out = Sign Out
sign_up = Sign Up
register = Register
website = Website
page = Page
template = Template
language = Language
create_new = Create...
user_profile_and_more = User profile and more
signed_in_as = Signed in as

username = Username
email = Email
password = Password
re_type = Re-Type
captcha = Captcha

repository = Repository
organization = Organization
mirror = Mirror
new_repo = New Repository
new_migrate = New Migration
new_mirror = New Mirror
new_fork = New Fork Repository
new_org = New Organization
manage_org = Manage Organizations
admin_panel = Admin Panel
account_settings = Account Settings
settings = Settings
your_profile = Your Profile
your_settings = Your Settings

activities = Activities
pull_requests = Pull Requests
issues = Issues

cancel = Cancel

[status]
page_not_found = Page Not Found
internal_server_error = Internal Server Error

[install]
install = Installation
title = Install Steps For First-time Run
docker_helper = If you're running Gogs inside Docker, please read <a target="_blank" href="%s">Guidelines</a> carefully before you change anything in this page!
requite_db_desc = Gogs requires MySQL, PostgreSQL, SQLite3 or TiDB (via MySQL protocol).
db_title = Database Settings
db_type = Database Type
host = Host
user = User
password = Password
db_name = Database Name
db_schema = Schema
db_helper = Please use INNODB engine with utf8_general_ci charset for MySQL.
ssl_mode = SSL Mode
path = Path
sqlite_helper = The file path of SQLite3 database. <br>Please use absolute path when you start as service.
err_empty_db_path = SQLite3 database path cannot be empty.
no_admin_and_disable_registration = You cannot disable registration without creating an admin account.
err_empty_admin_password = Admin password cannot be empty.

general_title = Application General Settings
app_name = Application Name
app_name_helper = Put your organization name here huge and loud!
repo_path = Repository Root Path
repo_path_helper = All Git remote repositories will be saved to this directory.
run_user = Run User
run_user_helper = The user must have access to Repository Root Path and run Gogs.
domain = Domain
domain_helper = This affects SSH clone URLs.
ssh_port = SSH Port
ssh_port_helper = Port number which your SSH server is using, leave it empty to disable SSH feature.
use_builtin_ssh_server = Use Builtin SSH Server
use_builtin_ssh_server_popup = Start builtin SSH server for Git operations to distinguish from system SSH daemon.
http_port = HTTP Port
http_port_helper = Port number which application will listen on.
app_url = Application URL
app_url_helper = This affects HTTP/HTTPS clone URL and somewhere in email.
log_root_path = Log Path
log_root_path_helper = Directory to write log files to.
enable_console_mode = Enable Console Mode
enable_console_mode_popup = In addition to file mode, also print logs to console.

optional_title = Optional Settings
email_title = Email Service Settings
smtp_host = SMTP Host
smtp_from = From
smtp_from_helper = Mail from address, RFC 5322. It can be just an email address, or the "Name" <email@example.com> format.
mailer_user = Sender Email
mailer_password = Sender Password
register_confirm = Enable Register Confirmation
mail_notify = Enable Mail Notification
server_service_title = Server and Other Services Settings
offline_mode = Enable Offline Mode
offline_mode_popup = Disable CDN even in production mode, all resource files will be served locally.
disable_gravatar = Disable Gravatar Service
disable_gravatar_popup = Disable Gravatar and custom sources, all avatars are uploaded by users or default.
federated_avatar_lookup = Enable Federated Avatars Lookup
federated_avatar_lookup_popup = Enable federated avatars lookup to use federated open source service based on libravatar.
disable_registration = Disable Self-registration
disable_registration_popup = Disable user self-registration, only admin can create accounts.
enable_captcha = Enable Captcha
enable_captcha_popup = Require validate captcha for user self-registration.
require_sign_in_view = Enable Require Sign In to View Pages
require_sign_in_view_popup = Only signed in users can view pages, visitors will only be able to see sign in/up pages.
admin_setting_desc = You don't need to create an admin account right now. The first user in the users table will be automatically granted admin access.
admin_title = Admin Account Settings
admin_name = Username
admin_password = Password
confirm_password = Confirm Password
admin_email = Admin Email
install_gogs = Install Gogs
test_git_failed = Failed to test 'git' command: %v
sqlite3_not_available = Your release version does not support SQLite3, please download the official binary version from %s, NOT the gobuild version.
invalid_db_setting = Database setting is not correct: %v
invalid_repo_path = Repository root path is invalid: %v
run_user_not_match = Run user isn't the current user: %s -> %s
smtp_host_missing_port = SMTP Host port missing from address.
invalid_smtp_from = SMTP From field is invalid: %v
save_config_failed = Failed to save configuration: %v
init_failed = Failed to initialize application: %v
invalid_admin_setting = Admin account setting is invalid: %v
install_success = Welcome! We're glad that you chose Gogs, have fun and take care.
invalid_log_root_path = Log root path is invalid: %v

[home]
uname_holder = Username or email
password_holder = Password
switch_dashboard_context = Switch Dashboard Context
my_repos = My Repositories
show_more_repos = Show more repositories...
collaborative_repos = Collaborative Repositories
my_orgs = My Organizations
my_mirrors = My Mirrors
view_home = View %s

issues.in_your_repos = In your repositories

[explore]
repos = Repositories
users = Users
organizations = Organizations
search = Search

[auth]
create_new_account = Create New Account
register_hepler_msg = Already have an account? Sign in now!
social_register_hepler_msg = Already have an account? Bind now!
disable_register_prompt = Sorry, registration has been disabled. Please contact the site administrator.
disable_register_mail = Sorry, email services are disabled. Please contact the site administrator.
auth_source = Authentication Source
local = Local
remember_me = Remember Me
forgot_password= Forgot Password
forget_password = Forgot password?
sign_up_now = Need an account? Sign up now.
confirmation_mail_sent_prompt = A new confirmation email has been sent to <b>%s</b>, please check your inbox within the next %d hours to complete the registration process.
active_your_account = Activate Your Account
prohibit_login = Login Prohibited
prohibit_login_desc = Your account is prohibited from logging in. Please contact the site admin.
resent_limit_prompt = Sorry, you already requested an activation email recently. Please wait 3 minutes then try again.
has_unconfirmed_mail = Hi %s, you have an unconfirmed email address (<b>%s</b>). If you haven't received a confirmation email or need to receive a new one, please click the button below.
resend_mail = Click here to resend your activation email
send_reset_mail = Click here to (re)send your password reset email
reset_password = Reset Your Password
invalid_code = Sorry, your confirmation code has expired or not valid.
reset_password_helper = Click here to reset your password
password_too_short = Password length must be at least 6 characters.
non_local_account = Non-local accounts cannot change passwords through Gogs.

login_two_factor = Two-factor Authentication
login_two_factor_passcode = Authentication Passcode
login_two_factor_enter_recovery_code = Enter a two-factor recovery code
login_two_factor_recovery = Two-factor Recovery
login_two_factor_recovery_code = Recovery Code
login_two_factor_enter_passcode = Enter a two-factor passcode
login_two_factor_invalid_recovery_code = Recovery code already used or invalid.

[mail]
activate_account = Please activate your account
activate_email = Verify your email address
reset_password = Reset your password
register_success = Registration successful, welcome
register_notify = Welcome on board

[modal]
yes = Yes
no = No
modify = Modify

[form]
UserName = Username
RepoName = Repository name
Email = Email address
Password = Password
Retype = Re-type password
SSHTitle = SSH key name
HttpsUrl = HTTPS URL
PayloadUrl = Payload URL
TeamName = Team name
AuthName = Authorization name
AdminEmail = Admin email

NewBranchName = New branch name
CommitSummary = Commit summary
CommitMessage = Commit message
CommitChoice = Commit choice
TreeName = File path
Content = Content

require_error = ` cannot be empty.`
alpha_dash_error = ` must be alphanumeric or dash(-_) characters.`
alpha_dash_dot_error = ` must be alphanumeric or dash(-_) or dot characters.`
alpha_dash_dot_slash_error = ` must be alphanumeric, dash (-_), dot or slash characters.`
size_error  = ` size must be %s.`
min_size_error = ` must contain at least %s characters.`
max_size_error = ` must contain at most %s characters.`
email_error = ` is not a valid email address.`
url_error = ` is not a valid URL.`
include_error = ` must contain substring '%s'.`
unknown_error = Unknown error:
captcha_incorrect = Captcha didn't match.
password_not_match = Password and confirm password are not same.

username_been_taken = Username has already been taken.
repo_name_been_taken = Repository name has already been taken.
org_name_been_taken = Organization name has already been taken.
team_name_been_taken = Team name has already been taken.
email_been_used = Email address has already been used.
username_password_incorrect = Username or password is not correct.
auth_source_mismatch = The authentication source selected is not associated with the user.
enterred_invalid_repo_name = Please make sure that the repository name you entered is correct.
enterred_invalid_owner_name = Please make sure that the owner name you entered is correct.
enterred_invalid_password = Please make sure the that password you entered is correct.
user_not_exist = Given user does not exist.
last_org_owner = Removing the last remaining user from an owner team is not allowed, as an organization must always have at least one owner.

invalid_ssh_key = Sorry, verification of your SSH key failed: %s
unable_verify_ssh_key = Gogs cannot verify your SSH key, but it's assumed to be valid. Please double-check it.
auth_failed = Authentication failed: %v

still_own_repo = Your account still has ownership over at least one repository, you have to delete or transfer them first.
still_has_org = Your account still has membership in at least one organization, you have to leave or delete your memberships first.
org_still_own_repo = This organization still has ownership of repositories, you must delete or transfer them first.

target_branch_not_exist = Target branch does not exist.

[user]
change_avatar = Change your avatar
join_on = Joined on
repositories = Repositories
activity = Public Activity
followers = Followers
starred = Starred repositories
following = Following
follow = Follow
unfollow = Unfollow

form.name_not_allowed = User name or pattern %q is not allowed.

[settings]
profile = Profile
password = Password
avatar = Avatar
ssh_keys = SSH Keys
security = Security
repos = Repositories
orgs = Organizations
applications = Applications
delete = Delete Account

public_profile = Public Profile
profile_desc = Your email address is public and will be used for any account related notifications, and any web based operations made via the site.
password_username_disabled = Non-local type users are not allowed to change their username.
full_name = Full Name
website = Website
location = Location
update_profile = Update Profile
update_profile_success = Your profile has been updated successfully.
change_username = Username Changed
change_username_prompt = This change will affect the way how links relate to your account.
continue = Continue
cancel = Cancel

lookup_avatar_by_mail = Lookup Avatar by mail
federated_avatar_lookup = Federated Avatar Lookup
enable_custom_avatar = Use Custom Avatar
choose_new_avatar = Choose new avatar
update_avatar = Update Avatar Setting
delete_current_avatar = Delete Current Avatar
uploaded_avatar_not_a_image = Uploaded file is not a image.
update_avatar_success = Your avatar setting has been updated successfully.

change_password = Change Password
old_password = Current Password
new_password = New Password
retype_new_password = Retype New Password
password_incorrect = Current password is not correct.
change_password_success = Your password was successfully changed and can now be used for logging in.
password_change_disabled = Non-local type users are not allowed to change their password.

emails = Email Addresses
manage_emails = Manage email addresses
email_desc = Your primary email address will be used for notifications and other operations.
primary = Primary
primary_email = Set as primary
delete_email = Delete
email_deletion = Email Deletion
email_deletion_desc = Deleting this email address will remove related information from your account. Do you want to continue?
email_deletion_success = Email has been deleted successfully!
add_new_email = Add new email address
add_email = Add Email
add_email_confirmation_sent = A new confirmation email has been sent to '%s', please check your inbox within the next %d hours to complete the confirmation process.
add_email_success = Your new email address was successfully added.

manage_ssh_keys = Manage SSH Keys
add_key = Add Key
ssh_desc = This is a list of SSH keys associated with your account. As these keys allow anyone using them to gain access to your repositories, it is highly important that you make sure you recognize them.
ssh_helper = <strong>Don't know how?</strong> Check out GitHub's guide to <a href="%s">create your own SSH keys</a> or solve <a href="%s">common problems</a> you might encounter using SSH.
add_new_key = Add SSH Key
ssh_key_been_used = Public key content has been used.
ssh_key_name_used = Public key with same name has already existed.
key_name = Key Name
key_content = Content
add_key_success = New SSH key '%s' has been added successfully!
delete_key = Delete
ssh_key_deletion = SSH Key Deletion
ssh_key_deletion_desc = Delete this SSH key will remove all related accesses for your account. Do you want to continue?
ssh_key_deletion_success = SSH key has been deleted successfully!
add_on = Added on
last_used = Last used on
no_activity = No recent activity
key_state_desc = This key is used in last 7 days
token_state_desc = This token is used in last 7 days

two_factor = Two-factor Authentication
two_factor_status = Status:
two_factor_on = On
two_factor_off = Off
two_factor_enable = Enable
two_factor_disable = Disable
two_factor_view_recovery_codes = View and save <a href="%s%s">your recovery codes</a> in a safe place. You can use them as passcode if you lose access to your authentication application.
two_factor_http = For HTTP/HTTPS operations, you are no longer able to use plain username and password. Please create and use <a href="%[1]s%[2]s">Personal Access Token</a> as your credential, e.g. <code>%[3]s</code>.
two_factor_enable_title = Enable Two-factor Authentication
two_factor_scan_qr = Please use your authentication application to scan the image:
two_factor_or_enter_secret = Or enter the secret:
two_factor_then_enter_passcode = Then enter passcode:
two_factor_verify = Verify
two_factor_invalid_passcode = The passcode you entered is not valid, please try again!
two_factor_reused_passcode = The passcode you entered has already been used, please try another one!
two_factor_enable_error = Enable Two-factor authentication failed: %v
two_factor_enable_success = Two-factor authentication has enabled for your account successfully!
two_factor_recovery_codes_title = Two-factor Authentication Recovery Codes
two_factor_recovery_codes_desc = Recovery codes are used when you temporarily lose access to your authentication application. Each recovery code can only be used once, <b>please keep these codes in a safe place</b>.
two_factor_regenerate_recovery_codes = Regenerate Recovery Codes
two_factor_regenerate_recovery_codes_error = Regenerate recovery codes failed: %v
two_factor_regenerate_recovery_codes_success = New recovery codes has been generated successfully!
two_factor_disable_title = Disable Two-factor Authentication
two_factor_disable_desc = Your account security level will decrease after disabled two-factor authentication. Do you want to continue?
two_factor_disable_success = Two-factor authentication has disabled successfully!

manage_access_token = Manage Personal Access Tokens
generate_new_token = Generate New Token
tokens_desc = Tokens you have generated that can be used to access the Gogs APIs.
new_token_desc = Each token will have full access to your account.
token_name = Token Name
generate_token = Generate Token
generate_token_succees = Your access token was successfully generated! Make sure to copy it right now, as you won't be able to see it again later!
delete_token = Delete
access_token_deletion = Personal Access Token Deletion
access_token_deletion_desc = Delete this personal access token will remove all related accesses of application. Do you want to continue?
delete_token_success = Personal access token has been removed successfully! Don't forget to update your application as well.
token_name_exists = Token with same name already exists.

orgs.none = You are not a member of any organizations.
orgs.leave_title = Leave organization
orgs.leave_desc = You will lose access to all repositories and teams after you left the organization. Do you want to continue?

repos.leave = Leave
repos.leave_title = Leave repository
repos.leave_desc = You will lose access to the repository after you left. Do you want to continue?
repos.leave_success = You have left repository '%s' successfully!

delete_account = Delete Your Account
delete_prompt = The operation will delete your account permanently, and <strong>CANNOT</strong> be undone!
confirm_delete_account = Confirm Deletion
delete_account_title = Account Deletion
delete_account_desc = This account is going to be deleted permanently, do you want to continue?

[repo]
owner = Owner
repo_name = Repository Name
repo_name_helper = A good repository name is usually composed of short, memorable and unique keywords.
visibility = Visibility
unlisted = Unlisted
visiblity_helper = This repository is <span class="ui red text">Private</span>
unlisted_helper = This repository is <span class="ui red text">Unlisted</span>
visiblity_helper_forced = Site admin has forced all new repositories to be <span class="ui red text">Private</span>
visiblity_fork_helper = (Change of this value will affect all forks)
clone_helper = Need help cloning? Visit <a target="_blank" href="%s">Help</a>!
fork_repo = Fork Repository
fork_from = Fork From
fork_visiblity_helper = You cannot alter the visibility of a forked repository.
repo_desc = Description
repo_lang = Language
repo_gitignore_helper = Select .gitignore templates
license = License
license_helper = Select a license file
readme = Readme
readme_helper = Select a readme template
auto_init = Initialize this repository with selected files and template
create_repo = Create Repository
default_branch = Default Branch
mirror_prune = Prune
mirror_prune_desc = Remove any remote-tracking references that no longer exist on the remote
mirror_interval = Mirror Interval (hour)
mirror_address = Mirror Address
mirror_address_desc = Please include necessary user credentials in the address.
mirror_last_synced = Last Synced
watchers = Watchers
stargazers = Stargazers
forks = Forks
repo_description_helper = Description of repository. Maximum 512 characters length.
repo_description_length = Available characters

form.reach_limit_of_creation = The owner has reached maximum creation limit of %d repositories.
form.name_not_allowed = Repository name or pattern %q is not allowed.

need_auth = Need Authorization
migrate_type = Migration Type
migrate_type_helper = This repository will be a <span class="text blue">mirror</span>
migrate_repo = Migrate Repository
migrate.clone_address = Clone Address
migrate.clone_address_desc = This can be a HTTP/HTTPS/GIT URL.
migrate.clone_address_desc_import_local = You're also allowed to migrate a repository by local server path.
migrate.permission_denied = You are not allowed to import local repositories.
migrate.invalid_local_path = Invalid local path, it does not exist or not a directory.
migrate.clone_address_resolved_to_blocked_local_address = Clone address resolved to a local network address that is implicitly blocked.
migrate.failed = Migration failed: %v

mirror_from = mirror of
forked_from = forked from
copy_link = Copy
copy_link_success = Copied!
copy_link_error = Press ⌘-C or Ctrl-C to copy
copied = Copied OK
unwatch = Unwatch
watch = Watch
unstar = Unstar
star = Star
fork = Fork

no_desc = No Description
quick_guide = Quick Guide
clone_this_repo = Clone this repository
create_new_repo_command = Create a new repository on the command line
push_exist_repo = Push an existing repository from the command line
bare_message = This repository does not have any content yet.

files = Files
branch = Branch
tree = Tree
filter_branch_and_tag = Filter branch or tag
branches = Branches
tags = Tags
issues = Issues
pulls = Pull Requests
labels = Labels
milestones = Milestones
commits = Commits
git_branches = Branches
releases = Releases
file_raw = Raw
file_history = History
file_view_raw = View Raw
file_permalink = Permalink
file_too_large = This file is too large to be shown
video_not_supported_in_browser = Your browser doesn't support HTML5 video tag.

branches.overview = Overview
branches.active_branches = Active Branches
branches.stale_branches = Stale Branches
branches.all = All Branches
branches.updated_by = Updated %[1]s by %[2]s
branches.change_default_branch = Change Default Branch

editor.new_file = New file
editor.upload_file = Upload file
editor.edit_file = Edit file
editor.preview_changes = Preview Changes
editor.cannot_edit_non_text_files = Cannot edit non-text files
editor.edit_this_file = Edit this file
editor.must_be_on_a_branch = You must be on a branch to make or propose changes to this file
editor.fork_before_edit = You must fork this repository before editing the file
editor.delete_this_file = Delete this file
editor.must_have_write_access = You must have write access to make or propose changes to this file
editor.file_delete_success = File '%s' has been deleted successfully!
editor.name_your_file = Name your file...
editor.filename_help = To add directory, just type it and press /. To remove a directory, go to the beginning of the field and press backspace.
editor.or = or
editor.cancel_lower = cancel
editor.commit_changes = Commit Changes
editor.add_tmpl = Add '%s/<filename>'
editor.add = Add '%s'
editor.update = Update '%s'
editor.delete = Delete '%s'
editor.commit_message_desc = Add an optional extended description...
editor.commit_directly_to_this_branch = Commit directly to the <strong class="branch-name">%s</strong> branch.
editor.create_new_branch = Create a <strong>new branch</strong> for this commit and start a pull request.
editor.new_branch_name_desc = New branch name...
editor.cancel = Cancel
editor.filename_cannot_be_empty = Filename cannot be empty.
editor.branch_already_exists = Branch '%s' already exists in this repository.
editor.directory_is_a_file = Entry '%s' in the parent path is a file not a directory in this repository.
editor.file_is_a_symlink = The file '%s' is a symlink that cannot be modified from the web editor.
editor.filename_is_a_directory = The filename '%s' is an existing directory in this repository.
editor.file_editing_no_longer_exists = The file '%s' you are editing no longer exists in the repository.
editor.file_changed_while_editing = File content has been changed since you started editing. <a target="_blank" href="%s">Click here</a> to see what have been changed or <strong>press commit again</strong> to overwrite those changes.
editor.file_already_exists = A file with name '%s' already exists in this repository.
editor.no_changes_to_show = There are no changes to show.
editor.fail_to_update_file = Failed to update/create file '%s' with error: %v
editor.fail_to_delete_file = Failed to delete file '%s' with error: %v
editor.add_subdir = Add subdirectory...
editor.unable_to_upload_files = Failed to upload files to '%s' with error: %v
editor.upload_files_to_dir = Upload files to '%s'

commits.commit_history = Commit History
commits.commits = Commits
commits.search = Search commits
commits.find = Find
commits.author = Author
commits.message = Message
commits.date = Date
commits.older = Older
commits.newer = Newer

issues.new = New Issue
issues.new.labels = Labels
issues.new.no_label = No Label
issues.new.clear_labels = Clear labels
issues.new.milestone = Milestone
issues.new.no_milestone = No Milestone
issues.new.clear_milestone = Clear milestone
issues.new.open_milestone = Open Milestones
issues.new.closed_milestone = Closed Milestones
issues.new.assignee = Assignee
issues.new.clear_assignee = Clear assignee
issues.new.no_assignee = No assignee
issues.create = Create Issue
issues.new_label = New Label
issues.new_label_placeholder = Label name...
issues.create_label = Create Label
issues.label_templates.title = Load a predefined set of labels
issues.label_templates.info = There aren't any labels yet. You can click on the "New Label" button above to create one or use a predefined set below.
issues.label_templates.helper = Select a label set
issues.label_templates.use = Use this label set
issues.label_templates.fail_to_load_file = Failed to load label template file '%s': %v
issues.open_tab = %d Open
issues.close_tab = %d Closed
issues.filter_label = Label
issues.filter_label_no_select = No selected label
issues.filter_milestone = Milestone
issues.filter_milestone_no_select = No selected milestone
issues.filter_assignee = Assignee
issues.filter_assginee_no_select = No selected Assignee
issues.filter_type = Type
issues.filter_type.all_issues = All issues
issues.filter_type.assigned_to_you = Assigned to you
issues.filter_type.created_by_you = Created by you
issues.filter_type.mentioning_you = Mentioning you
issues.filter_sort = Sort
issues.filter_sort.latest = Newest
issues.filter_sort.oldest = Oldest
issues.filter_sort.recentupdate = Recently updated
issues.filter_sort.leastupdate = Least recently updated
issues.filter_sort.mostcomment = Most commented
issues.filter_sort.leastcomment = Least commented
issues.opened_by = opened %[1]s by <a href="%[2]s">%[3]s</a>
issues.opened_by_fake = opened %[1]s by %[2]s
issues.previous = Previous
issues.next = Next
issues.open_title = Open
issues.closed_title = Closed
issues.num_comments = %d comments
issues.commented_at = `commented <a href="#%s">%s</a>`
issues.delete_comment_confirm = Are you sure you want to delete this comment?
issues.no_content = There is no content yet.
issues.close_issue = Close
issues.close_comment_issue = Comment and close
issues.reopen_issue = Reopen
issues.reopen_comment_issue = Comment and reopen
issues.create_comment = Comment
issues.closed_at = `closed <a id="%[1]s" href="#%[1]s">%[2]s</a>`
issues.reopened_at = `reopened <a id="%[1]s" href="#%[1]s">%[2]s</a>`
issues.commit_ref_at = `referenced this issue from a commit <a id="%[1]s" href="#%[1]s">%[2]s</a>`
issues.poster = Poster
issues.collaborator = Collaborator
issues.owner = Owner
issues.sign_in_require_desc = <a href="%s">Sign in</a> to join this conversation.
issues.edit = Edit
issues.cancel = Cancel
issues.save = Save
issues.label_title = Label name
issues.label_color = Label color
issues.label_count = %d labels
issues.label_open_issues = %d open issues
issues.label_edit = Edit
issues.label_delete = Delete
issues.label_modify = Label Modification
issues.label_deletion = Label Deletion
issues.label_deletion_desc = Deleting this label will remove its information in all related issues. Do you want to continue?
issues.label_deletion_success = Label has been deleted successfully!
issues.num_participants = %d Participants
issues.attachment.open_tab = `Click to see "%s" in a new tab`
issues.attachment.download = `Click to download "%s"`

pulls.new = New Pull Request
pulls.compare_changes = Compare Changes
pulls.compare_changes_desc = Compare two branches and make a pull request for changes.
pulls.compare_base = base
pulls.compare_compare = compare
pulls.filter_branch = Filter branch
pulls.no_results = No results found.
pulls.nothing_to_compare = There is nothing to compare because base and head branches are even.
pulls.nothing_merge_base = There is nothing to compare because two branches have completely different history.
pulls.has_pull_request = `There is already a pull request between these two targets: <a href="%[1]s/pulls/%[3]d">%[2]s#%[3]d</a>`
pulls.create = Create Pull Request
pulls.title_desc = wants to merge %[1]d commits from <code>%[2]s</code> into <code>%[3]s</code>
pulls.merged_title_desc = merged %[1]d commits from <code>%[2]s</code> into <code>%[3]s</code> %[4]s
pulls.tab_conversation = Conversation
pulls.tab_commits = Commits
pulls.tab_files = Files changed
pulls.reopen_to_merge = Please reopen this pull request to perform merge operation.
pulls.merged = Merged
pulls.has_merged = This pull request has been merged successfully!
pulls.data_broken = Data of this pull request has been broken due to deletion of fork information.
pulls.is_checking = The conflict checking is still in progress, please refresh page in few moments.
pulls.can_auto_merge_desc = This pull request can be merged automatically.
pulls.cannot_auto_merge_desc = This pull request can't be merged automatically because there are conflicts.
pulls.cannot_auto_merge_helper = Please merge manually in order to resolve the conflicts.
pulls.create_merge_commit = Create a merge commit
pulls.rebase_before_merging = Rebase before merging
pulls.commit_description = Commit Description
pulls.merge_pull_request = Merge Pull Request
pulls.open_unmerged_pull_exists = `You can't perform reopen operation because there is already an open pull request (#%d) from same repository with same merge information and is waiting for merging.`
pulls.delete_branch = Delete Branch
pulls.delete_branch_has_new_commits = Branch cannot be deleted because it has new commits after mergence.

milestones.new = New Milestone
milestones.open_tab = %d Open
milestones.close_tab = %d Closed
milestones.closed = Closed %s
milestones.no_due_date = No due date
milestones.open = Open
milestones.close = Close
milestones.new_subheader = Create milestones to organize your issues.
milestones.create = Create Milestone
milestones.title = Title
milestones.desc = Description
milestones.due_date = Due Date (optional)
milestones.clear = Clear
milestones.invalid_due_date_format = Due date format is invalid, must be 'yyyy-mm-dd'.
milestones.create_success = Milestone '%s' has been created successfully!
milestones.edit = Edit Milestone
milestones.edit_subheader = Use a better description for milestones so people won't be confused.
milestones.cancel = Cancel
milestones.modify = Modify Milestone
milestones.edit_success = Changes of milestone '%s' has been saved successfully!
milestones.deletion = Milestone Deletion
milestones.deletion_desc = Deleting this milestone will remove its information in all related issues. Do you want to continue?
milestones.deletion_success = Milestone has been deleted successfully!

wiki = Wiki
wiki.welcome = Welcome to Wiki!
wiki.welcome_desc = Wiki is the place where you would like to document your project together and make it better.
wiki.create_first_page = Create the first page
wiki.page = Page
wiki.filter_page = Filter page
wiki.new_page = Create New Page
wiki.default_commit_message = Write a note about this update (optional).
wiki.save_page = Save Page
wiki.last_commit_info = %s edited this page %s
wiki.edit_page_button = Edit
wiki.new_page_button = New Page
wiki.delete_page_button = Delete Page
wiki.delete_page_notice_1 = This will delete the page <code>"%s"</code>. Please be certain.
wiki.page_already_exists = Wiki page with same name already exists.
wiki.pages = Pages
wiki.last_updated = Last updated %s

settings = Settings
settings.options = Options
settings.collaboration = Collaboration
settings.collaboration.admin = Admin
settings.collaboration.write = Write
settings.collaboration.read = Read
settings.collaboration.undefined = Undefined
settings.branches = Branches
settings.branches_bare = You cannot manage branches for bare repository. Please push some content first.
settings.default_branch = Default Branch
settings.default_branch_desc = The default branch is considered the "base" branch for code commits, pull requests and online editing.
settings.update = Update
settings.update_default_branch_unsupported = Change default branch is not supported by the Git version on server.
settings.update_default_branch_success = Default branch of this repository has been updated successfully!
settings.protected_branches = Protected Branches
settings.protected_branches_desc = Protect branches from force pushing, accidental deletion and whitelist code committers.
settings.choose_a_branch = Choose a branch...
settings.branch_protection = Branch Protection
settings.branch_protection_desc = Please choose protect options for branch <b>%s</b>.
settings.protect_this_branch = Protect this branch
settings.protect_this_branch_desc = Disable force pushes and prevent from deletion.
settings.protect_require_pull_request = Require pull request instead direct pushing
settings.protect_require_pull_request_desc = Enable this option to disable direct pushing to this branch. Commits have to be pushed to another non-protected branch and merged to this branch through pull request.
settings.protect_whitelist_committers = Whitelist who can push to this branch
settings.protect_whitelist_committers_desc = Add people or teams to whitelist of direct push to this branch. Users in whitelist will bypass require pull request check.
settings.protect_whitelist_users = Users who can push to this branch
settings.protect_whitelist_search_users = Search users
settings.protect_whitelist_teams = Teams for which members of them can push to this branch
settings.protect_whitelist_search_teams = Search teams
settings.update_protect_branch_success = Protect options for this branch has been updated successfully!
settings.hooks = Webhooks
settings.githooks = Git Hooks
settings.basic_settings = Basic Settings
settings.mirror_settings = Mirror Settings
settings.sync_mirror = Sync Now
settings.mirror_sync_in_progress = Mirror syncing is in progress, please refresh page in about a minute.
settings.site = Official Site
settings.update_settings = Update Settings
settings.change_reponame_prompt = This change will affect how links relate to the repository.
settings.advanced_settings = Advanced Settings
settings.wiki_desc = Enable wiki system
settings.use_internal_wiki = Use builtin wiki
settings.allow_public_wiki_desc = Allow public access to wiki when repository is private
settings.use_external_wiki = Use external wiki
settings.external_wiki_url = External Wiki URL
settings.external_wiki_url_desc = Visitors will be redirected to URL when they click on the tab.
settings.issues_desc = Enable issue tracker
settings.use_internal_issue_tracker = Use builtin lightweight issue tracker
settings.allow_public_issues_desc = Allow public access to issues when repository is private
settings.use_external_issue_tracker = Use external issue tracker
settings.external_tracker_url = External Issue Tracker URL
settings.external_tracker_url_desc = Visitors will be redirected to URL when they click on the tab.
settings.tracker_url_format = External Issue Tracker URL Format
settings.tracker_issue_style = External Issue Tracker Naming Style:
settings.tracker_issue_style.numeric = Numeric
settings.tracker_issue_style.alphanumeric = Alphanumeric
settings.tracker_url_format_desc = You can use placeholder <code>{user} {repo} {index}</code> for user name, repository name and issue index.
settings.pulls_desc = Enable pull requests to accept contributions between repositories and branches
settings.pulls.ignore_whitespace = Ignore changes in whitespace
settings.pulls.allow_rebase_merge = Allow use rebase to merge commits
settings.danger_zone = Danger Zone
settings.cannot_fork_to_same_owner = You cannot fork a repository to its original owner.
settings.new_owner_has_same_repo = The new owner already has a repository with same name. Please choose another name.
settings.convert = Convert To Regular Repository
settings.convert_desc = You can convert this mirror to a regular repository. This cannot be reversed.
settings.convert_notices_1 = - This operation will convert this repository mirror into a regular repository and cannot be undone.
settings.convert_confirm = Confirm Conversion
settings.convert_succeed = Repository has been converted to regular type successfully.
settings.transfer = Transfer Ownership
settings.transfer_desc = Transfer this repository to another user or to an organization in which you have admin rights.
settings.transfer_notices_1 = - You will lose access if new owner is a individual user.
settings.transfer_notices_2 = - You will conserve access if new owner is an organization and if you're one of the owners.
settings.transfer_form_title = Please enter following information to confirm your operation:
settings.wiki_delete = Erase Wiki Data
settings.wiki_delete_desc = Once you erase wiki data there is no going back. Please be certain.
settings.wiki_delete_notices_1 = - This will delete and disable the wiki for %s
settings.wiki_deletion_success = Repository wiki data have been erased successfully.
settings.delete = Delete This Repository
settings.delete_desc = Once you delete a repository, there is no going back. Please be certain.
settings.delete_notices_1 = - This operation <strong>CANNOT</strong> be undone.
settings.delete_notices_2 = - This operation will permanently delete everything in this repository, including Git data, issues, comments and collaborator access.
settings.delete_notices_fork_1 = - All forks will become independent after deletion.
settings.deletion_success = Repository has been deleted successfully!
settings.update_settings_success = Repository options has been updated successfully.
settings.transfer_owner = New Owner
settings.make_transfer = Make Transfer
settings.transfer_succeed = Repository ownership has been transferred successfully.
settings.confirm_delete = Confirm Deletion
settings.add_collaborator = Add New Collaborator
settings.add_collaborator_success = New collaborator has been added.
settings.delete_collaborator = Delete
settings.collaborator_deletion = Collaborator Deletion
settings.collaborator_deletion_desc = This user will no longer have collaboration access to this repository after deletion. Do you want to continue?
settings.remove_collaborator_success = Collaborator has been removed.
settings.search_user_placeholder = Search user...
settings.org_not_allowed_to_be_collaborator = Organization is not allowed to be added as a collaborator.
settings.hooks_desc = Webhooks are much like basic HTTP POST event triggers. Whenever something occurs in Gogs, we will handle the notification to the target host you specify.
settings.webhooks.add_new = Add a new webhook:
settings.webhooks.choose_a_type = Choose a type...
settings.add_webhook = Add webhook
settings.webhook_deletion = Delete Webhook
settings.webhook_deletion_desc = Delete this webhook will remove its information and all delivery history. Do you want to continue?
settings.webhook_deletion_success = Webhook has been deleted successfully!
settings.webhook.test_delivery = Test Delivery
settings.webhook.test_delivery_desc = Send a fake push event delivery to test your webhook settings
settings.webhook.test_delivery_success = Test webhook has been added to delivery queue. It may take few seconds before it shows up in the delivery history.
settings.webhook.redelivery = Redelivery
settings.webhook.redelivery_success = Hook task '%s' has been readded to delivery queue. It may take few seconds to update delivery status in history.
settings.webhook.request = Request
settings.webhook.response = Response
settings.webhook.headers = Headers
settings.webhook.payload = Payload
settings.webhook.body = Body
settings.webhook.err_cannot_parse_payload_url = Cannot parse payload URL: %v
settings.webhook.url_resolved_to_blocked_local_address = Payload URL resolved to a local network address that is implicitly blocked.
settings.githooks_desc = Git Hooks are powered by Git itself, you can edit files of supported hooks in the list below to perform custom operations.
settings.githook_edit_desc = If the hook is inactive, sample content will be presented. Leaving content to an empty value will disable this hook.
settings.githook_name = Hook Name
settings.githook_content = Hook Content
settings.update_githook = Update Hook
settings.add_webhook_desc = Gogs will send a <code>POST</code> request to the URL you specify, along with details regarding the event that occurred. You can also specify what kind of data format you'd like to get upon triggering the hook (JSON, x-www-form-urlencoded, XML, etc). More information can be found in our <a target="_blank" href="%s">Webhooks Guide</a>.
settings.payload_url = Payload URL
settings.content_type = Content Type
settings.secret = Secret
settings.secret_desc = Secret will be sent as SHA256 HMAC hex digest of payload via <code>X-Gogs-Signature</code> header.
settings.slack_username = Username
settings.slack_icon_url = Icon URL
settings.slack_color = Color
settings.event_desc = When should this webhook be triggered?
settings.event_push_only = Just the <code>push</code> event
settings.event_send_everything = I need <strong>everything</strong>
settings.event_choose = Let me choose what I need
settings.event_create = Create
settings.event_create_desc = Branch or tag created
settings.event_delete = Delete
settings.event_delete_desc = Branch or tag deleted
settings.event_fork = Fork
settings.event_fork_desc = Repository forked
settings.event_push = Push
settings.event_push_desc = Git push to a repository
settings.event_issues = Issues
settings.event_issues_desc = Issue opened, closed, reopened, edited, assigned, unassigned, label updated, label cleared, milestoned, or demilestoned.
settings.event_pull_request = Pull Request
settings.event_pull_request_desc = Pull request opened, closed, reopened, edited, assigned, unassigned, label updated, label cleared, milestoned, demilestoned, or synchronized.
settings.event_issue_comment = Issue Comment
settings.event_issue_comment_desc = Issue comment created, edited, or deleted.
settings.event_release = Release
settings.event_release_desc = Release published in a repository.
settings.active = Active
settings.active_helper = Details regarding the event which triggered the hook will be delivered as well.
settings.add_hook_success = New webhook has been added.
settings.update_webhook = Update Webhook
settings.update_hook_success = Webhook has been updated.
settings.delete_webhook = Delete Webhook
settings.recent_deliveries = Recent Deliveries
settings.hook_type = Hook Type
settings.add_slack_hook_desc = Add <a href="%s">Slack</a> integration to your repository.
settings.add_discord_hook_desc = Add <a href="%s">Discord</a> integration to your repository.
settings.add_dingtalk_hook_desc = Add <a href="%s">Dingtalk</a> integration to your repository.
settings.slack_token = Token
settings.slack_domain = Domain
settings.slack_channel = Channel
settings.deploy_keys = Deploy Keys
settings.deploy_keys_helper = <b>Common Gotcha!</b> If you're looking for adding personal public keys, please add them in your <a href="%s%s">account settings</a>.
settings.add_deploy_key = Add Deploy Key
settings.deploy_key_desc = Deploy keys have read-only access. They are not the same as personal account SSH keys.
settings.no_deploy_keys = You haven't added any deploy keys.
settings.title = Title
settings.deploy_key_content = Content
settings.key_been_used = Deploy key content has been used.
settings.key_name_used = Deploy key with the same name already exists.
settings.add_key_success = New deploy key '%s' has been added successfully!
settings.deploy_key_deletion = Delete Deploy Key
settings.deploy_key_deletion_desc = Deleting this deploy key will remove all related accesses for this repository. Do you want to continue?
settings.deploy_key_deletion_success = Deploy key has been deleted successfully!
settings.description_desc = Description of repository. Maximum 512 characters length.
settings.description_length = Available characters

diff.browse_source = Browse Source
diff.parent = parent
diff.commit = commit
diff.data_not_available = Diff Data Not Available.
diff.show_diff_stats = Show Diff Stats
diff.show_split_view = Split View
diff.show_unified_view = Unified View
diff.stats_desc = <strong> %d changed files</strong> with <strong>%d additions</strong> and <strong>%d deletions</strong>
diff.bin = BIN
diff.view_file = View File
diff.file_suppressed = File diff suppressed because it is too large
diff.too_many_files = Some files were not shown because too many files changed in this diff

release.releases = Releases
release.new_release = New Release
release.draft = Draft
release.prerelease = Pre-Release
release.edit = edit
release.ahead = <strong>%d</strong> commits to %s since this release
release.source_code = Source Code
release.new_subheader = Publish releases to iterate product.
release.edit_subheader = Detailed change log can help users understand what has been improved.
release.tag_name = Tag name
release.target = Target
release.tag_helper = Choose an existing tag, or create a new tag on publish.
release.title = Title
release.content = Content
release.write = Write
release.preview = Preview
release.loading = Loading...
release.prerelease_desc = This is a pre-release
release.prerelease_helper = We'll point out that this release is not production-ready.
release.cancel = Cancel
release.publish = Publish Release
release.save_draft = Save Draft
release.edit_release = Edit Release
release.delete_release = Delete This Release
release.deletion = Release Deletion
release.deletion_desc = Deleting this release will delete the corresponding Git tag. Do you want to continue?
release.deletion_success = Release has been deleted successfully!
release.tag_name_already_exist = Release with this tag name already exists.
release.tag_name_invalid = Tag name is not valid.
release.downloads = Downloads

[org]
org_name_holder = Organization Name
org_full_name_holder = Organization Full Name
org_name_helper = Great organization names are short and memorable.
create_org = Create Organization
repo_updated = Updated
people = People
invite_someone = Invite Someone
teams = Teams
lower_members = members
lower_repositories = repositories
create_new_team = Create New Team
org_desc = Description
team_name = Team Name
team_desc = Description
team_name_helper = You'll use this name to mention this team in conversations.
team_desc_helper = What is this team all about?
team_permission_desc = What permission level should this team have?

form.name_not_allowed = Organization name or pattern %q is not allowed.
form.team_name_not_allowed = Team name or pattern %q is not allowed.

settings = Settings
settings.options = Options
settings.full_name = Full Name
settings.website = Website
settings.location = Location
settings.update_settings = Update Settings
settings.update_setting_success = Organization settings has been updated successfully.
settings.change_orgname_prompt = This change will affect how links relate to the organization.
settings.update_avatar_success = Organization avatar setting has been updated successfully.
settings.delete = Delete Organization
settings.delete_account = Delete This Organization
settings.delete_prompt = The organization will be permanently removed, and this <strong>CANNOT</strong> be undone!
settings.confirm_delete_account = Confirm Deletion
settings.delete_org_title = Organization Deletion
settings.delete_org_desc = This organization is going to be deleted permanently, do you want to continue?
settings.hooks_desc = Add webhooks that will be triggered for <strong>all repositories</strong> under this organization.

members.membership_visibility = Membership Visibility:
members.public = Public
members.public_helper = make private
members.private = Private
members.private_helper = make public
members.member_role = Member Role:
members.owner = Owner
members.member = Member
members.remove = Remove
members.leave = Leave
members.invite_desc = Add a new member to %s:
members.invite_now = Invite Now

teams.join = Join
teams.leave = Leave
teams.read_access = Read Access
teams.read_access_helper = This team will be able to view and clone its repositories.
teams.write_access = Write Access
teams.write_access_helper = This team will be able to read its repositories, as well as push to them.
teams.admin_access = Admin Access
teams.admin_access_helper = This team will be able to push/pull to its repositories, as well as add other collaborators to them.
teams.no_desc = This team has no description
teams.settings = Settings
teams.owners_permission_desc = Owners have full access to <strong>all repositories</strong> and have <strong>admin rights</strong> to the organization.
teams.members = Team Members
teams.update_settings = Update Settings
teams.delete_team = Delete This Team
teams.add_team_member = Add Team Member
teams.delete_team_title = Team Deletion
teams.delete_team_desc = As this team will be deleted, members of this team may lose access to some repositories. Do you want to continue?
teams.delete_team_success = Given team has been deleted successfully.
teams.read_permission_desc = Membership in this team grants <strong>Read</strong> access: members can view and clone the team's repositories.
teams.write_permission_desc = Membership in this team grants <strong>Write</strong> access: members can read from and push to the team's repositories.
teams.admin_permission_desc = Membership in this team grants <strong>Admin</strong> access: members can read from, push to, and add collaborators to the team's repositories.
teams.repositories = Team Repositories
teams.search_repo_placeholder = Search repository...
teams.add_team_repository = Add Team Repository
teams.remove_repo = Remove
teams.add_nonexistent_repo = The repository you're trying to add does not exist, please create it first.

[admin]
dashboard = Dashboard
users = Users
organizations = Organizations
repositories = Repositories
authentication = Authentications
config = Configuration
notices = System Notices
monitor = Monitoring
first_page = First
last_page = Last
total = Total: %d

dashboard.build_info = Build Information
dashboard.app_ver = Application version
dashboard.git_version = Git version
dashboard.go_version = Go version
dashboard.build_time = Build time
dashboard.build_commit = Build commit
dashboard.statistic = Statistics
dashboard.operations = Operations
dashboard.system_status = System Monitor Status
dashboard.statistic_info = Gogs database has <b>%d</b> users, <b>%d</b> organizations, <b>%d</b> public keys, <b>%d</b> repositories, <b>%d</b> watches, <b>%d</b> stars, <b>%d</b> actions, <b>%d</b> accesses, <b>%d</b> issues, <b>%d</b> comments, <b>%d</b> social accounts, <b>%d</b> follows, <b>%d</b> mirrors, <b>%d</b> releases, <b>%d</b> login sources, <b>%d</b> webhooks, <b>%d</b> milestones, <b>%d</b> labels, <b>%d</b> hook tasks, <b>%d</b> teams, <b>%d</b> update tasks, <b>%d</b> attachments.
dashboard.operation_name = Operation Name
dashboard.operation_switch = Switch
dashboard.select_operation_to_run = Please select operation to run
dashboard.operation_run = Run
dashboard.clean_unbind_oauth = Clean unbound OAuthes
dashboard.clean_unbind_oauth_success = All unbind OAuthes have been deleted successfully.
dashboard.delete_inactivate_accounts = Delete all inactive accounts
dashboard.delete_inactivate_accounts_success = All inactivate accounts have been deleted successfully.
dashboard.delete_repo_archives = Delete all repositories archives
dashboard.delete_repo_archives_success = All repositories archives have been deleted successfully.
dashboard.delete_missing_repos = Delete all repository records that lost Git files
dashboard.delete_missing_repos_success = All repository records that lost Git files have been deleted successfully.
dashboard.git_gc_repos = Do garbage collection on repositories
dashboard.git_gc_repos_success = All repositories have done garbage collection successfully.
dashboard.resync_all_sshkeys = Rewrite '.ssh/authorized_keys' file (caution: non-Gogs keys will be lost)
dashboard.resync_all_sshkeys_success = All public keys have been rewritten successfully.
dashboard.resync_all_hooks = Resync pre-receive, update and post-receive hooks of all repositories
dashboard.resync_all_hooks_success = All repositories' pre-receive, update and post-receive hooks have been resynced successfully.
dashboard.reinit_missing_repos = Reinitialize all repository records that lost Git files
dashboard.reinit_missing_repos_success = All repository records that lost Git files have been reinitialized successfully.

dashboard.server_uptime = Server Uptime
dashboard.current_goroutine = Current Goroutines
dashboard.current_memory_usage = Current Memory Usage
dashboard.total_memory_allocated = Total Memory Allocated
dashboard.memory_obtained = Memory Obtained
dashboard.pointer_lookup_times = Pointer Lookup Times
dashboard.memory_allocate_times = Memory Allocate Times
dashboard.memory_free_times = Memory Free Times
dashboard.current_heap_usage = Current Heap Usage
dashboard.heap_memory_obtained = Heap Memory Obtained
dashboard.heap_memory_idle = Heap Memory Idle
dashboard.heap_memory_in_use = Heap Memory In Use
dashboard.heap_memory_released = Heap Memory Released
dashboard.heap_objects = Heap Objects
dashboard.bootstrap_stack_usage = Bootstrap Stack Usage
dashboard.stack_memory_obtained = Stack Memory Obtained
dashboard.mspan_structures_usage = MSpan Structures Usage
dashboard.mspan_structures_obtained = MSpan Structures Obtained
dashboard.mcache_structures_usage = MCache Structures Usage
dashboard.mcache_structures_obtained = MCache Structures Obtained
dashboard.profiling_bucket_hash_table_obtained = Profiling Bucket Hash Table Obtained
dashboard.gc_metadata_obtained = GC Metadata Obtained
dashboard.other_system_allocation_obtained = Other System Allocation Obtained
dashboard.next_gc_recycle = Next GC Recycle
dashboard.last_gc_time = Since Last GC Time
dashboard.total_gc_time = Total GC Pause
dashboard.total_gc_pause = Total GC Pause
dashboard.last_gc_pause = Last GC Pause
dashboard.gc_times = GC Times

users.user_manage_panel = User Manage Panel
users.new_account = Create New Account
users.name = Name
users.activated = Activated
users.admin = Admin
users.repos = Repos
users.created = Created
users.send_register_notify = Send Registration Notification To User
users.new_success = New account '%s' has been created successfully.
users.edit = Edit
users.auth_source = Authentication Source
users.local = Local
users.auth_login_name = Authentication Login Name
users.password_helper = Leave it empty to remain unchanged.
users.update_profile_success = Account profile has been updated successfully.
users.edit_account = Edit Account
users.max_repo_creation = Maximum Repository Creation Limit
users.max_repo_creation_desc = (Set -1 to use global default limit)
users.is_activated = This account is activated
users.prohibit_login = This account is prohibited to login
users.is_admin = This account has administrator permissions
users.allow_git_hook = This account has permissions to create Git hooks
users.allow_import_local = This account has permissions to import local repositories
users.update_profile = Update Account Profile
users.delete_account = Delete This Account
users.still_own_repo = This account still has ownership over at least one repository, you have to delete or transfer them first.
users.still_has_org = This account still has membership in at least one organization, you have to leave or delete the organizations first.
users.deletion_success = Account has been deleted successfully!

orgs.org_manage_panel = Organization Manage Panel
orgs.name = Name
orgs.teams = Teams
orgs.members = Members

repos.repo_manage_panel = Repository Manage Panel
repos.owner = Owner
repos.name = Name
repos.private = Private
repos.watches = Watches
repos.stars = Stars
repos.issues = Issues
repos.size = Size

auths.auth_sources = Authentication Sources
auths.new = Add New Source
auths.name = Name
auths.type = Type
auths.enabled = Enabled
auths.default = Default
auths.updated = Updated
auths.auth_type = Authentication Type
auths.auth_name = Authentication Name
auths.security_protocol = Security Protocol
auths.domain = Domain
auths.host = Host
auths.port = Port
auths.bind_dn = Bind DN
auths.bind_dn_helper = You can use '%s' as placeholder for username, e.g. DOM\%s
auths.bind_password = Bind Password
auths.bind_password_helper = Warning: This password is stored in plain text. Do not use a high privileged account.
auths.user_base = User Search Base
auths.user_dn = User DN
auths.attribute_username = Username Attribute
auths.attribute_username_placeholder = Leave empty to use sign-in form field value for user name.
auths.attribute_name = First Name Attribute
auths.attribute_surname = Surname Attribute
auths.attribute_mail = Email Attribute
auths.verify_group_membership = Verify group membership
auths.group_search_base_dn = Group Search Base DN
auths.group_filter = Group Filter
auths.group_attribute_contain_user_list = Group Attribute Containing List of Users
auths.user_attribute_listed_in_group = User Attribute Listed in Group
auths.attributes_in_bind = Fetch attributes in Bind DN context
auths.filter = User Filter
auths.admin_filter = Admin Filter
auths.ms_ad_sa = Ms Ad SA
auths.smtp_auth = SMTP Authentication Type
auths.smtphost = SMTP Host
auths.smtpport = SMTP Port
auths.allowed_domains = Allowed Domains
auths.allowed_domains_helper = Leave it empty to not restrict any domains. Multiple domains should be separated by comma ','.
auths.enable_tls = Enable TLS Encryption
auths.skip_tls_verify = Skip TLS Verify
auths.pam_service_name = PAM Service Name
auths.enable_auto_register = Enable Auto Registration
auths.edit = Edit Authentication Setting
auths.activated = This authentication is activated
auths.default_auth =  This authentication is default login source
auths.new_success = New authentication '%s' has been added successfully.
auths.update_success = Authentication setting has been updated successfully.
auths.update = Update Authentication Setting
auths.delete = Delete This Authentication
auths.delete_auth_title = Authentication Deletion
auths.delete_auth_desc = This authentication is going to be deleted, do you want to continue?
auths.still_in_used = This authentication is still used by some users, please delete or convert these users to another login type first.
auths.deletion_success = Authentication has been deleted successfully!
auths.login_source_exist = Login source '%s' already exists.
auths.github_api_endpoint = API Endpoint

config.not_set = (not set)
config.server_config = Server configuration
config.brand_name = Brand name
config.run_user = Run user
config.run_mode = Run mode
config.server.external_url = External URL
config.server.domain = Domain
config.server.protocol = Protocol
config.server.http_addr = HTTP address
config.server.http_port = HTTP port
config.server.cert_file = Certificate file
config.server.key_file = Key file
config.server.tls_min_version = Minimum TLS version
config.server.unix_socket_permission = Unix socket permission
config.server.local_root_url = Local root URL
config.server.offline_mode = Offline mode
config.server.disable_router_log = Disable router log
config.server.enable_gzip = Enable Gzip
config.server.app_data_path = Application data path
config.server.load_assets_from_disk = Load assets from disk
config.server.landing_url = Landing URL

config.ssh_config = SSH configuration
config.ssh.enabled = Enabled
config.ssh.domain = Exposed domain
config.ssh.port = Exposed port
config.ssh.root_path = Root path
config.ssh.keygen_path = Keygen path
config.ssh.key_test_path = Key test path
config.ssh.minimum_key_size_check = Minimum key size check
config.ssh.minimum_key_sizes = Minimum key sizes
config.ssh.rewrite_authorized_keys_at_start = Rewrite "authorized_keys" at start
config.ssh.start_builtin_server = Start builtin server
config.ssh.listen_host = Listen host
config.ssh.listen_port = Listen port
config.ssh.server_ciphers = Server ciphers
config.ssh.server_macs = Server MACs

config.repo_config = Repository configuration
config.repo.root_path = Root path
config.repo.script_type = Script type
config.repo.ansi_chatset = ANSI charset
config.repo.force_private = Force private
config.repo.max_creation_limit = Max creation limit
config.repo.preferred_licenses = Preferred licenses
config.repo.disable_http_git = Disable HTTP Git
config.repo.enable_local_path_migration = Enable local path migration
config.repo.enable_raw_file_render_mode = Enable raw file render mode
config.repo.commits_fetch_concurrency = Commits fetch concurrency
config.repo.editor.line_wrap_extensions = Editor line wrap extensions
config.repo.editor.previewable_file_modes = Editor previewable file modes
config.repo.upload.enabled = Upload enabled
config.repo.upload.temp_path = Upload temporary path
config.repo.upload.allowed_types = Upload allowed types
config.repo.upload.file_max_size = Upload file size limit
config.repo.upload.max_files = Upload files limit

config.db_config = Database configuration
config.db.type = Type
config.db.host = Host
config.db.name = Name
config.db.schema = Schema
config.db.schema_helper = (for "postgres" only)
config.db.user = User
config.db.ssl_mode = SSL mode
config.db.ssl_mode_helper = (for "postgres" only)
config.db.path = Path
config.db.path_helper = (for "sqlite3"only)
config.db.max_open_conns = Maximum open connections
config.db.max_idle_conns = Maximum idle connections

config.security_config = Security configuration
config.security.login_remember_days = Login remember days
config.security.cookie_remember_name = Remember cookie
config.security.cookie_username = Username cookie
config.security.cookie_secure = Enable secure cookie
config.security.reverse_proxy_auth_user = Reverse proxy authentication header
config.security.enable_login_status_cookie = Enable login status cookie
config.security.login_status_cookie_name = Login status cookie
config.security.local_network_allowlist = Local network allowlist

config.email_config = Email configuration
config.email.enabled = Enabled
config.email.subject_prefix = Subject prefix
config.email.host = Host
config.email.from = From
config.email.user = User
config.email.disable_helo = Disable HELO
config.email.helo_hostname = HELO hostname
config.email.skip_verify = Skip certificate verify
config.email.use_certificate = Use custom certificate
config.email.cert_file = Certificate file
config.email.key_file = Key file
config.email.use_plain_text = Use plain text
config.email.add_plain_text_alt = Add plain text alternative
config.email.send_test_mail = Send test email
config.email.test_mail_failed = Failed to send test email to '%s': %v
config.email.test_mail_sent = Test email has been sent to '%s'.

config.auth_config = Authentication configuration
config.auth.activate_code_lives = Activate code lives
config.auth.reset_password_code_lives = Reset password code lives
config.auth.require_email_confirm = Require email confirmation
config.auth.require_sign_in_view = Require sign in view
config.auth.disable_registration = Disable registration
config.auth.enable_registration_captcha = Enable registration captcha
config.auth.enable_reverse_proxy_authentication = Enable reverse proxy authentication
config.auth.enable_reverse_proxy_auto_registration = Enable reverse proxy auto registration
config.auth.reverse_proxy_authentication_header = Reverse proxy authentication header

config.user_config = User configuration
config.user.enable_email_notify = Enable email notification

config.session_config = Session configuration
config.session.provider = Provider
config.session.provider_config = Provider config
config.session.cookie_name = Cookie
config.session.https_only = HTTPS only
config.session.gc_interval = GC interval
config.session.max_life_time = Max life time
config.session.csrf_cookie_name = CSRF cookie

config.cache_config = Cache configuration
config.cache.adapter = Adapter
config.cache.interval = GC interval
config.cache.host = Host

config.http_config = HTTP configuration
config.http.access_control_allow_origin = Access control allow origin

config.attachment_config = Attachment configuration
config.attachment.enabled = Enabled
config.attachment.path = Path
config.attachment.allowed_types = Allowed types
config.attachment.max_size = Size limit
config.attachment.max_files = Files limit

config.release_config = Release configuration
config.release.attachment.enabled = Attachment enabled
config.release.attachment.allowed_types = Attachment allowed types
config.release.attachment.max_size = Attachment size limit
config.release.attachment.max_files = Attachment files limit

config.picture_config = Picture configuration
config.picture.avatar_upload_path = User avatar upload path
config.picture.repo_avatar_upload_path = Repository avatar upload path
config.picture.gravatar_source = Gravatar source
config.picture.disable_gravatar = Disable Gravatar
config.picture.enable_federated_avatar = Enable federated avatars

config.mirror_config = Mirror configuration
config.mirror.default_interval = Default interval

config.webhook_config = Webhook configuration
config.webhook.types = Types
config.webhook.deliver_timeout = Deliver timeout
config.webhook.skip_tls_verify = Skip TLS verify

config.git_config = Git configuration
config.git.disable_diff_highlight = Disable diff syntax highlight
config.git.max_diff_lines = Diff lines limit (for a single file)
config.git.max_diff_line_characters = Diff characters limit (for a single line)
config.git.max_diff_files = Diff files limit (for a single diff)
config.git.gc_args = GC arguments
config.git.migrate_timeout = Migration timeout
config.git.mirror_timeout = Mirror fetch timeout
config.git.clone_timeout = Clone timeout
config.git.pull_timeout = Pull timeout
config.git.gc_timeout = GC timeout

config.lfs_config = LFS configuration
config.lfs.storage = Storage
config.lfs.objects_path = Objects path

config.log_config = Log configuration
config.log_file_root_path = Log file root path
config.log_mode = Mode
config.log_options = Options

monitor.cron = Cron Tasks
monitor.name = Name
monitor.schedule = Schedule
monitor.next = Next Time
monitor.previous = Previous Time
monitor.execute_times = Execute Times
monitor.process = Running Processes
monitor.desc = Description
monitor.start = Start Time
monitor.execute_time = Execution Time

notices.system_notice_list = System Notices
notices.view_detail_header = View Notice Detail
notices.actions = Actions
notices.select_all = Select All
notices.deselect_all = Deselect All
notices.inverse_selection = Inverse Selection
notices.delete_selected = Delete Selected
notices.delete_all = Delete All Notices
notices.type = Type
notices.type_1 = Repository
notices.desc = Description
notices.op = Op.
notices.delete_success = System notices have been deleted successfully.

[action]
create_repo = created repository <a href="%s">%s</a>
rename_repo = renamed repository from <code>%[1]s</code> to <a href="%[2]s">%[3]s</a>
commit_repo = pushed to <a href="%[1]s/src/%[2]s">%[3]s</a> at <a href="%[1]s">%[4]s</a>
compare_commits = View comparison for these %d commits
transfer_repo = transfered repository <code>%s</code> to <a href="%s">%s</a>
create_issue = `opened issue <a href="%s/issues/%s">%s#%[2]s</a>`
close_issue = `closed issue <a href="%s/issues/%s">%s#%[2]s</a>`
reopen_issue = `reopened issue <a href="%s/issues/%s">%s#%[2]s</a>`
comment_issue = `commented on issue <a href="%s/issues/%s">%s#%[2]s</a>`
create_pull_request = `created pull request <a href="%s/pulls/%s">%s#%[2]s</a>`
close_pull_request = `closed pull request <a href="%s/pulls/%s">%s#%[2]s</a>`
reopen_pull_request = `reopened pull request <a href="%s/pulls/%s">%s#%[2]s</a>`
merge_pull_request = `merged pull request <a href="%s/pulls/%s">%s#%[2]s</a>`
create_branch = created new branch <a href="%[1]s/src/%[2]s">%[3]s</a> at <a href="%[1]s">%[4]s</a>
delete_branch = deleted branch <code>%[2]s</code> at <a href="%[1]s">%[3]s</a>
push_tag = pushed tag <a href="%s/src/%s">%[2]s</a> to <a href="%[1]s">%[3]s</a>
delete_tag = deleted tag <code>%[2]s</code> at <a href="%[1]s">%[3]s</a>
fork_repo = forked a repository to <a href="%s">%s</a>
mirror_sync_push = synced commits to <a href="%[1]s/src/%[2]s">%[3]s</a> at <a href="%[1]s">%[4]s</a> from mirror
mirror_sync_create = synced new reference <a href="%s/src/%s">%[2]s</a> to <a href="%[1]s">%[3]s</a> from mirror
mirror_sync_delete = synced and deleted reference <code>%[2]s</code> at <a href="%[1]s">%[3]s</a> from mirror

[tool]
ago = ago
from_now = from now
now = now
1s = 1 second %s
1m = 1 minute %s
1h = 1 hour %s
1d = 1 day %s
1w = 1 week %s
1mon = 1 month %s
1y = 1 year %s
seconds = %d seconds %s
minutes = %d minutes %s
hours = %d hours %s
days = %d days %s
weeks = %d weeks %s
months = %d months %s
years = %d years %s
raw_seconds = seconds
raw_minutes = minutes
raw_hours = hours

[dropzone]
default_message = Drop files here or click to upload.
invalid_input_type = You can't upload files of this type.
file_too_big = File size ({{filesize}} MB) exceeds maximum size ({{maxFilesize}} MB).
remove_file = Remove file