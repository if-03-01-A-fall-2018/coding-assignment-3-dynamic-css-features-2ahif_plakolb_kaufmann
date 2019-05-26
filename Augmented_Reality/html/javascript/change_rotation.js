// Changes from printed marker based to host marker based
function checkToggleSwitch() {
  // Get the checkbox
  var check_box = document.getElementById("checkbox");
  var host_button = document.getElementById("hostbutton");
  var host_href = "web_app_host.html";
  // If the checkbox is checked, display the output text
  if (check_box.checked == true)
  {
    text1.style.display = "block";
    text2.style.display = "block";
    host_button.href = "#";           //Disable host button
    console.log("Checkbox checked");
  }
  else
  {
    text1.style.display = "none";
    text2.style.display = "none";
    host_button.href = host_href;   //Enable host button
  }
}

function testFunc() {
  console.log("test");
  if (confirm('Press "OK" if you want to use Host markers, press "Abort" if you want to use printed markers!')) {
    console.log("Changing...");
    var trex = document.getElementById("trex");
    console.log(trex);
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.querySelector('a-entity');
    console.log(entityEl);
    console.log(entityEl.getAttribute('rotation'));
    //entityEl.setAttribute('rotation', {x: THREE.Math.degToRad(45), y: THREE.Math.degToRad(45), z: THREE.Math.degToRad(45)});
    entityEl.object3D.rotation.y = THREE.Math.degToRad(45);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(45);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(45);
    console.log(entityEl.getAttribute('rotation'));
} else {
    // Do nothing!
}
  //location.reload(true);
}
