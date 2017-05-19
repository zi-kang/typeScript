export class Observable<T> {
    // ... implementation left as an exercise for the reader ...
    constructor(
        public id: number,
        public dateTime: Date,
        public image: string,
        public isUnread: boolean,
        public title: string
    ) {}
}