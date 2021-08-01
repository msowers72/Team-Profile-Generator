const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email) {
        super(id, name, email);
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;