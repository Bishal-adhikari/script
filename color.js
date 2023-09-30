
document.addEventListener('DOMContentLoaded',() =>{

    document.querySelector('select').onchange = function ()   {
        document.querySelector('#helo').style.color = this.value;  
    }

});