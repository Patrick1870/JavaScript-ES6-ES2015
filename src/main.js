"use strict"

//var a = 'test1';
//let b = 'test2';

/*console.log(a);
console.log(b);

function testVar() {
	var a = 30;
	if(true) {
		var a = 50;
		console.log(a);
	}

	console.log(a);
}

testVar();
//50

function testLet() {
	let a = 30;
	if(true) {
		let a = 50;
		console.log(a);
	}

	console.log(a);
}

testLet();*/
//50
//30

//colors cant be changed, they can be pushed but not changed array to a e.g. string
/*const colors = [];

colors.push('red');
colors.push('blue');

colors = "green";

console.log(colors);*/


class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	// you dont have to create new user if you want use static function
	static countUsers() {
		console.log('there are 50 users');
	}

	register() {
		console.log(this.username + ' is now registered');
	}
}

// create new user
let bob = new User('bob', 'bob@bobby.com', 'encrypted_password');

// now it's your instance of User class so we can use User class methods/functions
bob.register();


User.countUsers();


class Member extends User {
	constructor(username, email, password, memberPackage) {
		super(username, email, password); // initialize props from User
		this.package = memberPackage;
	}

	getPackage() {
		console.log(this.username + ' is subscribed to the '+ this.package +' package')
	}
}

let mike = new Member('mike', 'mike@mike.com', 'passwd', 'Standard');

mike.getPackage();
mike.register();

let name = 'John';

const makeUppercase = (word) => {
	return word.toUpperCase();
}

let template = `<h1>${makeUppercase('Hello')} ${name}</h1>
<p>This is a simple template.</p>`;

document.getElementById('template').innerHTML = template;



// New String & Number Methods
let theString = 'Hello, my name is Bob';

// startsWith();
// endsWith();
// includes();

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('Bob'));
console.log(theString.includes('name'));

// Number methods

// Hexidecimal
console.log(0xFF); // prints 255

// Binary
console.log(0b0101);

// Octal
console.log(0o540);

console.log(Number.isFinite(3)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isNaN(1)); // false

console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(3)); // true


// Default Params & Spread Operator
function greet(greeting = 'hello bob') {
	console.log(greeting);
}

greet();


// Spread ...

let args = [1,2,3];
let args1 = [1,2,3,5,67,8,8597,];

function test() {
	console.log(args+ ', and ' +args1);
}

// old version
// test.apply(null, args);

test(...args);


test(...args, ...args1);










