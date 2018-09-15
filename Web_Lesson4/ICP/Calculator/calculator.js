var app = angular.module('cApp', []);
cApp.controller('cCon', function ($scope) {
        // Write code simple calculator operations





    });

var saveval ="0";
var op;

function inputto(val){
    document.form1.result.value += val;
}
function  clearinput() {
    document.form1.result.value="";
}

function add(){
    saveval=passInt(document.form1.result.value)+passInt(saveval);
    operator="+";
    document.form1.result.value="";
}
function equalto(){
    document.form1.result.value=saveval;
    saveval="0"   }



