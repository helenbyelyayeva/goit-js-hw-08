import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name ="email"]');
const textareaMes = document.querySelector('[name ="message"]');
inputEmail.setAttribute('id', 'email');
textareaMes.setAttribute('id', 'message');


filledForm();


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


let dataStorage = {};


function onFormInput(event) {
   event.preventDefault();
  
   const name = event.target;
   const value = event.target.value;
   const attributeName = name.getAttribute("id");
   if (attributeName === 'email') {
        dataStorage.email = value;
   } else {
       dataStorage.message = value;
   }
   const userData = JSON.stringify(dataStorage);
   localStorage.setItem('feedback-form-state', userData);
 
}


function onFormSubmit(event) {
   event.preventDefault();
   event.currentTarget.reset();
   const savedData = localStorage.getItem('feedback-form-state');
   const parsedSavedData = JSON.parse(savedData);
   console.log("email:", parsedSavedData.email);
   console.log("message", parsedSavedData.message);
   localStorage.removeItem('feedback-form-state');
}


function filledForm() {
   const savedData = localStorage.getItem('feedback-form-state');
   if (savedData) {
       const parsedSavedData = JSON.parse(savedData);
      
       inputEmail.value = parsedSavedData.email;
      
       textareaMes.value = parsedSavedData.message;
      if(parsedSavedData.email === undefined){
       inputEmail.value = ''; 
       } if (parsedSavedData.message === undefined) {
           textareaMes.value = '';
   }
   }

}

