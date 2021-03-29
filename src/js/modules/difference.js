export default class Difference{
    constructor(oldoficcer, newOficer, items){
        this.oldoficcer = document.querySelector(oldoficcer);
        this.newOficer = document.querySelector(newOficer);
        try {
            this.oldItems = this.oldoficcer.querySelectorAll(items);
            this.newItems = this.newOficer.querySelectorAll(items);
        } catch (e) {}
        
        this.oldCounter = 0;
        this.newCounter = 0;
    }
    bindTriggers(container, items, counter ){
        container.querySelector('.plus').addEventListener('click', ()=>{
            if (counter !== items.length -2){
                items[counter].style.display = 'flex';
                counter ++;
            } else {
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
            }
        });
    }
    hideItems(items){
        items.forEach((item, i, arr )=> {
            if (i !== arr.length - 1){
                item.style.display = 'none';
            }
        }); 
    }
    init(){
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldoficcer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOficer, this.newItems, this.newCounter);
        } catch (e) {
            
        }
        
    }
}