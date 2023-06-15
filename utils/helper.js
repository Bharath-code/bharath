const sortObj = (unSortedFlags) => {
  const flags = Object.keys(unSortedFlags)
    .sort()
    .reduce((obj, key) => {
      obj[key] = unSortedFlags[key];
      return obj;
    }, {});
  return flags;
};

export { sortObj };
