function EmployeeFactory(name, type) {
    this.types = ["developer", "tester"];
    this.create = function (name, type) {
        if (!this.types.includes(type)) {
            console.error("Unknown employee type!");
        } else {
            switch (type) {
                case "developer":
                    return new Developer(name);
                case "tester":
                    return new Tester(name);
            }
        }
    };
}

function Developer(name) {
    this.name = name;
    this.type = "developer";
    this.defintion =
        "his job is to create application. and solve problems with technology";

    this.thisIsOnlyForDevelopers = function () {};
}

function Tester(name) {
    this.name = name;
    this.type = "tester";
    this.defintion =
        "his job is to test application in development mode and try to find bugs!";

    this.thisIsOnlyForTesters = function () {};
}

const employee = new EmployeeFactory();

const dev_ahmed = employee.create("ahmed", "developer");
const tester_mohamed = employee.create("mohamed", "tester");
console.log(employee, dev_ahmed, tester_mohamed);
