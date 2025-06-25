{
  "name": "mdx-mermaid",
  "version": "1.2.3",
  "description": "Display mermaid diagrams in mdx files.",
  "types": "index.d.ts",
  "main": "lib/mdxast-mermaid.js",
  "exports": {
    ".": {
      "require": "./lib/mdxast-mermaid.cjs",
      "import": "./lib/mdxast-mermaid.mjs"
    },
    "./Mermaid": {
      "require": "./lib/Mermaid.cjs",
      "import": "./lib/Mermaid.mjs"
    },
    "./lib/Mermaid": {
      "require": "./lib/Mermaid.cjs",
      "import": "./lib/Mermaid.mjs"
    }
  },
  "author": "Sam Wall (oss@samuelwall.co.uk)",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "build": "rimraf lib && tsc --declarationDir lib --declaration true --outDir temp && rimraf temp && rollup -c",
    "test": "jest --coverage"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/sjwall/mdx-mermaid.git"
  },
  "homepage": "https://sjwall.github.io/mdx-mermaid",
  "bugs": "https://github.com/sjwall/mdx-mermaid/issues",
  "keywords": [
    "mdx",
    "markdown",
    "mermaid",
    "docusaurus",
    "mdxast",
    "react",
    "jsx"
  ],
  "peerDependencies": {
    "mermaid": ">=8.11.0",
    "react": "^16.8.4 || ^17.0.0",
    "unist-util-visit": "^2.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "@babel/preset-react": "^7.18.6",
    "@mdx-js/mdx": "^1.6.22",
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-commonjs": "^22.0.2",
    "@rollup/plugin-typescript": "^8.3.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/react": "^11.1.0",
    "@types/jest": "^27.4.0",
    "@types/mermaid": "^8.2.7",
    "@types/react": "^17.0.38",
    "@types/unist": "^2.0.6",
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "eslint": "^8.6.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsdoc": "^37.5.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-react": "^7.28.0",
    "jest": "^27.4.7",
    "mermaid": "^8.0.0",
    "react-dom": "^17.0.0",
    "rimraf": "^3.0.2",
    "react-dom": "^17.0.0",
    "rollup": "^2.78.1",
    "ts-jest": "^27.1.2",
    "typescript": "^4.5.4",
    "unist-util-visit": "^2.0.0"
  }
}