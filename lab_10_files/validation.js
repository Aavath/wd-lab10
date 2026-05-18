/* Step 6, converting the original code to jQuery*/
function validate() {
	var sid = $("#sid").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();
	var genm = $("#genm").prop("checked");
	var genf = $("#genf").prop("checked");

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;					/* regular expression for letters and spaces only */

	
	if (sid == "") {						
		errMsg += "<li>User ID cannot be empty.</li>"
	}
	if (pwd1 == "") {					
		errMsg += "<li>Password cannot be empty.</li>"
	}
	if (pwd2 == "") {							
		errMsg += "<li>Retype password cannot be empty.</li>"
	}
	if (uname == "") {							
		errMsg += "<li>User name cannot be empty.</li>"
	}
	if ((!genm)&&(!genf)) {				
		errMsg += "<li>A gender must be selected.</li>"
	}
	
	if (sid.indexOf('@') == 0 ) {
		errMsg += "<li>User ID cannot start with an @ symbol.</li>"
	}
	if (sid.indexOf('@') < 0 ) {
		errMsg += "<li>User ID must contain an @ symbol.</li>"
	}
	
	if (pwd1 != pwd2) {
		errMsg += "<li>Passwords do not match.</li>"
	}
	
	if (! uname.match (pattern)) {
		errMsg += "<li>User name contains symbols.</li>"
	}

	/* Display error message any error(s) is/are detected */
	/* STEP 8 OF LAB 10*/

	if (errMsg != "") {
    errMsg = "<div id='scrnOverlay'></div>" /* This creates a div element to cover the whole page*/
           + "<section id='errWin' class='window'><ul>"
           + errMsg                         /* This Places the error message into an unordered list*/
           + "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
    var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;
    $("body").after(errMsg);   /* This makes it so that the error message gets loaded in after the body*/
    $("#scrnOverlay").css('visibility', 'visible'); /* This makes it so the pop up is visible*/
    $("#errWin").css('height', numOfItems.toString() + 'em'); 
    $("#errWin").css('margin-top', (numOfItems/-2).toString() + 'em'); /* This dynamically changes the size and centering of the error message*/
    $("#errWin").show();          /* This makes the error message visble*/
    $("#errBtn").click(function () {  /* This makes the error message dissapear after a clicking the close button*/
        $("#scrnOverlay").remove();
        $("#errWin").remove();
    });
    result = false;
}
return result;
/* STEP 7 OF LAB 10*/

}
function toggle() {
    $(this).parent().next().slideToggle(); /* This refers to the - button which when slide toggles betweet body and fieldset in HTML */
    if ($(this).html() == "[-]") {        /* Update the symbol on the "button" */
        $(this).html("[+]");
    } else {                              /* [-] <-> [+] */
        $(this).html("[-]");
    }
}

function init() {
$(".collapse").click(toggle); //link function toogle() to appropriate events
$("#regform").submit(validate);/*link function validate() to the submit event of the form */
}

$(document).ready(init);