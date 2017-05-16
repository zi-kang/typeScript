# typeScript
## 此处是借助typescript中文文档进行的系统性学习
 在学习的过程中发现了很多的问题，官网上面的例子并不正确，比如<br>
 在泛型中给出的例子：<br>
 class BeeKeeper {<br>
    hasMask: boolean;<br>
}<br>
<br>
class ZooKeeper {<br>
    nametag: string;<br>
}<br>
<br>
class Animal {<br>
    numLegs: number;<br>
}<br>
<br>
class Bee extends Animal {<br>
    keeper: BeeKeeper;<br>
}<br>
<br>
class Lion extends Animal {<br>
    keeper: ZooKeeper;<br>
}<br>
<br>
function findKeeper<A extends Animal, K> (a: {new(): A;<br>
    prototype: {keeper: K}}): K {<br>
<br>
    return a.prototype.keeper;<br>
}<br>
<br>
findKeeper(Lion).nametag;  // typechecks!<br>
