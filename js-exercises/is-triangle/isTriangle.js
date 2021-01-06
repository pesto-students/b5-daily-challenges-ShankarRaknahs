function isTriangle(line1, line2, line3) {
  if (
    line1 + line2 <= line3
    || line1 + line3 <= line2
    || line2 + line3 <= line1
  ) {
    return false;
  }
  return true;
}

export { isTriangle };
