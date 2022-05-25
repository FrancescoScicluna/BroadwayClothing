let users = data;

users.forEach(function (element){
    document.getElementById('users').innerHTML += "<h3>" + element.name + "</h3>";
    document.getElementById('users').innerHTML += "<h4>" + element.age + " years old</h4>";
    document.getElementById('users').innerHTML += "<p> Username: " + element.username + "</p>";
    document.getElementById('users').innerHTML += "<p> Password: " + element.password + "</p>";
});

function download(){
   let input = document.getElementById('input').value;
   let blob = new Blob(
    [input],
    {"type":"text/plain/charaset=utf=8"}
   );
   saveAs(blob, "downloadedReport.txt");
}