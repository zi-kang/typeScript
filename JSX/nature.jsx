// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar/>;
var MyComponent = (function () {
    function MyComponent() {
    }
    return MyComponent;
}());
// `MyComponent`的元素属性类型为`{foo?: string}`
<MyComponent foo="bar"/>;
