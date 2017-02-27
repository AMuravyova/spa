/**
 * Created by amurav on 08.02.2017.
 */

function Scope(){

    this.$$watchers = [];
    this.$watch = function (propertyFn, listenerFn) {
        var watcher = {
            property: propertyFn,
            listener: listenerFn
        };
        this.$$watchers.push(watcher);
    };
    this.$digest = function () {

        for (var i = 0; i < this.$$watchers.length; i++) {
            this.$$watchers[i].listener();
        }

    };

}

var scope = new Scope();

scope.$watch(
    function() {console.log('watchFn'); },
    function() {console.log('listener'); }
);

scope.$digest(); //listener
scope.$digest(); //listener
scope.$digest(); //listener











/*
var scope = new Scope();

scope.firstName = 'Joe';
scope.counter = 0;

scope.$$watchers = [];

scope.$watch = function (propertyFn, listenerFn) {
    var watcher = {
        property: propertyFn,
        listener: listenerFn
    };
    scope.$$watchers.push(watcher);
};


scope.$digest = function () {

    for (var i = 0; i < scope.$$watchers.length; i++) {
        scope.$$watchers[i].listener();
    }

    // Метод $digest должен ходить по $$watchers и выполнять listenerFn() для каждого watcher

    // В методе $digest выполнять listenerFn() нужно только когда поле scope.myName поменяло значение, т.е. изменилось.

};



function Cl() {
    this.a = 54645564;
    this.r = function () {
let a
    };
}

class Cl2 {
    constructor() {
        this.r = function (a) {

        };
        this.r2 = (a) => {
            this.a = 0;
        }
    }

    m() {

    }
}
*/