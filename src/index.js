document.addEventListener("DOMContentLoaded", () => {  
  const form = document.getElementById("importance_form");
  const descriptionButton = document.querySelector('input[value="Create New Task"]');
  const form_ul = document.getElementById('tasks');
  const allLi = document.querySelectorAll('ul#tasks > li');

  list_color = form.value;

  // Handles List Creation
  descriptionButton.addEventListener('click', function(){
    event.preventDefault();
    newlist()
    sortList()
  });

  function newlist() {
    // Create a new list section
    let newLi = document.createElement('li');
    let liContainer = document.createElement('div');
    let liP_desc = document.createElement('p')
    let liP_user = document.createElement('p')
    const br = document.createElement("br");
    const hr = document.createElement("hr")
    
    // Create a list Item and add a Div tag
    newLi.style.color = form.value;
    newLi.className = "dynamic_list"
    newLi.appendChild(liContainer);

    // Create a Paragraph inside of a div
      // Makes a Description inside of a Paragraph
    liP_user.textContent = `Made By: ${userName()}`;
    liContainer.appendChild(liP_user);
    liP_desc.appendChild(br); //inner Break
      // Makes a Description inside of a Paragraph
    liP_desc.textContent = description();
    liContainer.appendChild(liP_desc);
      // Makes a line after the Lines
    liContainer.appendChild(hr)

    // Add the final Div to the ul
    form_ul.appendChild(newLi);
  }

  function description() {
    let desc = document.getElementById('new-task-description');
    return desc.value;
  }

  function userName(){
    let uName = document.getElementById('new-user-name');
    return uName.value;
  }


});

document.addEventListener('click', function(x){
  const allLi = document.querySelectorAll('ul#tasks > li');
  const taskForm = document.getElementById("create-task-form");
  const deleteButton = document.querySelector('input#delete');


  // Handles List Deletion
  // Create Delete Button
  function createDelete(){
    if (deleteButton == undefined){
      let deleteButton = document.createElement("input");
      deleteButton.setAttribute("type", "button");
      deleteButton.id = "delete";

      
      taskForm.appendChild(deleteButton)
    }
  }

  // List Deletion Logic
  if(x.target && x.target.id == "delete"){
    // Handles List Deletion
    deleteButton.addEventListener('click', function(x){
      event.preventDefault()
      deleteList()
    });
  
    function deleteList(){
      allLi[allLi.length - 1].remove();
    }
  }

  // Empty List Case
  if (allLi.length < 1){
    taskForm.removeChild(deleteButton)
  }
  createDelete()
    
});