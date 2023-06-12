import checkNode from "cli-check-node";
import unhandled from "cli-handle-unhandled";
import welcome from "cli-welcome";

import pkgJSON from "./../package.json" assert { type: "json" };

export default () => {
  unhandled();

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

  checkNode("16");

}
