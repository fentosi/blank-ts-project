export default class Util {
    trim(value:string) {
        return this.toStr(value).trim();
    }    

    toStr(value:string) {
        return value.toString();
    }
}