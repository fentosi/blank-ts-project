import Util from "../utils/util";
import Foo from './foo';

export default class Bar extends Foo implements IBar {
    value: string;
    constructor(util: Util) {
        super(util);
    }

    logValue(value:string):void {
        this.value = value;

        console.log(this.trimValue(value));
    }
}