let theInput = document.querySelector(".add-task .add-value");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".task-state .tasks-count");
let tasksCompleted = document.querySelector(".task-state .tasks-complated");


window.onload = function() {
    theInput.focus();
};

theAddButton.onclick = function() {

    if (theInput.value === "") {
        alert("You Have To Fill It Out ")

    } else {
        let noTasksMsg = document.querySelector(".no-tasks-mesege");
        if (document.body.contains(document.querySelector(".no-tasks-mesege"))) {
            noTasksMsg.remove();
        }

        let mainSpan = document.createElement("span");
        let delateElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let delateText = document.createTextNode("Delate");

        delateElement.appendChild(delateText);
        mainSpan.appendChild(text);

        mainSpan.className = "task-box";
        delateElement.className = "delate";

        mainSpan.appendChild(delateElement);
        tasksContainer.appendChild(mainSpan);

        theInput.value = '';
        theInput.focus();

        calculateTasks();

    }
};

document.addEventListener("click", function(e) {
    if (e.target.className === "delate") {
        e.target.parentNode.remove();

        if (tasksContainer.childElementCount === 0) {
            createNoTasks();
        }
    }

    if (e.target.classList.contains('task-box')) {
        e.target.classList.toggle("finished");

    }

    calculateTasks();
});

function createNoTasks() {
    let msgSpan = document.createElement("span");
    let textSpan = document.createTextNode("No Tasks To Show");
    msgSpan.appendChild(textSpan);

    msgSpan.className = 'no-tasks-message';
    tasksContainer.appendChild(msgSpan);
}





function calculateTasks() {

    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box span").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished span").length;
}