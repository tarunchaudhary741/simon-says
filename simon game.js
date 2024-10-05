console.log("kfkahdgf");
let start=document.querySelector('button');
let red=document.querySelector('.red');
    //red.addEventListener("click",function(){console.log(this);});
    let green=document.querySelector('.green');
    let blue=document.querySelector('.blue');
    let yellow=document.querySelector('.yellow');
    
start.addEventListener("click",newgame);
    
let input=[];
let l=1;
let counter=0;
let level=document.querySelector('.heading');
let go=document.querySelector(".gameover");
let h6=document.querySelector("h6");
function newcolor(){
    
    level.innerText=l++;
    let color=[red,green,blue,yellow];
    let x=color[Math.floor(Math.random()*4)];
    flash(x);
    return x;
}
function flash(x){
    x.classList.toggle("clicked");
    setTimeout(()=>x.classList.toggle("clicked"),500);
}
function newgame(){
    l=1;
    level.innerText=l;
    go.style.display="none";
    console.log("New Game Started");
    setTimeout(()=>input.push(newcolor()),250)
    
    red.addEventListener("click",checkvalid);
    green.addEventListener("click",checkvalid);
    blue.addEventListener("click",checkvalid);
    yellow.addEventListener("click",checkvalid);

function gameover(){
    l=1;
    level.innerText=l++;
    input=[];
    
    go.style.display="flex";
    score=`Your score is : ${counter-1}`;
    h6.innerText=score;
    counter=0;
    
    
    red.removeEventListener("click",checkvalid);
    green.removeEventListener("click",checkvalid);
    blue.removeEventListener("click",checkvalid);
    yellow.removeEventListener("click",checkvalid);
}
    
    let pre=0;
    
    let i=0;
    function checkvalid(){
        flash(this);
        counter++;

        console.log(this,input[i],input);
        if(this!=input[i]){
            return gameover();
        }
        i++;
        if(counter===pre+input.length){
            
            pre=counter;
            i=0;
            setTimeout(()=>input.push(newcolor()),1000);
            
            
            
        }
        
    }

}

