const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];
displayTodo();
function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',() => {
    addTodo();
  })


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
  
  todoList.forEach((todoObject,index)=>{{
    const {name,dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-todo-button js-delete-todo-button"> Delete </button>
    `;
    todoListHTML+=html;
    }
  })
    document.querySelector('.js-display').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').
    forEach((deleteButton,index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        displayTodo();
        saveToStorage();
        })
    })  
  //displayTodo();
}