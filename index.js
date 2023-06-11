#!/usr/bin/env node

import chalk from 'chalk';
import welcome from "cli-welcome";
import pkgJSON from "./package.json" assert { type: "json" };


const log = console.log;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const purple = chalk.hex(`#6cc644`).bold.inverse;
const italic = chalk.italic;
const dim = chalk.dim;

//alerts
import sym from "log-symbols";
const success = chalk.green;
const warning = chalk.hex('#FFA500');
const info = chalk.blue;
const error = chalk.red.bold;


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

log(`

  ${sym.success} ${success(` SUCCESS `)} Thank you for using my CLI

  ${sym.info} ${info(` INFO `)} Learning CLI automation

  ${sym.warning} ${warning(` WARNING `)} Don't copy me, Be yourself

  ${sym.error} ${error(` ERROR `)} I'm learning, so bear my mistakes

  `)
