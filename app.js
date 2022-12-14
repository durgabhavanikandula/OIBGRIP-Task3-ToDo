document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter task name!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current = document.querySelectorAll(".delete");
        for(var i=0; i<current.length; i++){
            current[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
