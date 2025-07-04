import logging
import os
import shutil
from contextlib import contextmanager
from pathlib import Path

import pytest


def pytest_addoption(parser):
    parser.addoption("-E", action="store", metavar="NAME", help="only run tests matching the environment NAME.")


def pytest_configure(config):
    # register an additional marker
    config.addinivalue_line("markers", "env(name): mark test to run only on named environment")


@contextmanager
def does_not_raise():
    yield


@pytest.fixture(scope="function")
def create_testfile(tmp_path):
    def _create_testfile(filename):
        path = os.path.join(tmp_path, filename)
        if not os.path.exists(path):
            Path(path).touch()
        return path
    return _create_testfile


@pytest.fixture(scope="function")
def create_kernel_initrd(create_testfile):
    def _create_kernel_initrd(name_kernel, name_initrd):
        create_testfile(name_kernel)
        return os.path.dirname(create_testfile(name_initrd))
    return _create_kernel_initrd


@pytest.fixture(scope="session", autouse=True)
def cleanup_leftover_items():
    """
    Will delete all JSON files which are left in Cobbler before a testrun!
    """
    logger = logging.getLogger("session-cleanup")
    cobbler_collections = ["distros", "files", "images", "menus", "mgmtclasses", "packages", "profiles", "repos",
                           "systems"]
    for collection in cobbler_collections:
        path = os.path.join("/var/lib/cobbler/collections", collection)
        for file in os.listdir(path):
            json_file = os.path.join(path, file)
            os.remove(json_file)
            logger.info("Removed file: " + json_file)


@pytest.fixture(scope="function")
def fk_initrd():
    """
    The path to the first fake initrd.

    :return: A filename as a string.
    """
    return "initrd1.img"


@pytest.fixture(scope="function")
def fk_initrd2():
    """
    The path to the second fake initrd.

    :return: A filename as a string.
    """
    return "initrd2.img"


@pytest.fixture(scope="function")
def fk_initrd3():
    """
    The path to the third fake initrd.

    :return: A path as a string.
    """
    return "initrd3.img"


@pytest.fixture(scope="function")
def fk_kernel():
    """
    The path to the first fake kernel.

    :return: A path as a string.
    """
    return "vmlinuz1"


@pytest.fixture(scope="function")
def fk_kernel2():
    """
    The path to the second fake kernel.

    :return: A path as a string.
    """
    return "vmlinuz2"


@pytest.fixture(scope="function")
def fk_kernel3():
    """
    The path to the third fake kernel.

    :return: A path as a string.
    """
    return "vmlinuz3"


@pytest.fixture(scope="function")
def redhat_autoinstall():
    """
    The path to the test.ks file for redhat autoinstall.

    :return: A path as a string.
    """
    return "test.ks"


@pytest.fixture(scope="function")
def suse_autoyast():
    """
    The path to the suse autoyast xml-file.
    :return: A path as a string.
    """
    return "test.xml"


@pytest.fixture(scope="function")
def ubuntu_preseed():
    """
    The path to the ubuntu preseed file.
    :return: A path as a string.
    """
    return "test.seed"