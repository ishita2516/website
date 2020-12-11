
var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{name: "america",artist:"Bill Eillie", price: 75650,},
        {name: "australia",artist:"Tate McRae", price: 15800},
        {name: "singapore",artist:"Taylor mike", price: 67850},
        {name: "canada",artist:"delwin", price: 81700},
        {name: "london",artist:"mathew", price: 11680},
        {name: "mauritius",artist:"Justin Blake", price: 55820}];

    this.limit = 9;
    this.sortProperty ='name';
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