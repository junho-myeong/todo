let inputbox = document.querySelector('.inputbox');
let buttonbox = document.querySelector('.buttonbox');
let list = document.querySelector('.list');
let e1 = document.getElementsByTagName('li');


// now we will create a function that will allow us to add elemnet on button click
buttonbox.addEventListener('click',() =>{
  let txt = inputbox.value;
  if ( txt === ""){
    alert('you must write someting')
  }else{
    let li = document.createElement('li');
    li.innerHTML =txt;
    list.insertBefore(li, list.childNodes[0]);
    inputbox.value="";
  }
})
inputbox.addEventListener('keypress',function(e) {
  let txt = inputbox.value;
  if(e.key === 'Enter'){
    if ( txt === ""){
      alert('you must write someting')
    }else{
      let li = document.createElement('li');
      li.innerHTML =txt;
      list.insertBefore(li, list.childNodes[0]);
      inputbox.value="";
    }
    }
})


// now let write the function that will aloow us to mark the done subjet
list.addEventListener('click',e=>{
  if(e.target.tagName =='LI'){
    e.target.classList.toggle('checked');
  }
})
