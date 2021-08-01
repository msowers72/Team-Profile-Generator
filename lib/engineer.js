const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email) {
        super(id, name, email);
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;