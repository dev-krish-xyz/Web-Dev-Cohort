const { useCallback } = require("react");

    const inputbtn = document.getElementById("todo-input");
    const addbtn = document.getElementById("add-btn");
    const licontainer = document.getElementById("item-container");
    const acbtn = document.getElementById('acbtn');

    function updateCounter(){
      let total = document.querySelectorAll("#item-container li").length;
      let completed = document.querySelectorAll("input[type='checkbox']:checked").length;
      let counter = document.getElementById('left-box');
      counter.innerText = `${completed}/${total} Tasks completed`;
    }
    function additem() {
      const value = inputbtn.value.trim();
      if(value === ''){
        return;
      }
      const li = document.createElement("li");
      li.className = "all-list-style";
      
      const taskWrapper = document.createElement('span');
      taskWrapper.className = 'task-wrapper';
      
      const taskText = document.createElement('span');
      taskText.innerText = value;
      taskText.className= 'task-text';
      
      const checkbtn = document.createElement('input');
      checkbtn.type='checkbox';
      checkbtn.className='check-btn';
      checkbtn.addEventListener('change', ()=>{
        if(checkbtn.checked){
          li.style.background='linear-gradient(to right,rgba(180, 246, 180, 0.77), rgba(104, 247, 104, 0.78))'}
          else{
            li.style.background='';  // reset to default
          }
          updateCounter();
      });
      
      taskWrapper.appendChild(checkbtn);
      taskWrapper.appendChild(taskText);
      
      
      const delbtn = document.createElement("button");
      delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      delbtn.className = "delete-btn-style";
      delbtn.addEventListener("click", () => {
        li.remove();
        updateCounter();
      });
      
      if (value !== "") {
        li.appendChild(taskWrapper);
        li.appendChild(delbtn);
        licontainer.appendChild(li);
        inputbtn.value = "";
      }
      updateCounter();
      
    }

    addbtn.addEventListener('click',additem);

    inputbtn.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        additem();
        updateCounter();
      }
    });

    acbtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to delete all tasks?")) {
        licontainer.innerHTML = "";
        updateCounter();
      }
    });


 



  
