import meow from "meow";
import chalk from "chalk";
const { green, cyan, yellow, dim } = chalk;
const helpText =
  `
    Usage

       ${green(`npx bharath-cli`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

    Options

       ${yellow(`--bio`)}            Print the social media page ${dim(`(Default: true)`)}
       ${yellow(`--no-bio `)}        Doesn't print the social media page
       ${yellow(`--social`)}         Print the social media page ${dim(`(Default: true)`)}
       ${yellow(`--no-social `)}     Doesn't print the social media page
       ${yellow(`--mis`)}            Print the miscellanceous details ${dim(`(Default: true)`)}
       ${yellow(`--no-mis`)}         Doesn't print the miscellanceous details
       ${yellow(`--ad`)}             Print the social media page ${dim(`(Default: true)`)}
       ${yellow(`--no-ad `)}         Doesn't print the social media page
       ${yellow(`--clear`)}          Clear the console
       ${yellow(`--no-clear `)}      Doesn't clear the console
       ${yellow(`-d`)},${yellow(`--debug`)}       Print the debugging info
       ${yellow(`-v`)},${yellow(`--version`)}     Print CLI version number

    Command

       ${cyan(`help`)}           Print CLI help info

    Examples

       ${green(`npx bharath-cli`)} ${yellow(`--no-social`)}
       ${green(`npx bharath-cli`)} ${yellow(`--no-ad`)}
       ${green(`npx bharath-cli`)} ${cyan(`help`)}

  `;
const options = {
  importMeta: import.meta,
  flags: {
    bio: {
      type: "boolean",
      default: true,
    },
    clear: {
      type: "boolean",
      default: true,
    },
    post: {
      type: "boolean",
      default: false,
      shortFlag: "p"
    },
    minimal: {
      type: "boolean",
      shortFlag: "m",
    },
    social: {
      type: "boolean",
      default: true,
    },
    mis: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    debug: {
      type: "boolean",
      shortFlag: "d",
    },
    version: {
      type: "boolean",
      shortFlag: "v",
    },
  },
};

export default meow(helpText, options);
