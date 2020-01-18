var inputData = document.querySelector("input[type = 'text']");
var ulList = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");


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

inputData.addEventListener ('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var liNew = document.createElement("li");
        var spanNew = document.createElement("span");
        spanNew.innerHTML = 'Удалить';

        var newTodo = this.value;
        this.value = " ";
        ulList.appendChild(liNew).append(spanNew, newTodo);

        deleteTodo();
    }
})



saveBtn.addEventListener("click", function(){
    localStorage.setItem('todoList',ulList.innerHTML);  
})

clearBtn.addEventListener("click", function(){
    ulList.innerHTML = "";
    localStorage.setItem('todoList',ulList.innerHTML); 
})

deleteTodo();

loadTodo();