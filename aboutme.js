document.body.style.fontFamily = "Arial, sans-serif";
var nickName = document.getElementById("nickname");
var favorites = document.getElementById("favorites");
var homeTown = document.getElementById("hometown");
nickName.textContent = "Adrian"
favorites.textContent = "I don't know"
homeTown.textContent = "Tolleson";
var li = document.getElementsByTagName('li')
for(var i=0; i<li.length; i++){
    li[i].classList.add('list-item')
}
var img = document.createElement("img")
img.src = "Images/pika.png"
document.body.append(img)
img.style.width = "300px"
img.style.height = "300px"
