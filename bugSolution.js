function foo(x) {
  if (x === null || x === undefined || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, or non-string/array inputs
  }
  return x.length;
}
//Additional handling for other datatypes can be added as needed.