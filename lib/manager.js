const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email) {
        super(id, name, email);
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;