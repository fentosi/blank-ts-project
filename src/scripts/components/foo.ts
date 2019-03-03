import Util from "../utils/util";

export default class Foo implements IFoo {
    util: Util

    value: string;

    constructor(util: Util) {
        this.util = util;
    }

    trimValue(val: string):string {
        this.value = val;
        
        return this.util.trim(val);
    }
}