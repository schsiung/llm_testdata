import argparse
from typing import TypeVar, Callable, Tuple

from httpie.sessions import SESSIONS_DIR_NAME, Session, get_httpie_session
from httpie.status import ExitStatus
from httpie.context import Environment
from httpie.manager.cli import missing_subcommand, parser

T = TypeVar('T')

CLI_TASKS = {}


def task(name: str) -> Callable[[T], T]:
    def wrapper(func: T) -> T:
        CLI_TASKS[name] = func
        return func
    return wrapper


@task('sessions')
def cli_sessions(env: Environment, args: argparse.Namespace) -> ExitStatus:
    action = args.cli_sessions_action
    if action is None:
        parser.error(missing_subcommand('cli', 'sessions'))

    if action == 'upgrade':
        return cli_upgrade_session(env, args)
    elif action == 'upgrade-all':
        return cli_upgrade_all_sessions(env, args)
    else:
        raise ValueError(f'Unexpected action: {action}')


def is_version_greater(version_1: str, version_2: str) -> bool:
    # In an ideal scenerio, we would depend on `packaging` in order
    # to offer PEP 440 compatible parsing. But since it might not be
    # commonly available for outside packages, and since we are only
    # going to parse HTTPie's own version it should be fine to compare
    # this in a SemVer subset fashion.

    def split_version(version: str) -> Tuple[int, ...]:
        parts = []
        for part in version.split('.')[:3]:
            try:
                parts.append(int(part))
            except ValueError:
                break
        return tuple(parts)

    return split_version(version_1) > split_version(version_2)


def fix_cookie_layout(session: Session, hostname: str, args: argparse.Namespace) -> None:
    if not isinstance(session['cookies'], dict):
        return None

    session['cookies'] = [
        {
            'name': key,
            **value
        }
        for key, value in session['cookies'].items()
    ]
    for cookie in session.cookies:
        if cookie.domain == '':
            if args.bind_cookies:
                cookie.domain = hostname
            else:
                cookie._rest['is_explicit_none'] = True


FIXERS_TO_VERSIONS = {
    '3.1.0': fix_cookie_layout
}


def upgrade_session(env: Environment, args: argparse.Namespace, hostname: str, session_name: str):
    session = get_httpie_session(
        env=env,
        config_dir=env.config.directory,
        session_name=session_name,
        host=hostname,
        url=hostname,
        refactor_mode=True
    )

    session_name = session.path.stem
    if session.is_new():
        env.log_error(f'{session_name!r} (for {hostname!r}) does not exist.')
        return ExitStatus.ERROR

    fixers = [
        fixer
        for version, fixer in FIXERS_TO_VERSIONS.items()
        if is_version_greater(version, session.version)
    ]

    if len(fixers) == 0:
        env.stdout.write(f'{session_name!r} (for {hostname!r}) is already up-to-date.\n')
        return ExitStatus.SUCCESS

    for fixer in fixers:
        fixer(session, hostname, args)

    session.save(bump_version=True)
    env.stdout.write(f'Refactored {session_name!r} (for {hostname!r}) to the version {session.version}.\n')
    return ExitStatus.SUCCESS


def cli_upgrade_session(env: Environment, args: argparse.Namespace) -> ExitStatus:
    return upgrade_session(
        env,
        args=args,
        hostname=args.hostname,
        session_name=args.session
    )


def cli_upgrade_all_sessions(env: Environment, args: argparse.Namespace) -> ExitStatus:
    session_dir_path = env.config_dir / SESSIONS_DIR_NAME

    status = ExitStatus.SUCCESS
    for host_path in session_dir_path.iterdir():
        hostname = host_path.name
        for session_path in host_path.glob("*.json"):
            session_name = session_path.stem
            status |= upgrade_session(
                env,
                args=args,
                hostname=hostname,
                session_name=session_name
            )
    return status