environment:
  matrix:
    # For Python versions available on Appveyor, see
    # http://www.appveyor.com/docs/installed-software#python
    - PYTHON: "C:\\Python34"
    - PYTHON: "C:\\Python34-x64"
      DISTUTILS_USE_SDK: 1
    - PYTHON: "C:\\Python35"
    - PYTHON: "C:\\Python35-x64"
    - PYTHON: "C:\\Python36"
    - PYTHON: "C:\\Python36-x64"
    - PYTHON: "C:\\Python37"
    - PYTHON: "C:\\Python37-x64"

install:
  # We need wheel installed to build wheels
  - "%PYTHON%\\python.exe -m pip install wheel"

build: off

test_script:
  # Put your test command here.
  # If you don't need to build C extensions on 64-bit Python 3.3 or 3.4,
  # you can remove "build.cmd" from the front of the command, as it's
  # only needed to support those cases.
  # Note that you must use the environment variable %PYTHON% to refer to
  # the interpreter you're using - Appveyor does not do anything special
  # to put the Python evrsion you want to use on PATH.
  - "build.cmd %PYTHON%\\python.exe setup.py test"

after_test:
  # This step builds your wheels.
  # Again, you only need build.cmd if you're building C extensions for
  # 64-bit Python 3.3/3.4. And you need to use %PYTHON% to get the correct
  # interpreter
  - "build.cmd %PYTHON%\\python.exe setup.py bdist_wheel"

artifacts:
  # bdist_wheel puts your built wheel in the dist directory
  - path: dist\*

#on_success:
#  You can use this step to upload your artifacts to a public website.
#  See Appveyor's documentation for more details. Or you can simply
#  access your wheels from the Appveyor "artifacts" tab for your build.