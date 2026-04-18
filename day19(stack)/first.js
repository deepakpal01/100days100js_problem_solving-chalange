class stack{ 
    constructor(){
        this.item = [];
    }
    push(item){
        this.item.push(item);
    }
    pop(){
        if(this.isEmty()){
            return "stack is emty";
        }
        this.item.pop();
    }
    peek(){
        if(this.isEmty()){
            return "stack is emty";
        }
        return this.item[this.item.length-1];
    }
    isEmty(){
        return this.item.length ===0;
    }
    size(){
        return this.item.length;
    }
    print(){
        console.log(this.item.toString());
    }
}
export default stack;