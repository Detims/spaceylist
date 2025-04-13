function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please enter a mission first!"); // Validation
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span>🚀 ${taskText}</span>
      <button class="complete-btn">✔️ Mission Complete</button>
      <button class="delete-btn">❌ Abort</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
    updateMissionStatus();
  
    // Add event listeners to NEW buttons
    li.querySelector(".complete-btn").addEventListener("click", () => completeTask(li));
    li.querySelector(".delete-btn").addEventListener("click", () => removeTask(li));
  }
  
  // Updated helper functions
  function completeTask(taskItem) {
    taskItem.classList.toggle("completed");
    updateMissionStatus();
  }
  
  function removeTask(taskItem) {
    taskItem.remove();
    updateMissionStatus();
  }

//   // Save tasks
// function saveTasks() {
//     const tasks = Array.from(taskList.children).map(task => ({
//       text: task.querySelector("span").textContent.replace("🚀 ", ""),
//       completed: task.classList.contains("completed")
//     }));
//     localStorage.setItem("spaceTasks", JSON.stringify(tasks));
//   }
  
//   // Load tasks on startup
//   window.addEventListener("load", () => {
//     const savedTasks = JSON.parse(localStorage.getItem("spaceTasks")) || [];
//     savedTasks.forEach(task => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <span>🚀 ${task.text}</span>
//         <button class="complete-btn">✔️ Mission Complete</button>
//         <button class="delete-btn">❌ Abort</button>
//       `;
//       if (task.completed) li.classList.add("completed");
//       taskList.appendChild(li);
//     });
//     updateMissionStatus();
//   });
  
//   // Update saveTasks() calls in addTask/completeTask/removeTask