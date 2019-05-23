export default class Contact {
    constructor(schedule){
        this._name = schedule.name;
        this._lastname = schedule.lastname;
        this._birthday = new Date(schedule.birthday);
        this._phone = schedule.phone;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }

    get name(){
        return this._name;
    }
    get lastname(){
        return this._lastname;
    }
    get birthday(){
        return this._birthday;
    }
    get phone(){
        return this._phone;
    }

    _getNumberAs2Digits(number){
        if (number < 10){
        //se convierte en string
        return "0"+number;
        } 
        return number;
    }
    //Fechas para la edicion de estos
    getBirthForDate(){
        //descomposicion
        let {birthday} = this;
        let date = birthday.getFullYear() + "-" + 
        this._getNumberAs2Digits(birthday.getMonth()+1) + "-" +
        this._getNumberAs2Digits(birthday.getDate());
        return date;
    }
    //Fecha para cumpleaños 
    getFechaBirthAsString() {
        let date =
        this._birthday.getDate() +
        "/" +
        this._months[this._birthday.getMonth()] +
        "/" +
        this._birthday.getFullYear();
    
        return date;
    }
    getAge() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._birthday;
        let age = Math.trunc(differenceMs / oneYear);
    
        return age;
    }
}