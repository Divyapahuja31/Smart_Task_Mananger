document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".add-task");
    // const addSound = document.getElementById("add-sound");
    const removeSound = document.getElementById("remove-sound");

    addButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const quadrant = event.target.closest(".quadrant");
            const input = quadrant.querySelector(".task-input");
            const taskText = input.value.trim();
            if (taskText === "") return;

            const taskList = quadrant.querySelector(".task-list");
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `${taskText} <button class='delete-task'>X</button>`;

            taskList.appendChild(taskItem);
            input.value = "";
            addSound.play();
        });
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-task")) {
            event.target.parentElement.remove();
            removeSound.play();
        }
    });
});
