let sendBtn = document.getElementById("send-button");
let tasksCount = 0;
let addedTasksCount;
let checkedTasksCount;
sendBtn.addEventListener("click", function(){
        let inputField = document.getElementById("input-field").value;
        if(inputField !== ""){
                let trashIcon = document.createElement("i");
                trashIcon.setAttribute("class", "fa-solid fa-trash")
                trashIcon.style.cursor = "pointer";
                let noItemsFoundDiv = document.querySelector(".no-item-found-div");
                let checkbox = document.createElement("INPUT");
                let message = document.createElement("div");
                let todoTitle =  document.createElement("span");


                checkbox.setAttribute("type", "checkbox");
                message.classList.add("todo-item-div");
                todoTitle.classList.add("todo-title");
                checkbox.classList.add("checkbox");
                
                noItemsFoundDiv.style.display = "none";
                message.style.marginTop = "30px";
                document.querySelector(".history-container").appendChild(message);
                todoTitle.textContent = inputField;
                inputField = document.getElementById("input-field").value = "";
                message.appendChild(todoTitle);
                message.appendChild(checkbox);
                message.appendChild(trashIcon);



                checkbox.addEventListener("click", function(){
                        checkedTasksCount = tasksCount - 1;
                        confetti({
                                color: ["#21242b", "#1d232b", "#171c22"]
                        });
                        todoTitle.style.textDecorationLine = "line-through";
                        checkbox.disabled = true;
        })
                trashIcon.addEventListener("click", function(){
                        message.remove();
                })
                tasksCount += 1;
                
        }
});
        setInterval(() =>{
        let completionBar = document.getElementById("completion-bar");
        let completionNumber = document.getElementById("completion-percentage");
        let completionPercentile = Math.floor((checkedTasksCount / tasksCount) * 100);
        completionBar.style.width = `${completionPercentile}%`;
        completionNumber.textContent = `${completionPercentile}%`;
        
        }, 1000);


