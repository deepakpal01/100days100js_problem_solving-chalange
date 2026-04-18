class Queue{
    #item = [];
    Enqueue(value){
        return this.#item.unshift(value);
    }
    Dequeue(){
        if(this.#item.length === 0){
            throw new Error("queue is empty plz enter value in queue:");
        }
        return this.#item.shift();
    }
    peek(){
        if(this.#item.length === 0){
            throw new Error("queue is empty plz enter value in queue:");
        }
        return this.#item[0];
    }
    print(){
        if(this.#item.length === 0){
            throw new Error("queue is empty plz enter value in queue:");
        }
        console.log(this.#item)
    }
    isEmpty(){
     return this.#item.length === 0;
        
    }

}
export default Queue;