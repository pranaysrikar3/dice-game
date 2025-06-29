var randoom1=Math.floor(Math.random()*6)+1;
var randoom2=Math.floor(Math.random()*6)+1;
var randomImg1="images/dice"+randoom1+".png";
var randomImg2="images/dice"+randoom2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if(randoom1>randoom2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randoom1<randoom2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
function rate(stars) {
    const allStars = document.querySelectorAll(".star");
  
    for (let index = 0; index < allStars.length; index++) {
      const star = allStars[index];
  
      if (index < stars) {
        star.style.color = "#ffc107"; // Highlight selected stars (gold)
      } else {
        star.style.color = "#ccc"; // Dim unselected stars (gray)
      }
    }
  
    alert(`Thanks for rating us ${stars} star${stars > 1 ? "s" : ""}!`);
}
window.onload = function () {
    const allStars = document.querySelectorAll(".star");
  
    for (let index = 0; index < allStars.length; index++) {
      allStars[index].style.color = "#ccc"; // Reset all stars to gray
    }
};