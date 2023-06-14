#!/usr/bin/env node

//import from external packages
import alert from "cli-alerts-bharath";

//import from internal files
import init from "./utils/init.js";
import { social, bio, mis, ad, blog, blogName } from "./utils/data.js";
import cli from "./utils/cli.js";
import debug from "./utils/debug.js";
import stats from "./utils/stats.js";
import posts from "./utils/blog.js";


//Assigning
const log = console.log;
const input = cli.input;
const flags = cli.flags;

//IIFE , to dispaly the details of bharath
(async() => {

  //init and help
  init(flags.minimal, flags.clear);
  input.includes(`help`) && cli.showHelp(0);

  //print the info
  flags.bio && log(`${bio}`);
  flags.social && log(`${social}`);
  flags.mis && log(`${mis}`);
  flags.ad && alert({ type: 'info', msg: ad });

  //print stats and post from api
  await stats();

  flags.post && alert({ type: "info", msg: blog, name: blogName });
  flags.post && (await posts());

  //debug info if needed
  debug(flags.debug, cli);

})();
