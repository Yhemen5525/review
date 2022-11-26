(function review(){
    let rating = 0;
    const star1 = document.querySelector(".star1")
    const star2 = document.querySelector(".star2")
    const star3 = document.querySelector(".star3")
    const star4 = document.querySelector(".star4")
    const star5 = document.querySelector(".star5")
    const modalClose = document.querySelector(".close-btn");
    
    modalClose.addEventListener("click",()=>{
        notie.alert({ type: 'success', text: `thanks for your ${rating} rating`, time: 2 }) 
    })
    
    star1.addEventListener("click",()=>{
        rating = 1;
        star1.classList.add("yellow")
        
        star2.classList.remove("yellow")
        star3.classList.remove("yellow")
        star4.classList.remove("yellow")
        star5.classList.remove("yellow")
                    
    })
    
    star2.addEventListener("click",()=>{
        rating = 2;   
        star1.classList.add("yellow")
        star2.classList.add("yellow")
        
        star3.classList.remove("yellow")
        star4.classList.remove("yellow")
        star5.classList.remove("yellow")
                    
    })
    
    star3.addEventListener("click",()=>{
        rating = 3;
        star1.classList.add("yellow")
        star2.classList.add("yellow")
        star3.classList.add("yellow")
        
        star4.classList.remove("yellow")
        star5.classList.remove("yellow")
                    
    })
    
    star4.addEventListener("click",()=>{
        rating = 4;   
        star1.classList.add("yellow")
        star2.classList.add("yellow")
        star3.classList.add("yellow")
        star4.classList.add("yellow")
        
        star5.classList.remove("yellow")
                    
    })
    
    star5.addEventListener("click",()=>{
        rating = 5;
        star1.classList.add("yellow")
        star2.classList.add("yellow")
        star3.classList.add("yellow")
        star4.classList.add("yellow")
        star5.classList.add("yellow")
        
                    
    })
})()

