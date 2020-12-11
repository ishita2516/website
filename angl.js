
var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{name: "america",artist:"Bill Eillie", price: 75650,},
        {artname: "australia",artist:"Tate McRae", price: 15800},
        {artname: "singapore",artist:"Taylor mike", price: 67850},
        {artname: "canada",artist:"delwin", price: 81700},
        {artname: "london",artist:"mathew", price: 11680},
        {artname: "mauritius",artist:"Justin Blake", price: 55820}];

    this.limit = 9;
    this.sortProperty = 'artname';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);