$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var contact = $("#contact").val();
var company_name = $("#subject").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || contact == '') {
alert("Please Fill Required Fields");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php", {
name1: name,
email1: email,
contact1: contact,
company_name1: company_name
}, function(data) {
 alert (data);
$("#returnmessage").innerHTML(data); // Append returned message to message paragraph.
if (data == "Your Query has been received, We will contact you soon.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
});
