export default function deepEqual(x: any, y: any, useStrict = false) {
  if (useStrict && x === y) {
    return true;
  } else if (!useStrict && x == y) {
    return true;
  } else if (
    typeof x == "object" &&
    x != null &&
    typeof y == "object" &&
    y != null
  ) {
    if (x.getTime && y.getTime) {
      if (!deepEqual(x.getTime(), y.getTime(), useStrict)) return false;
    }
    if (Object.keys(x).length != Object.keys(y).length) return false;

    for (const prop in x) {
      if (Object.prototype.hasOwnProperty.call(y, prop)) {
        if (!deepEqual(x[prop], y[prop], useStrict)) return false;
      } else return false;
    }

    return true;
  } else return false;
}
