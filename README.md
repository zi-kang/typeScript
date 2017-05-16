# typeScript
## 此处是借助typescript中文文档进行的系统性学习
 在学习的过程中发现了很多的问题，官网上面的例子并不正确，比如<br>
 在泛型中给出的例子：<br>
>class BeeKeeper {<br>
>>hasMask: boolean;<br>
>}


>class ZooKeeper {<br>
>>nametag: string;<br>
>}

>class Animal {<br>
>>numLegs: number;<br>
>}

>class Bee extends Animal {<br>
>>keeper: BeeKeeper;<br>
>}

>class Lion extends Animal {<br>
>>keeper: ZooKeeper;<br>
>}

>function findKeeper<A extends Animal, K> (a: {new(): A;<br>
>>prototype: {keeper: K}}): K {<br>

>>return a.prototype.keeper;<br>
>}
<br>
findKeeper(Lion).nametag;  // typechecks!


####这会显示报错，错误提示为：.nametag在一个undefined里面查找不到
