/**
 * Created by amurav on 20.02.2017.
 */

function $(selector) {
    return new Init(selector);
}

function Init(selector) {
    this.elem={};
    if (!selector) {
        console.log("not id or class");
        return this;
    }
    if ( selector.nodeType ) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;
    }
    if ( typeof selector === "string" )
    {
        var arr = selector.split('');

        if (arr[0]==='.'){
            arr.splice(0,1);
            selector = arr.join('');

            this.elem = document.getElementsByClassName(selector);}
        else if(arr[0]==='#'){
            arr.splice(0,1);
            selector = arr.join('');
            this.elem = document.getElementById(selector);}
        this.context=this.elem;
        return this;
    }
}


console.log($('#myId'));
console.log($('.myClass'));



Init.prototype.click = function(fn)
{
    this.onclick = fn(this);
    return this;
};
Init.prototype.attr = function(attribute,value) {
    if(this.context.length===1){
        this.context[0].setAttribute(attribute,value);
    }
    if(!this.context.length){
        this.context.setAttribute(attribute,value);
    }

    return this;
};
Init.prototype.append = function (value) {
    this.context.appendChild(value);
    return this;
};

Init.prototype.next = function () {
    this.context = this.context.nextElementSibling;
    return this;
};

Init.prototype.hasClass = function (className) {

    if(this.context.className===className) {
        return true;
    }

    return false;
};


Init.prototype.mouseenter = function (fn) {
    this.context.onmouseover = fn(this);
    return this;
};


function testClick() {
    console.log("click");

}

function testMouseenter() {
    console.log("mouseenter");

}
$('#myId').click(testClick);


$('#myId').next();

$('#myId').next().click(testClick);

$('#myId').attr("id","newId");

var a = $('.myClass').attr("id","addId");
console.log($('#addId'));
console.log(a);

var hasCl = $('#newId').hasClass('testClass');
console.log(hasCl);

$('#newId').mouseenter(testMouseenter);

