#!/usr/bin/env node

import chalk from 'chalk';
import welcome from "cli-welcome";
import pkgJSON from "./package.json" assert { type: "json" };

// Add import assertion

//import pkgJSON from "./package.json"
//const welcome = require("cli-welcome")
//const pkgJSON = require("./package.json")
const log = console.log;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const purple = chalk.hex(`#6cc644`).bold.inverse;
const italic = chalk.italic;
const dim = chalk.dim;
welcome(
  {
    title: `Bharathkumar`,
    tagLine: `Hi, nice to meet you all`,
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#6937FF`,
    color: `#000000`,
    bold: true,
    clear: true,
  }
);
log(`
${italic(
  `Software Engineer - who just don't want to code but do the engineering.`
)}

🐦 ${twitterClr(` Twitter `)} ${dim(`https://twitter.com/iam_pbk`)}
📚 ${purple(` Github `)}  ${dim(`https://github.com/Bharath-code`)}

`);
