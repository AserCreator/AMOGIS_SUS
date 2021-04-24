window.onload = ()=>{

    let drop_zone = document.querySelectorAll(".box");
    let drag_element = document.querySelectorAll(".item");
    let dragElement = null; 

    //dragstart, dragend, dragenter, dragover, drop
    //Событие с элементамя длоя перетоскиваниа :D

    for(let i = 0; i < drag_element.length; i++){
        drag_element[i].addEventListener("dragstart", function(event){
            console.log("dragstart");
            console.log(event.target);
            dragElement = this;
            this.style.opacity = 0.3; 
            this.style.border = "3px solid red";
        });

        drag_element[i].addEventListener("dragend", function(event){
            console.log("dragend");
            dragElement = null;
            this.style.opacity = 1;
        });
        
    }
    //События над зонами дропа

    for(let k = 0; k < drop_zone.length; k++){
        drop_zone[k].addEventListener('dragover', function(event){
            console.log('dragover');
            event.preventDefault();
        });

        drop_zone[k].addEventListener('dragenter', function(event){
            console.log('dragenter');
        });
        drop_zone[k].addEventListener('drop', function(event){
            console.log('drop');
            this.append(dragElement)
        });
    }






}