function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}

function addTodo(){
  const inputElement= document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-dueDate')
  const dueDate = dateInputElement.value;
 
  todoList.push({
    name,
    dueDate
  }
  );  
  inputElement.value = '';
  displayTodo();
  saveToStorage();
 
  
}


function displayTodo(){

  let todoListHTML = '';
  

  
  for(let i = 0 ; i < todoList.length; i++){
    const todoObject = todoList[i];
    
    const {name,dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-todo-button"onclick = "
        todoList.splice(${i}, 1);
        displayTodo();
        saveToStorage();
    "> Delete </button>
    
    `;
    todoListHTML+=html;

  }
  document.querySelector('.js-display').innerHTML = todoListHTML;
}



const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

displayTodo();










