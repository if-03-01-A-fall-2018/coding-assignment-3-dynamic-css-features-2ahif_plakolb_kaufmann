var lastYear='1968';

function showYear(obj, id){
  document.getElementById(lastYear).style.cssText='display: none !important';
  document.getElementById(id).style.cssText='display: block !important';
  let margin =  document.getElementById(obj).offsetLeft-4;
  document.getElementById('triangleYear').style.cssText='margin-left:' + margin +'px!important; display: block !important';
  lastYear=id;
}

function hoverYear(obj, text){
  document.getElementById('hoverText').innerHTML = text;
  let margin =  document.getElementById(obj).offsetLeft-15;
  console.log(margin);
  document.getElementById('hoverYear').style.cssText='margin-left:' + margin +'px!important; display: block !important';
}

function hideYear() {
  document.getElementById('hoverYear').style.cssText='display: none !important';
}
