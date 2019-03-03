import Util from './utils/util';
import Foo from './components/foo';
import Bar from './components/bar';

const util = new Util;
const foo = new Foo(util);
const bar = new Bar(util);

let newDate = foo.trimValue(new Date().toString());
console.log(newDate);

bar.logValue("something");