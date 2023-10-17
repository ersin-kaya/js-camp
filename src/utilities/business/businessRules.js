export default class BusinessRules {
  run(...logics) {
    for (const result of logics) {
      if (!result) {
        return result;
      }
    }
    return null;
  }
}
