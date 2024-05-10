const todoInput = document.getElementById('todo-input')
todoInput.addEventListener('keydown', addItem)

function addItem(e) {
  if(e.key === 'Enter') {
    const item = e.target.value
    const todoList = document.getElementById('todo-list')
    const itemElement = document.createElement('div')
    const cancelElement = document.createElement('span')
    cancelElement.innerText = 'X'
    cancelElement.classList.add('cancel-item')
    itemElement.classList.add('todo-item')
    itemElement.innerHTML = item
    itemElement.appendChild(cancelElement)
    todoList.appendChild(itemElement)
    todoInput.value = ''
    setTodoItemEvent()
    setCancelItemEvent()
    wordSearchBFS('hi hi')
  }
}

function wordSearchBFS(word) {
 const root = document.body
 const queue = [root]
  while(queue.length) {
    const node = queue.pop()

    if(node.innerText.includes(word)) {
      const message = document.createElement('div')
      message.innerText = 'Found matching item!'
      const todoList = document.querySelector('#todo-list')
      if(todoList.firstChild) {
        todoList.insertBefore(message, todoList.firstChild)
      } else {
        todoList.appendChild(message)
      }

      return
    }

    queue.push(...node.children)
  }
 }

function setCancelItemEvent() {
  const cancelButtons = document.querySelectorAll('.cancel-item')
  Array.from(cancelButtons).forEach(cancelButton => {
    cancelButton.addEventListener('click', (e) => {
      const button = event.target
      const item = button.closest('.todo-item')
      if(item) {
        item.style.display = 'none'
      }
    })
  })
}

function setTodoItemEvent() {
  const todoItems = document.querySelectorAll('.todo-item')
  
  todoItems.forEach(item => {
    item.addEventListener('click', handleClickOnTodoItem)
  })
}

function handleClickOnTodoItem(e) {
  const item = e.target
  item.style.textDecoration = 'line-through'
}
