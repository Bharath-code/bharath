import alert from "cli-alerts-bharath";

const debugFunc = (isDebug, cli) => {
  if (!isDebug) {
    return;
  }

  alert({ type: 'warning', msg: ` Debug CLI data ` })
  console.log(`Input`, cli.input);
  console.log(`Flags`, cli.flags);
  //console.log(`unFlag`, cli.unnormalizedFlags);
}

export default debugFunc;
