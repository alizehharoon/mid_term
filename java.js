const form = document.getElementById('toDoList');
const input = document.getElementById('input');
const todosList = document.getElementById('todos');
const addButton = document.getElementById('new_btn');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
});
addButton.addEventListener('click', function () {
    const taskText = input.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskTextSpan.style.textDecoration = 'line-through';
            } else {
                taskTextSpan.style.textDecoration = 'none';
            }
        });

        editButton.addEventListener('click', function () {
            const updatedText = prompt('Edit the task:', taskTextSpan.textContent);
            if (updatedText !== null) {
                taskTextSpan.textContent = updatedText || taskTextSpan.textContent;
            }
        });

        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        todosList.appendChild(taskItem);
        input.value = '';
    }
});
