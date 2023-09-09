function AddTask()
{
    let taskin= document.getElementById("input");
    let tasktxt= taskin.value.toString();
    
    if(tasktxt===" ")
    {
        alert("You must write something!");
        return;
    }


    let tasklst =document.getElementById("list container");
    let taskitem=document.createElement("li");  
    taskitem.innerHTML=`<span> ${tasktxt}</span>

 <button class="delbtn" onclick="deletebtn(this)">del</button>`;
 

    tasklst.appendChild(taskitem);


    taskin.value=" ";

  taskitem.addEventListener("click",function donebutton ( )
  {
  let span=this.querySelector('span');
  
  if(span.style.textDecoration==="line-through")
  {
    span.style.textDecoration='none';
  }
  else
  {
    span.style.textDecoration="line-through";
  }
  });


}

function deletebtn(button)
{
    const tasklst = document.getElementById("list container");
    const taskitem = button.parentElement;
    tasklst.removeChild(taskitem);
}

