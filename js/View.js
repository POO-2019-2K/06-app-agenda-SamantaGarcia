import Schedule from "./Schedule.js";
import Contact from "./Contact.js";

class View{
    constructor(){
        let list = new Schedule(document.querySelector("#scheduleTable"));
    
    
    document.querySelector("#btnAdd").addEventListener("click", () =>{
        let form = document.querySelector("#form");

        if (form.checkValidity() === true) {
            let id = document.querySelector("#category").value;
            let name = document.querySelector("#name").value;
            let lastname = document.querySelector("#lastname").value;
            let birthday = document.querySelector("#birthday").value;
            birthday = birthday.split("-");
            let phone = document.querySelector("#phone").value;

            let objSchedule = {
                id : id,
                name : name,
                lastname : lastname,
                birthday : birthday,
                phone : phone
            };
            let schedule = new Contact(objSchedule);
            list.addContact(schedule);
        }
        form.classList.add("was-validated");
    });
    }
}

let m = new View();