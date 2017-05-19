var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent.prototype.render = function () { };
    return MyComponent;
}());
// 使用构造签名
var myComponent = new MyComponent();
// 元素类的类型 => MyComponent
// 元素实例的类型 => { render: () => void }
function MyFactoryFunction() {
    return {
        render: function () {
        }
    };
}
// 使用调用签名
var myComponent = MyFactoryFunction();
/*class MyComponent {
    render() {}
}*/
/*function MyFactoryFunction() {
    return { render: () => {} }
}*/
<MyComponent />;
<MyFactoryFunction />;
var NotAValidComponent = (function () {
    function NotAValidComponent() {
    }
    return NotAValidComponent;
}());
function NotAValidFactoryFunction() {
    return {};
}
