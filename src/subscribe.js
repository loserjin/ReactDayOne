 export default class subscribe{
    constructor() {
        this._pond = [];
    }
    $on(func){
        if(!this._pond.includes[func]){
            this._pond.push(func);
        }
    }
    $emit(...args){
        this._pond.forEach(item=>{
            if(typeof item ==="function"){
                item(...args);
            }
        });
    }
}