
document.addEventListener('DOMContentLoaded',() =>{

    document.querySelectorAll('button').forEach((button) =>{
        button.onclick = function(){
            document.querySelector('#helo').style.color = button.dataset.color;
        }
        
    })
});

