import Contact from "./Contact.js"

export default class Schedule{
    constructor(scheduleTable){
        this.scheduleTable = scheduleTable;
        this._contacts = [];

        this._initTable();
    }

    _initTable(){
        let lsContacts = JSON.parse(localStorage.getItem("Contacts"));
        if (lsContacts === null) {
            return;
        }
        lsContacts.forEach((e, index) =>{
            e.birthday = new Date (e.birthday);
            this._addTable(new Contact(e));
        });
    }

    _showInTable(contact){
        let row = this.scheduleTable.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellLastname = row.insertCell(1);
        let cellBirthday = row.insertCell(2);
        let cellPhone = row.insertCell(3);
        row.insertCell(4);

        cellName.innerHTML = contact.name;
        cellLastname.innerHTML = contact.lastname;
        cellBirthday.innerHTML = contact.getBirthAsString();
        cellPhone.innerHTML = contact.phone;

        let objSchedule = {
            id : id,
            name : schedule.name,
            lastname : schedule.lastname,
            birthday : schedule.birthday,
            phone : schedule.phone
        };
        this._contacts.push(objSchedule);
       // this._addButtons(row, contact);
    }

    _findPhoneNumber(phone){
        let find = -1;
        this._contacts.forEach((e, index) => {
            if (e.phone === phone) {
                find = index;
                return;
            }
        });
        return find;
    }

    addContact(contact){
        let found = this._findPhoneNumber(contact.phone);
        if (found >=0) {
            swal.fire({
                type: "error",
                title: "error",
                text: "El contacto ya esta registrado"
            });
            return;
        }
        this._showInTable(contact);
        localStorage.setItem("Contacts", JSON.parse(this._contacts));
    }
}