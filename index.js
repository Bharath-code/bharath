#!/usr/bin/env node


import alert from "cli-alerts-bharath";


import init from "./utils/init.js";
import { social, bio, mis, ad } from "./utils/data.js";
import cli from "./utils/cli.js";
import debug from "./utils/debug.js";

const log = console.log;
const input = cli.input;
const flags = cli.flags;

(() => {
  init(flags.minimal, flags.clear);

  input.includes(`help`) && cli.showHelp(0);

  flags.bio && log(`${bio}`);
  flags.social && log(`${social}`);
  flags.mis && log(`${mis}`);
  flags.ad && alert({ type: 'info', msg: ad });

  debug(flags.debug, cli);

})();
