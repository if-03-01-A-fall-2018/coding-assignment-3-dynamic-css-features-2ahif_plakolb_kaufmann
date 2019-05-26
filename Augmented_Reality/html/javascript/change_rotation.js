// Changes from printed marker based to host marker based
function change_rotation() {
  console.log("test");
  if (confirm('Press "OK" if you want to use Host markers, press "Abort" if you want to use printed markers!')) {
    console.log("Changing...");
    var entityEl = document.querySelector('#trex');
    console.log(entityEl.getAttribute('rotation'));
    entityEl.object3D.rotation.y = THREE.Math.degToRad(45);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(45);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(45);
    console.log(entityEl.getAttribute('rotation'));
    var entityEl = document.querySelector('#stonehenge');
    console.log(entityEl);
  } else {
    // Do nothing!
  }
}
