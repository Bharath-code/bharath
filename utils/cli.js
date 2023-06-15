import meow from "meow";
import chalk from "chalk";
import meowHelp from "cli-meow-help";
import {sortObj} from "./helper.js";
const { green, cyan, yellow, dim } = chalk;

const unSortedFlags = {
  bio: {
    type: "boolean",
    default: true,
    desc: `Prints the bio`,
  },
  clear: {
    type: "boolean",
    default: true,
    desc: `Prints the bio`,
  },
  post: {
    type: "boolean",
    default: false,
    shortFlag: "p",
    desc: `Prints the blog posts`,
  },
  minimal: {
    type: "boolean",
    shortFlag: "m",
    desc: `Prints minimal bio`,
  },
  social: {
    type: "boolean",
    default: true,
    desc: `Prints the social`,
  },
  mis: {
    type: "boolean",
    default: true,
    desc: `Prints the miscellaneous`,
  },
  ad: {
    type: "boolean",
    default: true,
    desc: `Prints the ad`,
  },
  debug: {
    type: "boolean",
    shortFlag: "d",
    desc: `Debug the CLI`,
  },
  version: {
    type: "boolean",
    shortFlag: "v",
    desc: `Prints CLI version`,
  },
};
const flags = sortObj(unSortedFlags);

const commands = {
  help: {
    desc : `Print the help info`
  }
};

const helpText = meowHelp({
  name: `npx bharath-cli`,
  flags,
  commands,
  footer: `Don't want to display particular options use any or combine them (--no-social , --no-ad, --no--bio, --no-mis, --no-post)`
});

const options = {
  importMeta: import.meta,
  description : false,
  inferType : true,
  hardRejection: false,
  flags
};

export default meow(helpText, options);

