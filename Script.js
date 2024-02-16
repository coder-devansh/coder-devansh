let userscore=0;
let compscore=0;


const msg=document.querySelector("#msg")
const gencomputerchoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
};
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw play again!"
    
};
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");
const showwinner=(userwin)=>{
    if(userwin)
    {
        userscore++;
        userScorepara.innerText=userscore;
        console.log("You win");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
     
      
    }
    else{
        console.log("You loose");
        msg.innerText="You loose!";
        msg.style.backgroundColor="red";
        
        compscore++;
        compScorepara.innerText=compscore;
    }

};

const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compchoice=gencomputerchoice();
    console.log("computerchoice=",compchoice);
    if(userchoice===compchoice)
    {
        drawgame();

    }
    else{
        let userwin=true;
        if(userchoice==="Paper")
        {
            userwin=compchoice==="Scissor"?false:true;
        }
        else if(userchoice==="Scissor")
            {
            userwin=compchoice==="Rock"?false:true;

            
        }
        else if(userchoice==="Rock")
        {
            userwin=compchoice==="Paper"?false:true;
        }
        showwinner(userwin);
        

    }



}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    })
})
