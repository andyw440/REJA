
console.log('browser js');

function itemTemplate(item){
    return `
         <li
              class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
            >
              <span class="item-text"> ${item.reja}</span>
              <div>
                <button
                  data-id="${item._id}"
                  class="edit-me btn btn-secondary btn-sm mr-1"
                >
                  O'zgartirish
                </button>
                <button
                  data-id="${item._id}"
                  class="delete-me btn btn-danger btn-sm"
                >
                  O'chirish
                </button>
              </div>
            </li>
    `
}

let createField = document.getElementById('create-field')
let form = document.getElementById('create-form')
let itemList = document.getElementById('item-list')


form.addEventListener('submit', (e) => {
e.preventDefault()

axios.post("/create-item", {reja:createField.value})
.then((response) => {
  console.log(response.data);

    itemList.insertAdjacentHTML("beforeend" , itemTemplate(response.data))
    createField.value = ""
    createField.focus()
})
.catch((err) => {
    console.log('iltimos qaytadan harakat qiling.');
})
})







document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-me')){
        if(confirm('Aniq ochirmoqchimisiz ?')){
            axios.post("/delete-item" , {id:e.target.getAttribute("data-id")})
            .then((response) => {
              console.log(response.data);
              
                e.target.parentElement.parentElement.remove()
            })
            .catch((err) => {   
                console.log('iltimos qaytadan harakat qiling.');
                
            })
        }
    }
    // edit oper
    if(e.target.classList.contains("edit-me")) {
      let initialValue = e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
     let userInput = prompt("Yangi o'zgartirish kiriting" , initialValue ) 
     if(userInput){
      axios
      .post("/edit-item", {id:e.target.getAttribute("data-id"), 
        new_input:userInput,
      }).then((response) => {
        console.log(response.data);   
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput      
      })
        .catch((err) => {
          console.log('iltimos qaytadan harakat qiling:');
          
        })
        
      
     }
    }

});

 


document.getElementById("clean-all").addEventListener("click" , () => {
  axios.post("/delete-all" , {delete_all:true}).then(response => {
    alert(response.data.state);
    document.location.reload()
  }).catch(err => {})
})