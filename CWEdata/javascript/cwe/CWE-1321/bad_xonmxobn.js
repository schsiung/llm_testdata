sudo: false
language: node_js
node_js:
  - '4'
  - '6'
  - '7'
install:
  - npm i npminstall && npminstall
script:
  - npm run ci
after_script:
  - npminstall codecov && codecov