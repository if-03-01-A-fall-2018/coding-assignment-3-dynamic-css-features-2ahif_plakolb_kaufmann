// Changes from printed marker based to host marker based
function change_rotation() {
  console.log("test");
  if (confirm('Press "OK" if you want to use Printed markers, press "Abort" if you want to use host markers!')) {
    console.log("Changing...");
    document.title="Printed";
    let entityEl = document.querySelector('#trex');
    entityEl.object3D.rotation.y = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(0);
    entityEl = document.querySelector('#sphinx');
    entityEl.object3D.rotation.y = THREE.Math.degToRad(270);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(270);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(90);
    entityEl = document.querySelector('#stonehenge');
    entityEl.object3D.rotation.y = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(270);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(0);
    entityEl = document.querySelector('#jupiter');
    entityEl.object3D.rotation.y = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.x = THREE.Math.degToRad(0);
    entityEl.object3D.rotation.z = THREE.Math.degToRad(0);
    console.log("Finished Changing!");
  } else {
    console.log("Nothing to change!");
    document.title="Host";
  }
}
