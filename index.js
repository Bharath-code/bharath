#!/usr/bin/env node

const welcome = require("cli-welcome")
const pkgJSON = require("./package.json")

welcome(
  {
    title: pkgJSON.name,
    tagLine: `Hi, nice to meet you all`,
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
  }
);
console.log(`
Bharath Kumar

Software Engineer - who just don't want to code but do the engineering.

🐦 Twitter: https://twitter.com/iam_pbk
📚 Github:  https://github.com/Bharath-code

`);
