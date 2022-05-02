
// # Main Menu

// ## Function Cliboard
function clip_board(copy_text){
	//Create Element
	const Temporary = document.createElement('textarea');
	//Set String
	Temporary.value = copy_text;
	//Place in Temporary Element
	document.body.appendChild(Temporary);
	//Select Text
	Temporary.select();
	//Copy Text to Clipboard
	document.execCommand('copy');
	//Remove the Temporary Element
	document.body.removeChild(Temporary);
}

// ## Function Salt Word Generate
function salt_word(){
	let result = '';
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let charactersLength = 26;
	
	for (let i = 0; i < 10; i++){
		result += alphabet.charAt(Math.floor(Math.random() * 26));
	}
	return result;
}

// ## Button Generate
function generate_hash(){
	let key_str = document.getElementById("keyword").value;
	let salt_str = document.getElementById("salt").value;

	//Keyword String + Salt String
	key_str += salt_str;

	let SHA256 = new Hashes.SHA256().hex(key_str);
	let SHA512 = new Hashes.SHA512().hex(key_str);
	let HASHMD5 = new Hashes.MD5().hex(key_str);

	document.getElementById("output_password_256").value = SHA256;
	document.getElementById("output_password_512").value = SHA512;
	document.getElementById("output_password_MD5").value = HASHMD5;
}

// ## Button Random Key
function random_key(){
	//generate Keyword
	let SHA256 = new Hashes.SHA512().hex(Math.random());
	document.getElementById("keyword").value = SHA256;

	//generate Salt
	let salt_str = salt_word();
	document.getElementById("salt").value = salt_str;
}

// ## Button Clear Key Input
function clear_keyword(){
	let str = "";
	document.getElementById("keyword").value = str;
}

// ## Button Clear Salt Input
function clear_salt(){
	let str = "";
	document.getElementById("salt").value = str;
}

// ## Button Clear Keys
function clear_all(){
	let str = "";
	clip_board("_");

	document.getElementById("keyword").value = str;
	document.getElementById("salt").value = str;
	document.getElementById("output_password_256").value = str;
	document.getElementById("output_password_512").value = str;
	document.getElementById("output_password_MD5").value = str;
}



// # SHA256 Menu

// ## Button Copy 256 All
function copy_256_all(){
	//Get Element to x
	let x = document.getElementById("output_password_256");
	// Make Password -> Text
	x.type = "text";

	let copyText = document.getElementById("output_password_256");
	copyText.select();
	document.execCommand("copy");

	// Make Text -> Password
	x.type = "password";
}

// ## Button Copy 256 First Chars
function copy_256_f(size){
	//Get Element to x
	let x = document.getElementById("output_password_256");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	let copyText = document.getElementById("output_password_256").value;
	//Slice First
	copyText = copyText.slice(0, size);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}

// ## Button Copy 256 Last Chars
function copy_256_l(size){
	//Get Element to x
	let x = document.getElementById("output_password_256");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	let copyText = document.getElementById("output_password_256").value;
	//Save Size of String
	let copy_length = copyText.length;
	//Create a Start of Slice
	let copy_start = copy_length - size;
	//Slice Last
	copyText = copyText.slice(copy_start, copy_length);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}



// # SHA512 Menu

// ## Button Copy 512 All
function copy_512_all(){
	//Get Element to x
	let x = document.getElementById("output_password_512");
	// Make Password -> Text
	x.type = "text";

	let copyText = document.getElementById("output_password_512");
	copyText.select();
	document.execCommand("copy");

	// Make Text -> Password
	x.type = "password";
}

// ## Button Copy 512 First Chars
function copy_512_f(size){
	//Get Element to x
	let x = document.getElementById("output_password_512");
	// Make Password -> Text
	x.type = "text";
	// Copy Value to String
	let copyText = document.getElementById("output_password_512").value;
	// Slice First
	copyText = copyText.slice(0, size);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}

// ## Button Copy 512 Last Chars
function copy_512_l(size){
	//Get Element to x
	let x = document.getElementById("output_password_512");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	let copyText = document.getElementById("output_password_512").value;
	//Save Size of String
	let copy_length = copyText.length;
	//Create a Start of Slice
	let copy_start = copy_length - size;
	//Slice Last
	copyText = copyText.slice(copy_start, copy_length);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}



// # MD5 Menu

// ## Button Copy MD5 All
function copy_MD5_all(){
	//Get Element to x
	let x = document.getElementById("output_password_MD5");
	// Make Password -> Text
	x.type = "text";

	let copyText = document.getElementById("output_password_MD5");
	copyText.select();
	document.execCommand("copy");

	// Make Text -> Password
	x.type = "password";
}

// ## Button Copy MD5 First Chars
function copy_MD5_f(size){
	//Get Element to x
	let x = document.getElementById("output_password_MD5");
	// Make Password -> Text
	x.type = "text";
	// Copy Value to String
	let copyText = document.getElementById("output_password_MD5").value;
	// Slice First
	copyText = copyText.slice(0, size);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}

// ## Button Copy MD5 Last Chars
function copy_MD5_l(size){
	//Get Element to x
	let x = document.getElementById("output_password_MD5");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	let copyText = document.getElementById("output_password_MD5").value;
	//Save Size of String
	let copy_length = copyText.length;
	//Create a Start of Slice
	let copy_start = copy_length - size;
	//Slice Last
	copyText = copyText.slice(copy_start, copy_length);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}



// # Re-Hash

// ## Button Re-Use HASH SHA256
function re_generate_hash_256(){
	let str = document.getElementById("output_password_256").value;
	document.getElementById("keyword").value = str;

	generate_hash();
}

// ## Button Re-Use HASH SHA512
function re_generate_hash_512(){
	let str = document.getElementById("output_password_512").value;
	document.getElementById("keyword").value = str;

	generate_hash();
}

// ## Button Re-Use HASH MD5
function re_generate_hash_MD5(){
	let str = document.getElementById("output_password_MD5").value;
	document.getElementById("keyword").value = str;

	generate_hash();
}
