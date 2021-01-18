function Context(strategy) {
    this.strategy = strategy;
    this.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    this.doSomeLogic = function () {
        this.strategy.sayHi();
    };
}

function SayHiInEnglish() {
    this.msg = "Hi people";

    this.sayHi = function () {
        console.log(this.msg);
    };
}

function SayHiInArabic() {
    this.msg = "مرحبا جميعا";

    this.sayHi = function () {
        console.log(this.msg);
    };
}

const context = new Context(new SayHiInEnglish());
console.log(context.doSomeLogic());
context.setStrategy(new SayHiInArabic());
console.log(context.doSomeLogic());
