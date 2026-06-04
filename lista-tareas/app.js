const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

const STORAGE_KEY = 'lista-tareas'

let tasks = []
let nextId = 1

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    tasks = stored ? JSON.parse(stored) : []
  } catch {
    tasks = []
  }
  nextId = tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1
}

function addTask(text) {
  tasks.push({ id: nextId++, text, completed: false })
  saveTasks()
  renderTasks()
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
    saveTasks()
    renderTasks()
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id)
  saveTasks()
  renderTasks()
}

function renderTasks() {
  taskList.innerHTML = ''
  tasks.forEach(task => {
    const li = document.createElement('li')
    li.className = 'task-item' + (task.completed ? ' completed' : '')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed
    checkbox.addEventListener('change', () => toggleTask(task.id))

    const span = document.createElement('span')
    span.className = 'task-text'
    span.textContent = task.text

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = '✕'
    deleteBtn.addEventListener('click', () => deleteTask(task.id))

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)
  })
}

taskForm.addEventListener('submit', e => {
  e.preventDefault()
  const text = taskInput.value.trim()
  if (text === '') return
  addTask(text)
  taskInput.value = ''
})

loadTasks()
renderTasks()
