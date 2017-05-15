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
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

//正确使用this的形式
interface Card{
    suit: string;
    card: number;
}
interface Deck{
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

//this参数在回掉函数里面
interface UIElement {
    addClickListener( oncick: (this: void, e: Event) => void ): void;
}
//error
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event){
//         // this.info = e.message; error
//         console.log('clicked!');
//     }
// }
// let h = new Handler();
//uiElement.addClickListener(h.onClickBad);
// error
/*class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    }
}*/
class Handler {
 info: string;
 onClickGood(this: void, e: Event) {
 // can't use this here because it's of type void!
 console.log('clicked!');
 }
 }
/*class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}*/
let h = new Handler();
// UIElement.addClickListener(h.onClickGood);//error
