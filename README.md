# typeScript
## 此处是借助typescript中文文档进行的系统性学习
 在学习的过程中发现了很多的问题，官网上面的例子并不正确，比如<br>
 在泛型中给出的例子：
class BeeKeeper {
>>hasMask: boolean;<br>
}


class ZooKeeper {
>>nametag: string;<br>
}

class Animal {
>>numLegs: number;<br>
}

class Bee extends Animal {
>>keeper: BeeKeeper;<br>
}

class Lion extends Animal {
>>keeper: ZooKeeper;<br>
}

function findKeeper<A extends Animal, K> (a: {new(): A;
>>prototype: {keeper: K}}): K {<br>

>>return a.prototype.keeper;<br>
}

findKeeper(Lion).nametag;  // typechecks!


####这会显示报错，错误提示为：.nametag在一个undefined里面查找不到
