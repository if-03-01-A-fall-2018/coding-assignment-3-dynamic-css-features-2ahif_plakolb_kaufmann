// Changes from printed marker based to host marker based
function change_rotation() {
  console.log("test");
  if (confirm('Press "OK" if you want to use Printed markers, press "Abort" if you want to use host markers!')) {
    console.log("Changing...");
    var entityEl = document.querySelector('#trex');
    console.log(entityEl.getAttribute('rotation'));
    entityEl.object3D.rotation.y = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(0);
    console.log(entityEl.getAttribute('rotation'));
    var entityEl = document.querySelector('#sphinx');
    entityEl.object3D.rotation.y = THREE.Math.degToRad(270);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(270);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(90);
    var entityEl = document.querySelector('#stonehenge');
    entityEl.object3D.rotation.y = THREE.Math.degToRad(270);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(0);
  } else {
    // Do nothing!
  }
}
