var name = prompt("hello im omar :) what is you name")
alert("hello welcome to my wibsite " + name )


var favfood = prompt("what is your fav food")

if(favfood == "shawirma"){
  document.write("<div>" + "<h3>" + favfood + "</h3>" + "<img src=  'https://static.toiimg.com/thumb/64696930.cms?imgsize=329052&width=800&height=800'width='200' height='200' />" + "</div>")
}
else if (favfood == "Pizza"){
  document.write("<div>" + "<h3>" + favfood + "</h3>" + "<img src = 'https://alfaiomi.net/wp-content/uploads/2021/03/pizza.jpg 'width='200' height='200'/>" + "</div>")

}
else if  (favfood =="burger"){
  document.write("<div>" + "<h3>" + favfood + "</h3>" + "<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwR7X5iQN-smijnnIwobDvK2D8GeHLG8--wA&usqp=CAU 'width='200' height='200' />" + "</div>")

}
else {
   alert("we dont have this car")
}




