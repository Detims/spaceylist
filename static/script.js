document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const missionStatus = document.getElementById("missionStatus");

  // Event Listeners
  addTaskBtn.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Mission description required!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span>🚀 ${taskText}</span>
      <button class="complete-btn">✔️ Mission Complete</button>
      <button class="delete-btn">❌ Abort</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";

    // Add event listeners to new buttons
    li.querySelector(".complete-btn").addEventListener("click", () => 
      li.classList.toggle("completed")
    );
    li.querySelector(".delete-btn").addEventListener("click", () => 
      li.remove()
    );

    updateMissionStatus();
  }

  function updateMissionStatus() {
    const totalTasks = taskList.children.length;
    const completedTasks = document.querySelectorAll(".completed").length;
    missionStatus.textContent = 
      totalTasks === 0 ? "No tasks yet, astronaut!" :
      completedTasks === totalTasks ? "All missions accomplished! 🌟" :
      `${completedTasks}/${totalTasks} tasks completed. Keep going!`;
  }
});