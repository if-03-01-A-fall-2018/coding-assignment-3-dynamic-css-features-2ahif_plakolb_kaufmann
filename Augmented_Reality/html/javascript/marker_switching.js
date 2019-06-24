var current_index = 0;
function marker_switch(direction)
{ 
  let marker_paths= ["markers\\english_class_goes_ar-marker.png", "markers\\ar.js-marker.png", "markers\\stonehenge_marker.png", "markers\\hiro_marker_image.png", "markers\\sphinx_marker.png"]
  if(direction == 0)
  {
    if(current_index + 1 > marker_paths.length - 1)
    {
      current_index = 0;
    }
    else
    {
      current_index++;
    }
  }
  else
  {
    if(current_index - 1 < 0)
    {
      current_index = marker_paths.length - 1;
    }
    else
    {
      current_index--;
    }
  }
  document.getElementById('marker').src = marker_paths[current_index];
}
