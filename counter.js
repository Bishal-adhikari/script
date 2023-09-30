if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}
        
function hi(){

    let coun = localStorage.getItem('counter');
    coun++;
    document.querySelector('h1').innerHTML = coun;
    localStorage.setItem('counter',coun);
}
document.addEventListener('DOMContentLoaded' , function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = hi;
});