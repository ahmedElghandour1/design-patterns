class Process {
    constructor() {
        this.state = state;
    }
}

class ProcessManager {
    numberOfProcesses = 0;
    // constructor() {
    //     this.numberOfProcesses = 0;
    // }
    someOtherLogic() {
        console.log(Singleton.processManagerInstance);
    }
}

class Singleton {
    static processManagerInstance;
    constructor() {}
    static CreateProcessManager() {
        Singleton.processManagerInstance = new ProcessManager();
    }
    static getProcessManagerInstance() {
        if (!Singleton.processManagerInstance) {
            Singleton.CreateProcessManager();
        }
        return Singleton.processManagerInstance;
    }
}
const pManagerOne = Singleton.getProcessManagerInstance();
const pManagerTwo = Singleton.getProcessManagerInstance();

console.log(pManagerOne === pManagerTwo);
console.log(pManagerOne);
