
// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new task item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button for task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Append list item to the task list
    taskList.appendChild(li);

    // Clear input field after adding
    taskInput.value = '';
}

// Event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
