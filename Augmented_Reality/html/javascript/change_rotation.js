// Changes from printed marker based to host marker based
function changeRotation() {
  // Get the checkbox
  var check_box = document.getElementById("checkbox");
  var host_button = document.getElementById("hostbutton");
  // If the checkbox is checked, display the output text
  if (check_box.checked == true)
  {
    text1.style.display = "block";
    text2.style.display = "block";
    host_button.href = "#";
    console.log("Checkbox  Checked");
  }
  else
  {
    text1.style.display = "none";
    text2.style.display = "none";
    host_button.href = "web_app_host.html";
  }
}
