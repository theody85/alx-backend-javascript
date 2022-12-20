export default function createIteratorObject(report) {
  let newArr = [];
  Object.values(report.allEmployees).map((e, idx) => {
    for (const i of e) {
      newArr.push(i);
    }
  });
  return newArr;
}
