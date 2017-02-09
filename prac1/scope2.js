/**
 * Created by amurav on 09.02.2017.
 */

//интерфейс
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

    this.$digest = function() {

        var newValue;
        var oldValue;

        for (var i = 0; i < this.$$watchers.length; i++) {
            if (this.$$watchers[i].listener){

                newValue = this.$$watchers[i].property();
                oldValue = this.$$watchers[i].old;

               console.log("oldValue: "+oldValue);
               console.log("newValue: "+newValue);
               console.log(this.counter);

                if(oldValue!=newValue){
                    this.$$watchers[i].listener(newValue,oldValue,this);
                    this.$$watchers[i].old = this.$$watchers[i].property();
                }
            }
        }
    };

}

//создали объект
var scope = new Scope();

scope.firstName = 'Joe';

scope.counter = 0;

scope.$watch(
    function() {
        return scope.firstName;
    },
    function(newVal,oldVal,ctx) {

            scope.counter++;

    }
);


console.assert(scope.counter === 0); //true
console.log("counter = 0: " + scope.counter);


scope.$digest();
console.assert(scope.counter === 1); //true
console.log("counter = 1: "+ scope.counter);


scope.$digest();
scope.$digest();
console.assert(scope.counter === 1); //true
console.log("counter = 1: "+ scope.counter);

scope.firstName = 'Jane';
scope.$digest();
console.assert(scope.counter === 2); //true
console.log("counter = 2: "+scope.counter);



