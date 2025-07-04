---
schema: >-
  definition test/user {}

  definition test/resource {
    relation viewer: test/user | test/user:*
  }
relationships: |
  test/resource:first#viewer@test/user:*
  test/resource:first#viewer@test/user:concreteguy
assertions:
  assertTrue:
    - test/resource:first#viewer@test/user:concreteguy
    - test/resource:first#viewer@test/user:anotheruser
    - test/resource:first#viewer@test/user:aseconduser
    - test/resource:first#viewer@test/user:athirduser