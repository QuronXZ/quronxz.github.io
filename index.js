let finalGoal=0,currentWordCount=0;
document.addEventListener("DOMContentLoaded",()=>{
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    updateValue();
})

function updateValue (){
    
    
    let mainarea = document.getElementById("main");
    if (mainarea!=null){
        mainarea.addEventListener("input", e=>{
            let value = e.target.value;
            let tokens = value.split(/[\s\n]/g).filter(el => el.trim().length > 0);
            currentWordCount = tokens.length;
            if ((finalGoal - currentWordCount) <= 0){
                document.getElementById("remainingArea").innerText="You have completed your goal!!";
                goalCompleted  = true;
                if(currentWordCount > finalGoal){
                    document.getElementById("bonusArea").style.display="block";
                    document.getElementById("bonusword").innerText = currentWordCount -finalGoal;
                }else{
                    document.getElementById("bonusArea").style.display="none";
                }
            }else{
                goalCompleted = false;
                document.getElementById("bonusArea").style.display="none";
                document.getElementById("remainingArea").innerHTML = `Remaining count: <span id="remainingcount">${finalGoal - currentWordCount}</span>`;
            }
        })
    }
    
}
function editGoal(){
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

function setGoal(){
    const inputbox = document.getElementById("goal");
    finalGoal = Number.parseInt(inputbox.value);
    if (finalGoal < 1 || finalGoal > 10000){
        alert("goal should be between 10 and 10000 words")
        return;
    }
    const dialog = document.querySelector("dialog");
    dialog.close();
    document.getElementById("finalvalue").innerText = inputbox.value;
    document.getElementById("remainingcount").innerText = finalGoal-currentWordCount;
    updateValue();
}