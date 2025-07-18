function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function (e) {
    e.stopPropagation(); // prevent toggle complete
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
