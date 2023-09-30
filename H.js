document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#submit" ).addEventListener('click',function(){
        const name = document.querySelector("#name").value;
        alert(`Hello ${name}`);
    });

});

