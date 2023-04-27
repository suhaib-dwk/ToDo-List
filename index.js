window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Load the task list from localStorage and populate the DOM
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task) => {
            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el);

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");

            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");

            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerHTML = "Edit";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerHTML = "Delete";

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);

            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

            task_edit_el.addEventListener('click', () => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerHTML = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerHTML = "Edit";
                }
            });

            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);

                // Remove the deleted task item from the tasks array and save it to localStorage
                const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                const index = tasks.indexOf(task);
                if (index !== -1) {
                    tasks.splice(index, 1);
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                }
            });
        });
    };

    // Call the loadTasks function to populate the task list on page load
    loadTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        // Add the new task item to the tasks array and save it to localStorage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerHTML = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);

            // Remove the deleted task item from the tasks array and save it to localStorage
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        });

        input.value = "";
    });
});




// const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//             const index = tasks.indexOf(task);
//             if (index !== -1) {
//                 tasks.splice(index, 1);
//                 localStorage.setItem("tasks", JSON.stringify(tasks));
//             }

// Explain this code

// This code block removes a task from the task list in both the DOM and the localStorage.

// The localStorage object is a global object in web browsers that allows web pages to store key/value pairs in a user's web browser. In this case, the key is "tasks" and the value is a JSON string representing an array of task items.

// The code first retrieves the task list from the localStorage by calling localStorage.getItem("tasks"). If the localStorage does not have a key "tasks" or the value associated with the key is null, then an empty array is assigned to the tasks variable.

// Next, it searches for the index of the task item to be deleted using the indexOf() method of the tasks array. If the task is found in the array (the indexOf() method returns a non-negative index), then it is removed from the array using the splice() method. The splice() method removes an item from an array by specifying its index and the number of items to remove. In this case, it removes 1 item at the index where the task was found.

// Finally, the updated tasks array is converted to a JSON string using JSON.stringify() and stored back in the localStorage using localStorage.setItem(). This ensures that the changes made to the task list are persisted in the localStorage.