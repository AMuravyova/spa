/**
 * Created by amurav on 06.02.2017.
 */

var arr=[1,2,3];
var x;
function func(x){
    return x*x;
}

function myMap(arr, func){
    var result = [];

    for(var i=0; i< arr.length; i++){
        if(!arr[i]) continue;
        result[i]=(function(){
            return func.call(this, arr[i]);
        })();
    }


    console.log();

    return result;

}
console.log(myMap(arr,func));

function myReduce(arr, func){

    var result = 0;
    for(var i=0, len = arr.length; i<len; i++){
        if(!arr[i]) continue;
        result +=(function(){
            func.call(this, arr[i]);
        });
    }
    console.log(result.toString());
    return result;

}
console.log(myReduce(arr, func()));

function myThrottle(func, delay){

    return function(){
        var args = arguments;
        var ctx = this;
        setTimeout(function(){
            func.apply(ctx, args);
        }, delay);
    }
}


function myDebounce(func, time){
    var state = true;

    return function(){
        if(!state) return;
        func.apply(this, arguments);
        state = false;
        setTimeout(function(){
            state = true;
        }, time);
    }

}



