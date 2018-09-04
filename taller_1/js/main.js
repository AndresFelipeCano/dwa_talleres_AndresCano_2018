var emailRegex;
var emails;
var ids;

window.onload = function() {
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  emails = [];
  ids = [];
  initUsers('https://jsonplaceholder.typicode.com/users');
}
/**
* Returns the json data parsed from de param
*  @param url
**/
function initUsers(url){
  var datausers;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) { //check status=ok
      datausers =  JSON.parse(this.responseText);
      datausers.forEach(function(user){
        emails.push(user.email);
        ids.push(user.id);
        console.log(user.email + " " + user.id);
      });
    }
  }
  request.open("GET", url, true);
  request.send();

}

function authUser(email, id){
  for(var i = 0; i < emails.length; i++){
    if(emails[i] == email && ids[i] == id) return true;
  }
  return false;
}
