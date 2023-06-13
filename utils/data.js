import chalk from 'chalk';


const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const purple = chalk.hex(`#6cc644`).bold.inverse;
const italic = chalk.italic;
const dim = chalk.dim;
const args = process.argv.slice(2);

//alerts
import sym from "log-symbols";
const success = chalk.green;
const warning = chalk.hex('#FFA500');
const info = chalk.blue;
const error = chalk.red.bold;

const social =
  `
    🐦 ${twitterClr(` Twitter `)} ${dim(`https://twitter.com/iam_pbk`)}
    📚 ${purple(` Github `)}  ${dim(`https://github.com/Bharath-code`)}
  `;



const bio =
  `
  ${italic(
    `Software Engineer - who just don't want to code but do the engineering.`
  )}
  `;

const mis =
  `

      ${sym.success} ${success(` SUCCESS `)} Thank you for using my CLI

      ${sym.info} ${info(` INFO `)} Learning CLI automation

      ${sym.warning} ${warning(` WARNING `)} Don't copy me, Be yourself

      ${sym.error} ${error(` ERROR `)} I'm learning, so bear my mistakes

      `;
const ad = `Checkout my node module pages`;

export { social, bio, mis, ad }
