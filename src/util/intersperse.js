const intersperse = (arr, delim) => arr.reduce(
    (acc, el) => (acc.length ? acc.concat([delim, el]) : [el]),
    [],
);

export default intersperse;
