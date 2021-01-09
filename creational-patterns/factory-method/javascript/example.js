class EmployeeFactory {
    #types = ["developer", "tester"];
    create(name, type) {
        if (!this.#types.includes(type)) {
            console.error("Unknown employee type!");
        } else {
            switch (type) {
                case "developer":
                    return new Developer(name);
                case "tester":
                    return new Tester(name);
            }
        }
    }
}

class Developer {
    name;
    type = "developer";
    defintion =
        "his job is to create application. and solve problems with technology";
    constructor(name) {
        this.name = name;
    }
    thisIsOnlyForDevelopers() {}
}

class Tester {
    name;
    type = "tester";
    defintion =
        "his job is to test application in development mode and try to find bugs!";
    constructor(name) {
        this.name = name;
    }
    thisIsOnlyForTesters() {}
}

const employee = new EmployeeFactory();

const dev_ahmed = employee.create("ahmed", "developer");
const tester_mohamed = employee.create("mohamed", "tester");
console.log(employee, dev_ahmed, tester_mohamed);
