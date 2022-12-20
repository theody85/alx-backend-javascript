export default function iterateThroughObject(reportWithIterator) {
  let str = '';

  for (const i in reportWithIterator) {
    if (i < reportWithIterator.length - 1) str += `${reportWithIterator[i]} | `;
    else str += reportWithIterator[i];
  }

  return str;
}
