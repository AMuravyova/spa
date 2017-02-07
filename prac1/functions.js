/**
 * Created by amurav on 06.02.2017.
 */

var arr=[1,2,3];
var x;
function func(x){
    return x*x;
}

var count = 0;
var delay = 5000;
var time = 20000;
function func2() {
    count++;
   return console.log("throttle function is called " + count);
}


function func3() {
     return console.log("debounce function is called");
}

function myMap(arr, func){
    var result = [];

    for(var i=0; i< arr.length; i++){
        if(!arr[i]) continue;
        result[i]=(function(){
            return func.call(this, arr[i]);
        })();
    }

    return result;

}
console.log(myMap(arr,func));



function myReduce(arr, func) {

    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) continue;
       // console.log(result);
        result += (function () {
            return func.call(this, arr[i]);
        })();
    }
    return result;
}

console.log(myReduce(arr, func));

var delay = 5000;
function func2() {
    count++;
    return console.log("throttle function is called " + count);
}


function myThrottle(func2, delay){

    var flag = 1;
    setTimeout(function() { flag = 1;},delay);
    //Возвращает функцию, которая вызывает исходную не чаще чем один раз в n миллисекунд
    return function(){
        if(flag) {
            var args = arguments;
            var ctx = this;
            (function(){func2.apply(ctx, args)})();
            flag = 0;
        }


    };
}







var trottle = myThrottle(func2, delay);

var checkInterval = setInterval(function(){
    trottle();
}, 1000);

setTimeout(function(){
    clearInterval(checkInterval);
}, 7000);







function myDebounce(func, time){
    var state = true;

    return (function(){
        if(!state) return;
        func.apply(this, arguments);
        state = false;
        setTimeout(function(){
            state = true;
        }, time);
    })();

}
console.log(myDebounce(func3, delay));


