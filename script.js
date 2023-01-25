function addName() {
    var name = document.getElementById("name").value;
    if(document.getElementById("name-list").innerHTML === "") document.getElementById("name-list").innerHTML = name;
    else document.getElementById("name-list").innerHTML = document.getElementById("name-list").innerHTML + "<br>" + name;
}