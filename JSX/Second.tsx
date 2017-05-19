class MyComponent {
    render() {}
}

// 使用构造签名
var myComponent = new MyComponent();

// 元素类的类型 => MyComponent
// 元素实例的类型 => { render: () => void }

function MyFactoryFunction() {
    return {
        render: () => {
        }
    }
}

// 使用调用签名
var myComponent = MyFactoryFunction();

//优雅分割线------------------------------------------
declare namespace JSX {
    interface ElementClass {
        render: any;
    }
}

/*class MyComponent {
    render() {}
}*/
/*function MyFactoryFunction() {
    return { render: () => {} }
}*/

<MyComponent />;
<MyFactoryFunction />;

class NotAValidComponent {}
function NotAValidFactoryFunction() {
    return {};
}
