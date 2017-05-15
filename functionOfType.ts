function add(x: number, y: number):number {
    return x + y;
}
let myAdd = function(x: number, y: number):number{
    return x + y;
}
let myAddFunc: (x: number, y: number) => number = function(x: number, y: number): number { return x+y; }
let myAddFuncc: (baseValue: number, increment: number) => number =
    function(x,y){ return x + y; };

//don't know the number of parameter
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log( employeeName );

//this && 箭头函数
let deck = {
    suits: ["hearts","spades","clubs","damonds"],
    cards: Array(52),
    createCardPicker: function(){
        return function(){
            let pickedCard = Math.floor( Math.random()*52 );
            let pickedSuit = Math.floor( pickedCard / 13 );
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);