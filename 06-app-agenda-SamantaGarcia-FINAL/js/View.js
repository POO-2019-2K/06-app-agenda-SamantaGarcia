import Schedule from "./Schedule.js";
import Contact from "./Contact.js";

class View{
    constructor(){
        let list = new Schedule(document.querySelector("#scheduleTable"));
    
    
    document.querySelector("#btnAdd").addEventListener("click", () =>{
        let form = document.querySelector("#form");
        if (form.checkValidity() === true) {
            let id = document.querySelector("#id").value;
            let name = document.querySelector("#name").value;
            let lastname = document.querySelector("#lastname").value;
            let sBirthday = document.querySelector("#birthday").value;
            sBirthday = sBirthday.split("-");
            let birthday = new Date(sBirthday[0], sBirthday[1] - 1, sBirthday[2]);
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