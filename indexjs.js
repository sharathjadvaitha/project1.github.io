window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var name1=document.getElementById('name1');
var email=document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message')
var butn = document.getElementById('butn');

img1.addEventListener('mouseover',function(){
  this.width='450';
});
img1.addEventListener('mouseleave',function(){
  this.width='430';
});
img2.addEventListener('mouseover',function(){
  this.width='450';
});
img2.addEventListener('mouseleave',function(){
  this.width='430';
});
img3.addEventListener('mouseover',function(){
  this.width='450';
});
img3.addEventListener('mouseleave',function(){
  this.width='430';
});


butn.addEventListener('click',function(){
  if(name1.value=="" || name1.value=='Name*')
  {
    alert('Please enter name');

  }
  else
  {
    if(email.value=="" || email.value=='visitor@gmail.com*')
    {
      alert('Please enter email');

    }
    else
    {
      if(subject.value=="" || subject.value=='Subject*')
      {
        alert('Please enter subject');

      }
      else
      {
        alert('Thank you , We will contact you shortly!');
        location.reload();
      }
    }
  }
});
