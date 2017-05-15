function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAddFunc = function (x, y) { return x + y; };
var myAddFuncc = function (x, y) { return x + y; };
//don't know the number of parameter
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//this && 箭头函数
/*let deck = {
    suits: ["hearts","spades","clubs","damonds"],
    cards: Array(52),
    createCardPicker: function(){
        return function(){
            let pickedCard = Math.floor( Math.random()*52 );
            let pickedSuit = Math.floor( pickedCard / 13 );
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}*/
//上述代码错误，是因为this此时指向的是window而非deck本身
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck.createCardPicker();
var pickedCard1 = cardPicker1();
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
