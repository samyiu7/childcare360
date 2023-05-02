

export default class Daycare {
	private _organizationName;
	private _address;
	private _capacity;
	private _contactName;
	private _phoneNumber;
	private _email;
	private _packagePlan;

	constructor() {
		this._organizationName = "";
		this._address = "";
		this._capacity = 0;
		this._contactName = "";
		this._phoneNumber = 1234566789;
		this._email = "123@gmail.com";
		this._packagePlan = "Basic";
	}


	get organizationName() {
		return this._organizationName;
	}

	set organizationName(value) {
		this._organizationName = value;
	}

	get address() {
		return this._address;
	}

	set address(value) {
		this._address = value;
	}

	get capacity() {
		return this._capacity;
	}

	set capacity(value) {
		this._capacity = value;
	}

	get contactName() {
		return this._contactName;
	}

	set contactName(value) {
		this._contactName = value;
	}

	get phoneNumber() {
		return this._phoneNumber;
	}

	set phoneNumber(value) {
		this._phoneNumber = value;
	}

	get email() {
		return this._email;
	}

	set email(value) {
		this._email = value;
	}

	get packagePlan() {
		return this._packagePlan;
	}

	set packagePlan(value) {
		this._packagePlan = value;
	}
}