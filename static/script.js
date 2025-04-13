document.addEventListener('DOMContentLoaded', () => {
  // Get all elements
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const missionStatus = document.getElementById('missionStatus');

  // Event listeners
  addTaskBtn.addEventListener('click', addTask);

  // Main function
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>🚀 ${taskText}</span>
      <div class="btn-group">
      <button class="complete-btn">✔️ Complete</button>
      <button class="delete-btn">❌ Delete</button>
      </div>`
    ;
    
    taskList.appendChild(li);
    taskInput.value = '';
    
    // Add event listeners to NEW buttons
    li.querySelector('.complete-btn').addEventListener('click', () => {
      li.classList.toggle('completed');
      updateCounter();
    });
    
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
      updateCounter();
    });
    
    updateCounter(); // Update on add
  }

  // Counter function (renamed for clarity)
  function updateCounter() {
    const total = taskList.children.length;
    const completed = document.querySelectorAll('.completed').length;
    
    missionStatus.textContent = 
      total === 0 ? 'No missions yet!' :
      completed === total ? 'All missions complete! 🎉' :
      `${completed}/${total} tasks done`;
  }
});