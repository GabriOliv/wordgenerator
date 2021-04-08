
// Main Button
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

function generate_hash(){
	var str = document.getElementById("keyword").value;

	var SHA256 = new Hashes.SHA256().hex(str);
	var SHA512 = new Hashes.SHA512().hex(str);
	var HASHMD5 = new Hashes.MD5().hex(str);

	document.getElementById("output_password_256").value = SHA256;
	document.getElementById("output_password_512").value = SHA512;
	document.getElementById("output_password_MD5").value = HASHMD5;
}

function random_key(){

	var SHA256 = new Hashes.SHA512().hex(Math.random());
	document.getElementById("keyword").value = SHA256;
}

function clear_all(){
	var str = "";
	clip_board("_");

	document.getElementById("keyword").value = str;
	document.getElementById("output_password_256").value = str;
	document.getElementById("output_password_512").value = str;
	document.getElementById("output_password_MD5").value = str;
}



// 256
function copy_256_all(){
	//Get Element to x
	var x = document.getElementById("output_password_256");
	// Make Password -> Text
	x.type = "text";

	var copyText = document.getElementById("output_password_256");
	copyText.select();
	document.execCommand("copy");

	// Make Text -> Password
	x.type = "password";
}

function copy_256_f(size){
	//Get Element to x
	var x = document.getElementById("output_password_256");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	var copyText = document.getElementById("output_password_256").value;
	//Slice First
	var copyText = copyText.slice(0, size);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}

function copy_256_l(size){
	//Get Element to x
	var x = document.getElementById("output_password_256");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	var copyText = document.getElementById("output_password_256").value;
	//Save Size of String
	var copy_length = copyText.length;
	//Create a Start of Slice
	var copy_start = copy_length - size;
	//Slice Last
	var copyText = copyText.slice(copy_start, copy_length);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}



// 512
function copy_512_all(){
	//Get Element to x
	var x = document.getElementById("output_password_512");
	// Make Password -> Text
	x.type = "text";

	var copyText = document.getElementById("output_password_512");
	copyText.select();
	document.execCommand("copy");

	// Make Text -> Password
	x.type = "password";
}

function copy_512_f(size){
	//Get Element to x
	var x = document.getElementById("output_password_512");
	// Make Password -> Text
	x.type = "text";
	// Copy Value to String
	var copyText = document.getElementById("output_password_512").value;
	// Slice First
	var copyText = copyText.slice(0, size);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}

function copy_512_l(size){
	//Get Element to x
	var x = document.getElementById("output_password_512");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	var copyText = document.getElementById("output_password_512").value;
	//Save Size of String
	var copy_length = copyText.length;
	//Create a Start of Slice
	var copy_start = copy_length - size;
	//Slice Last
	var copyText = copyText.slice(copy_start, copy_length);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}



// MD5
function copy_MD5_all(){
	//Get Element to x
	var x = document.getElementById("output_password_MD5");
	// Make Password -> Text
	x.type = "text";

	var copyText = document.getElementById("output_password_MD5");
	copyText.select();
	document.execCommand("copy");

	// Make Text -> Password
	x.type = "password";
}

function copy_MD5_f(size){
	//Get Element to x
	var x = document.getElementById("output_password_MD5");
	// Make Password -> Text
	x.type = "text";
	// Copy Value to String
	var copyText = document.getElementById("output_password_MD5").value;
	// Slice First
	var copyText = copyText.slice(0, size);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}

function copy_MD5_l(size){
	//Get Element to x
	var x = document.getElementById("output_password_MD5");
	// Make Password -> Text
	x.type = "text";
	//Copy Value to String
	var copyText = document.getElementById("output_password_MD5").value;
	//Save Size of String
	var copy_length = copyText.length;
	//Create a Start of Slice
	var copy_start = copy_length - size;
	//Slice Last
	var copyText = copyText.slice(copy_start, copy_length);

	clip_board(copyText);

	// Make Text -> Password
	x.type = "password";
}



// Re-Hash
function re_generate_hash_256(){
	var str = document.getElementById("output_password_256").value;
	document.getElementById("keyword").value = str;

	generate_hash();
}

function re_generate_hash_512(){
	var str = document.getElementById("output_password_512").value;
	document.getElementById("keyword").value = str;

	generate_hash();
}

function re_generate_hash_MD5(){
	var str = document.getElementById("output_password_MD5").value;
	document.getElementById("keyword").value = str;

	generate_hash();
}


