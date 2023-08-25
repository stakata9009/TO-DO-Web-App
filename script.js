var form = document.getElementById("new-task");
var input = document.getElementById("new-task-input");
var tasks = document.getElementById("tasks");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!input.value) {
        alert("Task is empty");
        return;
    }

    var task_el = document.createElement("div");
    task_el.classList.add("task");

    var task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    var task_input_el = document.createElement("input");
    task_input_el.classList.add("text")
    task_input_el.type = "text";
    task_input_el.value = input.value;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    var task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions");

    var task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    var task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    tasks.appendChild(task_el)

    task_edit_el.onclick = function() {
        if (task_edit_el.innerText == "EDIT") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
        } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "EDIT";

        }
    }

    task_delete_el.onclick = function() {
        tasks.removeChild(task_el);
    }
})