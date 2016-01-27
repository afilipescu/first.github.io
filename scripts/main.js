/*var titlu =document.querySelector('h2');
titlu.textContent='Hello World ! ';

*/
var icecream='chocolate';
if(icecream==='chocolate')
{
    alert('YESSSssss');
}
else {
  alert('NoooooOo');
}




var myImage=document.querySelector('img');

myImage.onclick=function(){
  var mySrc= myImage.getAttribute('src');
  if(mySrc==='images/mozilla.png')
  {
    myImage.setAttribute('src','images/lancer.png');
  }
  else
  {
    myImage.setAttribute('src','images/mozilla.jpg');
  }
}


var myButton= document.querySelector('button');
var titlu=document.querySelector('h2');

function setName()
{
  var myname=prompt('Enter your name  :');
  localStorage.setItem('name',myname);
  titlu.textContent='mozilla is cool,' + myname;

  if(!localStorage.getItem('name'))
  {
    setName();

  }
  else {
    var storedName=localStorage.getItem('name');
    titlu.textContent='mozilla is coool,' + storedName;
  }
}
myButton.onclick=function(){
  setName();
}
