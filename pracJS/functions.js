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
     return console.log("debounce function is called! Delay is 5 sec. ");
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




function myDebounce(func3, delay){

    var callFunc = true;
   // var callFunc = false;

    var timer = 0;
    //  timer = setTimeout(function(){
    //     callFunc = true;
    // }, delay);

    var fn = function(){
        return setTimeout(function(){
            callFunc = true;
            func3.apply(this, arguments);
        }, delay);
    };

    return function(){

        if(!callFunc){
            clearTimeout(timer);
            timer = fn();
            return;
        }

        //func3.apply(this, arguments);
        callFunc = false;
        timer = fn();
    };

}














/*
function myDebounce(func3, delay){

    // var callFunc = true;
    var callFunc = false;

    //var timer = 0;
    var timer = setTimeout(function(){
        callFunc = true;
    }, delay);
    return function(){

        if(!callFunc){
            clearTimeout(timer);
            timer = setTimeout(function(){ callFunc = true}, delay);
            return;
        }
        // if(!callFunc) {
        //
        //     return;
        // }
        func3.apply(this, arguments);
        callFunc = false;
        // setTimeout(function(){
        //     callFunc = true;
        // }, delay);
    };

}
*/







var deboun = myDebounce(func3, 1000);


var checkInterval2 = setInterval(function(){
    console.log("called debounce from checkInterval every 1 sec during 15 sec ");
    deboun();
}, 500);

setTimeout(function(){
    clearInterval(checkInterval2);
}, 5000);



