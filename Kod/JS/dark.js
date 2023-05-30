

// dark-/lightmode activator
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    let sun = document.getElementById("sun");
    if(readCookie('darkmode') != 'true' && readCookie('darkmode') != 'false'){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else if(readCookie('darkmode') == 'true'){
        eraseCookie('darkmode');
        document.documentElement.setAttribute('data-theme', 'dark');
    }else if(readCookie('darkmode') == 'false'){
        document.documentElement.setAttribute('data-theme', 'light');
        sun.classList.toggle("night");
    }
  }else{
    if(readCookie('darkmode') != 'true' && readCookie('darkmode') != 'false'){
        document.documentElement.setAttribute('data-theme', 'light');
        sun.classList.toggle("night");
    }else if(readCookie('darkmode') == 'false'){
        eraseCookie('light');
        document.documentElement.setAttribute('data-theme', 'light');
        sun.classList.toggle("night");
    }else if(readCookie('darkmode') == 'true'){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
  
  function darkToggle(){
    console.log("fan")
    let theme = document.documentElement.getAttribute('data-theme');
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        if(theme == 'dark'){
            createCookie('darkmode', 'false' ,'365');
            document.documentElement.setAttribute('data-theme', 'light');
        }else{
            eraseCookie('darkmode')
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }else{
        if(theme == 'dark'){
            eraseCookie('darkmode')
            document.documentElement.setAttribute('data-theme', 'light');
        }else{
            createCookie('darkmode', 'true' ,'365');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
  }
  
  // Code for creating, reading and erasing cookies
  function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = '; expires='+date.toGMTString();
  }
  else var expires = '';
  document.cookie = name+'='+value+expires+'; SameSite=Strict; Secure; path=/';
  }
  
  function readCookie(name) {
    
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return false;
  }
  
  function eraseCookie(name) {
  createCookie(name,'',-1);
  }

let sun = document.getElementById("sun");
let darkmodebtn = document.getElementById("darkButton")

darkmodebtn.onclick = function(){
    sun.classList.toggle("night");
}