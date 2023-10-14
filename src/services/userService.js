export default class UserService {
  // export: dışarıdan import edilebilir
  // default: js file-based old. için ben userService.js'i import ettiğimde default olarak UserService'i import et
  //   https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export
  // You can export many variables from the same file, 'default' is used only once in the whole file 👉🏼 to let you import this default variable outside without using brackets {}

  constructor(loggerService) {
    this.users = []; // prototyping
    this.loggerService = loggerService;
  }

  add(user) {
    this.users.push(user);
    this.loggerService.log(user);
  }

  list() {
    return this.users;
  }

  getById(id) {
    return this.users.find((u) => u.id === id);
  }
}
