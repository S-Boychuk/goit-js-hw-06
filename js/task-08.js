const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password
    };

    if (mail && password !== "") {
        console.log(formData);  
        event.currentTarget.reset();
    } else {
        alert("Please fill out all fields of the form");
    };    
}