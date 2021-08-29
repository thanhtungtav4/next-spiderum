var navicon = document.getElementById('navicon');
var navEl = document.getElementById('siteNav');
 function toggleMenu(){
   navEl.classList.toggle('is_active');
   navicon.classList.toggle('is_active');
};
navicon.addEventListener("click", toggleMenu, false);


var navicon2 = document.getElementById('navicon2');
var navEl2 = document.getElementById('siteNav2');
 function toggleMenu2(){
   navEl2.classList.toggle('is_active');
   navicon2.classList.toggle('is_active');
};
navicon2.addEventListener("click", toggleMenu2, false);


//share btn 
document.addEventListener('DOMContentLoaded', () => {
	var element = document.getElementById('toggle_share');
	var trigger = document.getElementById('btn_share');
  if(trigger)
	{
    trigger.addEventListener('click', () => {
      element.classList.toggle('is_active');
    });
  }
});

