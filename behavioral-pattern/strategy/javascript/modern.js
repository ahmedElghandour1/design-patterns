class Context {
    strategy;

    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    doSomeLogic() {
        this.strategy.sayHi();
    }
}

class SayHiInEnglish {
    msg = "Hi people";

    sayHi() {
        console.log(this.msg);
    }
}

class SayHiInArabic {
    msg = "مرحبا جميعا";

    sayHi() {
        console.log(this.msg);
    }
}

const context = new Context(new SayHiInEnglish());
console.log(context.doSomeLogic());
context.setStrategy(new SayHiInArabic());
console.log(context.doSomeLogic());
