document.addEventListener("DOMContentLoaded", ()=>{
    const list = document.querySelector('.cover');
    const forms = document.forms;
    const addForm = forms['text-box']
    
    // function to handle checkbox//
    function handleCheckBox(event){
        if(event.target.checked){
            event.target.parentElement.remove();
        }
    }

    // select check-boxes with the id checkbox//
    const checkbox = document.querySelector('#checkbox');

    // add event listener to all checkboxex//
    checkbox.forEach(checkbox=> {
        checkbox.addEventListener('change', handleCheckBox)
    });


    // to add items//
    addForm.addEventListener('submit',(e) =>{
        e.preventDefault();
    })
 




})