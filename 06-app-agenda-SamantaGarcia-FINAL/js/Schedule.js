import Contact from "./Contact.js"

export default class Schedule{
    constructor(scheduleTable){
        this.scheduleTable = scheduleTable;
        this._contacts = [];
        
        this._initTable();
        
        
    }

    _initTable(){
        //localStorage.removeItem("Contacts");
        
        var lsContacts = JSON.parse(localStorage.getItem("Contacts"));
        if (lsContacts === null) {
            return;
        }
        lsContacts.forEach((e, index) =>{
            e.birthday = new Date (e.birthday);
            this._showInTable(new Contact(e));
        });
        console.log(lsContacts);

        
    }

    _sortContacts(a, b){
        
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
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              
              Toast.fire({
                type: 'error',
                title: 'This phone number is already registered'
              })
            return;
        }
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'success',
            title: 'Registered successfully'
          })
          this._showInTable(contact);
        localStorage.setItem("Contacts", JSON.stringify(this._contacts));
    
        
    }

    _showInTable(contact){

        localStorage.setItem("current", contact.id);
        let idCategory= localStorage.getItem("current");
        if (contact.id === idCategory) {           
        
        let row = this.scheduleTable.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellLastname = row.insertCell(1);
        let cellBirthday = row.insertCell(2);
        let cellAge = row.insertCell(3);
        let cellPhone = row.insertCell(4);
        row.insertCell(5);

        cellName.innerHTML = contact.name;
        cellLastname.innerHTML = contact.lastname;
        cellBirthday.innerHTML = contact.getBirthAsString();
        cellAge.innerHTML = contact.getAge();
        cellPhone.innerHTML = contact.phone;
        this._addButtons(row, contact);
        // this._contacts.sort(function (a, b){   
        // console.log(ageC);         
        //     return (a.birthday - b.birthday)
        // })
    }
        let objSchedule = {
            id : contact.id,
            name : contact.name,
            lastname : contact.lastname,
            birthday : contact.birthday,
            phone : contact.phone
        };
        this._contacts.push(objSchedule);

        // this._contacts.sort(function (a, b) {
        //     return a[name] < b[name];
        //  });
        this._contacts.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.birthday) - new Date(a.birthday);
          });
        
    }

    _addButtons(row, contact){
        let iconDel = document.createElement("span");
        iconDel.className = "fa fa-user-times";
      let btnDelete = document.createElement("button");
      btnDelete.type = "button";
      btnDelete.appendChild(iconDel);
      btnDelete.className = "btn btn-outline-danger";
      btnDelete.addEventListener("click", () => { 
       this._deleteRow(row, contact); //llamando al metodo de editar
      }); 

      row.cells[5].appendChild(btnDelete);
    }

    _deleteRow(row, contact){
        this._contacts.splice(contact, 1);
        row.innerHTML = ""; 
        localStorage.setItem("Contacts", JSON.stringify(this._contacts));
        console.log(this._contacts);  
       
        return;  
    }
}

 
