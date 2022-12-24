const findItemById = (dataList = [], id = '') => {
  const matchedIdx = dataList.findIndex((todo) => todo.id === id);
  return dataList[matchedIdx];
};

export default findItemById;
