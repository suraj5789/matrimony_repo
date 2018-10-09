
export class MatCard {
    private _firstName : String;
    private _lastName : String;
    private _gender : String;
    private _description : String;
    private _profilePic : String;
    private _age : Number;
    private _bioData : MatBioData;
    private _address : Address;

    constructor(firstName, lastName, gender, description, profilePic, age, bioData = null, address = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.description = description;
        this.profilePic = profilePic;
        this.age = age;
        this.bioData = bioData;
        this.address = address;
    }

    get firstName () :String {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName () :String {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get gender () :String {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get description () :String {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

    get profilePic () :String {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get age () :Number {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get bioData () :MatBioData {
        return this._bioData;
    }

    set bioData(bioData) {
        this._bioData = bioData;
    }

    get address () :Address {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }
}

export class MatBioData {
    private _dob : Date;
    private _manglik : Boolean;
    private _gotra : String;
    private _occupation : String;
    private _education : String;

    constructor(dob, manglik, gotra, occupation, education) {
        this.dob = dob;
        this.manglik = manglik;
        this.gotra = gotra;
        this.occupation = occupation;
        this.education = education;
    }

    get dob():Date {
        return this._dob;
    }
    set dob(dob: Date) {
        this._dob = dob;
    }

    get manglik() : Boolean {
        return this._manglik;
    }

    set manglik(manglik : Boolean) {
        this._manglik = manglik;
    }

    get gotra() : String {
        return this._gotra;
    }

    set gotra(gotra : String ){
        this._gotra = gotra;
    }

    get education() : String {
        return this._education;
    }

    set education(education : String ){
        this._education = education;
    }

    get occupation() : String {
        return this._occupation;
    }

    set occupation(occupation : String ){
        this._occupation = occupation;
    }
}

export class Address {
    private _address : String;
    private _city : String;
    private _state : String;
    private _country : String;
    private _postCode : Number;

    constructor() {}

    get address() : String {
        return this._address;
    }

    set address(address:String) {
        this._address = address;
    }

    get city() : String {
        return this._city;
    }

    set city(city:String) {
        this._city = city;
    }

    get state() : String {
        return this._state;
    }

    set state(state:String) {
        this._state = state;
    }

    get country() : String {
        return this._country;
    }

    set country(country:String) {
        this._country = country;
    }

    get postCode() : Number {
        return this._postCode;
    }

    set postCode(postCode:Number) {
        this._postCode = postCode;
    }
}