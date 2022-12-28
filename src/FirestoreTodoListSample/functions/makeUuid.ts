let uuid = 0;

const makeUuid = (): string => ((uuid += 1) + Math.random()).toString();

export default makeUuid;
