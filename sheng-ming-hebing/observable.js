"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = (function () {
    // ... implementation left as an exercise for the reader ...
    function Observable(id, dateTime, image, isUnread, title) {
        this.id = id;
        this.dateTime = dateTime;
        this.image = image;
        this.isUnread = isUnread;
        this.title = title;
    }
    return Observable;
}());
exports.Observable = Observable;
