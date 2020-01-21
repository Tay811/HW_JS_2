let inputData = document.querySelector("input[type = 'text']");
let ulList = document.querySelector("ul");
let spans = document.getElementsByTagName("span");
let saveBtn = document.getElementById("save");
let clearBtn = document.getElementById("clear");
let liList = document.getElementsByTagName("li");
let data = new Date();
let month = new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");
let  modal = document.getElementById('modal');
let btn = document.getElementById('info');
let close = document.getElementsByClassName("close")[0];


function deleteTodo(){
    for(let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('todoList')){
        ulList.innerHTML = localStorage.getItem('todoList');
    }

    deleteTodo();
}

//addEventListener - обработчик события

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        let liNew = document.createElement("li");
        let spanNew = document.createElement("span");
        spanNew.innerHTML = 'УДАЛИТЬ';

        let dateNew = (" " +data.getDate()+ " " + month[data.getMonth()]
        + " " + data.getFullYear() + " г.");

        let newTodo = this.value;
        this.value = " ";

    if(newTodo.length >= 0 && newTodo !== " "){
        ulList.appendChild(liNew).append(spanNew, newTodo, dateNew);
        }    
        deleteTodo();
        LineTrough();
    }
})


saveBtn.addEventListener("click", function(){
    localStorage.setItem('todoList',ulList.innerHTML);  
})

clearBtn.addEventListener("click", function(){
    ulList.innerHTML = " ";
    localStorage.setItem('todoList',ulList.innerHTML); 
})


btn.onclick = function (){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function (event){
    if(event.target == modal){
        this.modal.style.display = "none";
    }
}


btn.onclick = function (){
    modal.style.display = "block";
}

function LineTrough(){
    for(let li of liList){
        li.addEventListener('click', function(){
            li.style.textDecoration = "line-through";
            span.style.textDecoration = "none";
        })
    }
}

deleteTodo();
loadTodo();
LineTrough();