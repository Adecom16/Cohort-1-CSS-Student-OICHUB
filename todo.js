function addTask() {
    // Get the task input
    const task = document.getElementById('taskInput').value;
  
    // Check if the input is empty
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
  
    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = task;
  
    // Add the list item to the task list (ul)
    document.getElementById('taskList').appendChild(li);
  
    // Clear the input field
    // document.getElementById('taskInput').value = "";
  
    // Add a click event to remove the task when it's clicked
    li.onclick = function() {
      this.remove();
    };
  }
  