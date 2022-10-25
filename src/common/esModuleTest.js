const obj = {
  num: 1,
};
const numAdd = (num) => {
  obj.num += ((Number.isNaN(num) ? 1 : num));
  return obj.num;
};
// setInterval(() => {
//   console.log(obj);
// }, 1000);

export {
  obj,
  numAdd,
};

// 经过测试发现，esModule的导出为引用关系，外面可以改里面的值
