var directPath = "http://project2.xpedialanka.com/harvy/api/";
// var directPath = "http://localhost/project/harvy/adminpanel/api/";

function takeHashPath(){
    
    var path = document.URL;
    var split = path.split('#');
    
    return split[1];
}