/*
let learn = 'hello es6'
console.log(learn)
console.log("cool")

// const
 
if (true) {
   let a = 40;
   console.log(a); //40
  }
console.log(a); // 由于这里的a并没有进行变量声明，因此会抛出异常

let a = 50;
let b = 100;
if (true) {
 let a = 60;
 var c = 10;
 console.log(a/c); // 6
 console.log(b/c); // 10
}
console.log(c); // 10
console.log(a); // 50

let a = {'name': 'javascript', 'version': 'es6'}
for ( obj in a ) {
    console.log(`key:${obj}   ===> value:${a[obj]}`)
}

let NotWorkingFunction = (a = 10, b) => {
    return a + b;
    }
console.log(NotWorkingFunction(20))

var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);
NewMap.set([], 2345);
NewMap.get('name'); // John
NewMap.get('id'); // 2345796
NewMap.get('interest'); // ['js', 'ruby', 'python']
console.log(NewMap)

let language = ['Golang', 'Python', 'javaScript', 'Java']
language.forEach(function(codeItem){
    console.log("我正在学习" + codeItem)
})

let bigNumbers = [100, 200, 300, 400, 500]

let smallNumbers = bigNumbers.map(function(smallNumber){
    return smallNumber /100
})
console.log(smallNumbers)

let hasNullString = ['', 'a', 'b','','','c']
let filterNullString = hasNullString.filter(function(word){
    if (word) {
        return word
    }
})
console.log(filterNullString)

let a = 40;
let b = 80;
if (true) {
 let a = 60;
 var c = 10;
 console.log(a-c); // 50
 console.log(b+c); // 90
}
console.log(c); // 10
console.log(a); // 40

const LANGUAGES = ['Js', 'Java', 'Golang', 'Python'];
// LANGUAGES = "ES2015";     // 抛出异常 
LANGUAGES.push('Erlang');   //  Works fine.
console.log(LANGUAGES);    // [ 'Js', 'Java', 'Golang', 'Python', 'Erlang' ]

let string = "javaScript";
for (let char of string) {
 console.log(char);
}

var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a');     // 这里我们再次添加同样的值.
for (element of sets) {
 console.log(element);
}

function *myGenerator() {
  console.log(1);
  let a = yield '第一次执行';
  console.log(a);
  let b = yield '第二次执行';
  console.log(b);
  return '你好';
}

let iterator = myGenerator();
let firstYield = iterator.next(); 
console.log(firstYield)  // { value: 'first yield', done: false }

class Training {
  constructor(name, location) {
      this.name = name;
      this.location = location;
    }
    start() {
      console.log(this.name + '培训在' + this.location + '召开');
    }
  }
  let jsTrain = new Training('JS', '上海');
  let ngTrain = new Training('Angular', '北京');
  jsTrain.start();     //  JS培训在上海召开
  ngTrain.start();     //  Angular培训在北京召开
*/
/*
class Traning {
  constructor(name, location) {
          this.name = name;
          this.location = location;
      }
      start() {
        console.log(this.name + '培训在' + this.location + '召开');
      }
      static getAddress() {     // 定义静态方法
          console.log('以下地址是：');
          /* 静态方法是无法调用或获取实例属性及动态方法，因此输出undefined */
          //console.log('城市: '+ this.location );
    //  }
  //}
  //Traning.admin = "Boyle";             // 定义了静态属性
  //Traning.getMembers = function () {   // 定义了静态方法  
  //    console.log('主办方：' + Traning.admin);
  //}
  //let jsTrain = new Traning('JS', '上海');
  //console.log(Traning.admin);   // 输出 Boyle
  //console.log(jsTrain.admin);   // 由于‘admin’定义为静态属性，因此这里输出为undefined
  //Traning.getMembers();         // 输出 主办方：Boyle
  //jsTrain.getMembers();       // 抛出异常 TypeError: jsTrain.getMembers is not a function
  //Traning.getAddress();         // 输出 ‘以下地址是：城市：undefined’
  //jsTrain.getAddress();       // 抛出异常 TypeError: jsTrain.getAddress is not a function

//class Traning {
//    constructor(name) {
//        this._name = name;
//    }
//    get name() {
//        // Validation can happen on data
//        return this._name;
//    }
//    set name(val) {
//        // Validation can happen on data
//        this._name = val;
//    }
//}
//let traning = new Traning('JS');
//console.log("培训主题: " + traning.name);   // 输出：培训主题: JS
//traning.name = 'Angular';
// console.log("培训主题: " + traning.name);   // 输出：培训主题: Angular
//class Training {
//  constructor(organizer) {
//          this.organizer = organizer;
//      }
//  }
//  class TechTrain extends Training {
//      constructor(organizer) {
//          super(organizer);
//          // this.organizer = 'NG';
//      }
//  }
//  let js = new TechTrain('Mr. Gu');
//  console.log(js.organizer);  // Mr. Gu
/*
class Training {
  organise() {
          console.log('组织培训');
      }
      static getTrainingFounderDetails() {
          console.log("培训主办方详情");
      }
  }
  class techTrain extends Training {
      organise() {
          console.log('组织技术培训');
          super.organise();
      }
      static getTrainingFounderDetails() {
          console.log("技术培训主办方详情");
          super.getTrainingFounderDetails();
      }
  }
  let js = new techTrain();
  js.organise();
  /* Output: 
  Organising techMeet
  Organising Meetup */
  //techTrain.getTrainingFounderDetails();
  /* Output: 
  techMeet Founder Details
  Meetup Founder Details */

const weaponProxy=(name, life_value) => {
    let fn = [
      {name: "54式手枪", value:30},
      {name: "AK47", value:50}, 
      {name:"M4卡宾枪", value:100}
    ]
     return new Proxy(fn, {
      get: function (target, key) {
        for (info of fn) {
          if (info.name === name){
            life_value = life_value - info.value
          }
        }
          return life_value
      }
  });
  };

class Role {
  constructor(username, role, life_value=100, money=15000, weapon='54式手枪'){
    this.username =username;
    this.role = role;
    this.life_value = life_value,
    this.money = money
    this.weapon = weapon
  }
  showStatus() {
    console.log(
      '角色: ' + this.role + 
      ' 用户名：' + this.username + 
      ' 武器:' + this.weapon + 
      ' 生命值: ' + this.life_value)
  }
  gotShot(oppositeUser) {
    console.log(this.username + '中弹了')
    const handlerProxy = weaponProxy(oppositeUser.weapon, this.life_value);
    this.life_value = handlerProxy.life_value
    if (this.life_value <=0) {
      console.log(this.username + '已身亡')
    }
  }
  buyGun(gunName) {
    console.log(this.username + '买了把' + gunName)
    this.weapon = gunName
  }
}

class Police extends Role {
  constructor(username, role='警察'){
    super(username, role)
  }
}

class Gangster extends Role {
  constructor(username, role='匪徒'){
    super(username, role)
  }
}

police = new Police('鲍尔')
gangster = new Gangster('李四')

police.gotShot(gangster)
police.showStatus()
gangster.showStatus()
gangster.buyGun('AK47')
police.buyGun('M4卡宾枪')
gangster.gotShot(police)
gangster.showStatus()