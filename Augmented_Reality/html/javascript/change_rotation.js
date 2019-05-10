// Changes from printed marker based to host marker based
function changeRotation() {
  // Get the checkbox
  var checkBox = document.getElementById("button1");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
    console.log("Checkbox is Checked");
  } else {
    text.style.display = "none";
  }
}
