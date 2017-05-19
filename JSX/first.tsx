var bar;
class Foo {
    name: string;
    age: number;
}
var foo = bar as Foo;
declare namespace JSX {
    interface IntrinsicElements {
        foo: any
    }
}

<foo />;