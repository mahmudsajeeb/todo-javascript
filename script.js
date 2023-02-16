let count = 0;
document.getElementById("input-btn").addEventListener("click",function(){
  count +=1;
  const inputValue = document.getElementById("input-value").value;
  

  //content-container

  const parent = document.getElementById("content-container");

  const tr = document.createElement("tr");
  tr.innerHTML =`
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
    <button class='btn btn-danger deletebtn'>Delete</button>
    <button class='btn btn-primary'>Done</button>
    </td>
  `
  parent.appendChild(tr);
  document.getElementById("input-value").value = "";

  // delete element from table
  const deleteElement = document.querySelectorAll(".deletebtn");
for(const value of deleteElement){
  value.addEventListener("click", function(e){
      e.target.parentNode.parentNode.style.display = "none";
      //e.target.parentNode.parentNode.style.display = "none";
  })
}
// clear all element 
document.getElementById("clear-btn").addEventListener("click", function(e){
  e.target.parentNode.style.display ="none"
})
})