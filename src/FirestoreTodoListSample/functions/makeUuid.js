let uuid = 0;

const makeUuid = () => (
  ((uuid += 1) + Math.random()).toString()
)

export default makeUuid