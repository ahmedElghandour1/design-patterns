function Process(state) {
    this.state = state;
}

const Singleton = (function () {
    let processManagerInstance;
    function ProcessManager() {
        this.numberOfProcesses = 0;
    }
    function CreateProcessManager() {
        processManagerInstance = new ProcessManager();
    }
    function getProcessManagerInstance() {
        if (!processManagerInstance) {
            CreateProcessManager();
        }
        return processManagerInstance;
    }
    return {
        getProcessManagerInstance,
    };
})();

const pManagerOne = Singleton.getProcessManagerInstance();
const pManagerTwo = Singleton.getProcessManagerInstance();

console.log(pManagerOne === pManagerTwo);
