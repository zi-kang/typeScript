declare namespace JSX {
    interface IntrinsicElements {
        foo: { bar?: boolean }
    }
    interface ElementAttributesProperty {
        props; // 指定用来使用的属性名
    }
}

// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar />;

class MyComponent {
    // 在元素实例类型上指定属性
    props: {
        foo?: string;
    }
}
// `MyComponent`的元素属性类型为`{foo?: string}`
<MyComponent foo="bar" />































