class Node {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class LinkedList {
    constructor(data = null) {
        this.HEAD = new Node(data);
    }
    append(data) {
        let cur = this.HEAD.next
        while (cur) {
            if (cur.next == null){
                break
            }
            cur = cur.next
        } 
        cur.next = new Node(data);; 
    } 
    prepend(data) {
        let newData = new Node(data);
        let cur = this.HEAD;
        this.HEAD = newData;
        this.HEAD.next = cur;
    }
    size() {
        let cur = this.HEAD.next;
        
        if (!cur) return 0; 
        
        let count = 1; 
        while (cur) {
            if (cur.next == null) {
                count++;
                break
            }
            cur = cur.next; 
            count++; 
        }
        return count; 
    }
    
    head() {
        return this.HEAD.data; 
    }
    
    tail() {
        let cur = this.HEAD;
        
        while (cur) {
            if (cur.next == null) break;
            cur = cur.next; 
        }
        return cur.data; 
    }
    at(index) {
        let cur = this.HEAD;
        if (index == 0) return this.HEAD.data; 
        for (let i = 0; i < index; i++) {
            cur = cur.next; 
        } 
        return cur.data;
    }
    pop() {
        let cur = this.HEAD; 
        while (cur) {
            if (cur.next == null) break;
            cur = cur.next; 
        }
        delete cur.data; 
    }
    contains(data) {
       let cur = this.HEAD;
       while (cur) {
           if (cur.data == data) return true; 
           cur = cur.next
       }
        return false;
    }
    find(data) {
        let count = 0; 
        let cur = this.HEAD; 
        while (cur) {
            if (cur.data == data) return count; 
            if (cur.next == null) return null;
            count++; 
            cur = cur.next; 
        }
    }
    toString() {
        let cur = this.HEAD; 
        let output = "";
        while (cur) {
            if (cur.next == null) {
                output += `( ${cur.data} ) -> null`;
            } else {
                output += `( ${cur.data} ) -> `;
            }
            cur = cur.next;
        }
        return output;
    }
    // in progress
    insertAt(data, index) {
        if(!this.HEAD) return; 

        if (index == 0) {
            let temp = this.HEAD; 
            this.HEAD = new Node(data)
            this.HEAD.next = temp;
            return;
        }

        let cur = this.HEAD; 
        let newNode = new Node(data); 
        let previous;
        
        for (let i=0; i < index; i++) {
            if (cur.next == null) {
                cur.next = newNode 
                return;
            }
            previous = cur;
            cur = cur.next;
        }

        previous.next = newNode;  
        newNode.next = cur; 
        return;
    }
    // in progress
    removeAt(index) {
        // update the next node
        if (index == 0) {
            this.HEAD = this.HEAD.next; 
            return;
        }
        
        let cur = this.HEAD; 
        let previous;
        
        for (let i = 0; i < index; i++) {
            if (cur.next == null) {
                previous.next = null;
                delete cur.data;
                delete cur.next;
                return; 
            }
            previous = cur; 
            cur = cur.next 
        }
        previous.next = cur.next; 
        delete cur.data, cur.next; 
        return;
    }
}

