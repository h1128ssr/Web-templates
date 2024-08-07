let query = document.querySelector('.query');
let icon = document.querySelector('.icon');

icon.onclick = function(){
    alert("This search not beam stored you in history and you are going to search on google")
    let url ='https://www.google.com/search?q='+query.value;
    window.open(url,'_self');
}