
var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{artname: "Lovely",artist:"Billie Eillie", price: 75650,},
        {artname: "You Broke Me First",artist:"Tate McRae", price: 15800},
        {artname: "You Belong With Me",artist:"Taylor Swift", price: 67850},
        {artname: "Alone",artist:"Alan Walker", price: 81700},
        {artname: "Blank Space",artist:"Taylor Swift", price: 11680},
        {artname: "Stuck With You",artist:"Justin Bieber", price: 55820}];

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