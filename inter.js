
    document.addEventListener('DOMContentLoaded',() => {

        document.querySelector('#submit').disabled = true; 

      document.querySelector('#name').onkeyup =  () => {
        if(document.querySelector('#name').value.length > 0){

            document.querySelector('#submit').disabled = false;
        }
        else{
            document.querySelector('#submit').disabled = true; 
        }
        

      }  

      document.querySelector('form').onsubmit = function (){
        const name = document.querySelector('#name').value ;
        const li = document.createElement('li');
        li.innerHTML = name;
        document.querySelector('#names').append(li);
        document.querySelector('#name').value = '';
        
        document.querySelector('#submit').disabled = true;
        

        return false;
    }
      
        
      

    })