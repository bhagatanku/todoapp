function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        taskInput.value = "";

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskText));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);

        document.getElementById("taskList").appendChild(li);
    }
}

function updateDate() {
    var dateElement = document.getElementById("date");
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateElement.textContent = formattedDate;
}

// Update the date when the page loads
updateDate();
