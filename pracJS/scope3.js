/**
 * Created by amurav on 10.02.2017.
 */

function Scope(){

    this.$$watchers = [];
    this.$watch = function (propertyFn, listenerFn) {
        var watcher = {
            property: propertyFn,
            listener: listenerFn,
            old: null

    };
        this.$$watchers.push(watcher);
    };


    this.$digestOnce = function(){

        var dirty = false;

        for (var i = 0; i < this.$$watchers.length; i++) {

            if (this.$$watchers[i].listener){

                if(this.$$watchers[i].old!=this.$$watchers[i].property()){
                    dirty = true;
                    this.$$watchers[i].listener(this.$$watchers[i].property(),this.$$watchers[i].old,this);
                    this.$$watchers[i].old = this.$$watchers[i].property();
                }

            }
        }
        return dirty;

    }

    this.$digest = function() {
        var notClean = 0;
        do{
            notClean = this.$digestOnce();
        }
        while(notClean);
    }

}

var scope = new Scope();
scope.firstName = 'Joe';
scope.counter = 0;
scope.count = 0;

scope.$watch(
    function() {
        return scope.counter;
    },
    function(newValue, oldValue, ctx) {
        scope.counterIsTwo = (newValue === 3);
        console.log('scope counterIsTwo ----', scope.counterIsTwo);
    }
);

scope.$watch(
    function() {
        return scope.firstName;
    },
    function(newValue, oldValue, ctx) {
        scope.counter++;
    }
);

scope.$watch(
    function() {
        return scope.count;
    },
    function(newValue, oldValue, ctx) {
        scope.firstName += scope.counter;
    }
);

// After the first digest the counter is 1
scope.$digest();

//Первым аргументом может быть все, что угодно: функция, проверка на равенство
// или проверка существования объекта.
//и, вторым аргументом, сообщение, которое будет выведено в консоль
// вместе с выброшенным исключением, если первое условие не будет выполнено
console.assert(scope.counter === 1, "scope.counter !== 1"); // true

console.log("scope.counter === 1 " + scope.counter);

// On the next change the counter becomes two, and the other watch listener is also run because of the dirty check
scope.firstName = 'Jane';
console.log("scope.firstName === 1 " + scope.firstName);
scope.$digest();
console.assert(scope.counter === 2, "scope.counter !== 2"); // true

console.log("scope.counter === 2 " + scope.counter);
console.assert(scope.counterIsTwo, "!scope.counterIsTwo"); // true

console.log("scope.counterIsTwo " + scope.counterIsTwo);
scope.count = 1;
scope.$digest();

