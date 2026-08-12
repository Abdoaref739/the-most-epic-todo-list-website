let sendBtn = document.getElementById("send-button");
let checkbox;
let todoTitle;
let noItemsFoundDiv;
let inputField;
let message;
let trashIcon;
sendBtn.addEventListener("click", function(){
        inputField = document.getElementById("input-field").value;
        if(inputField !== ""){
                trashIcon = document.createElement("i");
                trashIcon.setAttribute("class", "fa-solid fa-trash")
                trashIcon.style.cursor = "pointer";
                noItemsFoundDiv = document.querySelector(".no-item-found-div");
                checkbox = document.createElement("INPUT");
                message = document.createElement("div");
                todoTitle =  document.createElement("span");


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
                confetti({
                        color: ["#21242b", "#1d232b", "#171c22"]
                });
                todoTitle.style.textDecorationLine = "line-through";
        })

                trashIcon.addEventListener("click", function(){
                        parent.style.display = "none";
                })
        }
});

