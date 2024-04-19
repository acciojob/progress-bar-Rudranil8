// const circles=document.querySelectorAll(".circle");
// const lines=document.querySelectorAll(".line");
// const nextButton= document.querySelector("#next");
// const prevButton= document.querySelector("#prev");

// let cA=1;

// nextButton.addEventListener("click", ()=>{
// 	cA++;
// 	if(cA>circles.length){
// 		cA=circles.length;
// 	}
// 	ui_update();
// });

// prevButton.addEventListener("click", ()=>{
// 	cA--;
// 	if(cA<1){
// 		cA=1;
// 	}
// 	ui_update();
// })

// function ui_update(){
// 	circles.forEach((circle, index)=>{
// 		if(index<cA){
// 			circle.classList.add("active");
// 		}
// 		else
// 		{
// 			circle.classList.remove("active");
// 		}
// 	})
// 	lines.forEach((line, index)=>{
    
//     if(index < currentActive-1){
//         line.classList.add("active")
//     }
//     else{
//         line.classList.remove("active")
//     }

// 	if(cA>1){
// 		prevButton.disabled=false;
// 	}
// }

//ends here


const circles = document.querySelectorAll('.cirlce');
const lines = document.querySelectorAll('.line');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');


let currentActive = 1;

nextButton.addEventListener("click", ()=>{
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    ui_Update()
})


prevButton.addEventListener("click", ()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1;
    }
    ui_Update()
})


// console.log("circles");
function ui_Update(){
   
    circles.forEach((circle, index)=>{
        // console.log(index, currentActive)
        if(index < currentActive){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
   })

   lines.forEach((line, index)=>{
    
    if(index < currentActive-1){
        line.classList.add("active")
    }
    else{
        line.classList.remove("active")
    }
})

   // conditions:

   if(currentActive > 1){
       prevButton.disabled = false;
   }
}