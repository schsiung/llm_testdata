sudo: false
os:
  - linux
  - osx
language: node_js
node_js:
  - node
  - '10'
  - '9'
  - '8'
  - '7'
  - '6'
  - '5'
  - '4'
  - '0.12'
  - '0.10'
matrix:
  fast_finish: true
  allow_failures:
    - node_js: 'node'
    - node_js: 'node'
    - node_js: '0.8'