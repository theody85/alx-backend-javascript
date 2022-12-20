export default function createIteratorObject(report) {
  const newArr = [];
  Object.values(report.allEmployees).forEach((e) => {
    for (const i of e) {
      newArr.push(i);
    }
  });
  return newArr;
}
