var current_index = 0;
function marker_switch(direction)
{ //direction == 0 => right; direction == 1 => left;
  var marker_paths= ["markers\\english_class_goes_ar-marker.png", "markers\\ar.js-marker.png", "markers\\stonehenge_marker.png", "markers\\hiro_marker_image.png", "markers\\sphinx_marker.png"]
  if(direction == 0)
  {
    if(current_index + 1 > marker_paths.length - 1)
    {
      //console.log("current_index > marker_paths.length")
      current_index = 0;
    }
    else
    {
      //console.log("current_index++;")
      current_index++;
    }
  }
  else
  {
    if(current_index - 1 < 0)
    {
      //console.log("current_index < 0")
      current_index = marker_paths.length - 1;
    }
    else
    {
      //console.log("current_index--;")
      current_index--;
    }
  }
  //console.log("changes path");
  document.getElementById('marker').src = marker_paths[current_index];
}
