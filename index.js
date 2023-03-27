// Remember to import the data and Dog class!

const dogSwipeCross = document.getElementById('dog-swipe-cross')
const dogSwipeHeart = document.getElementById('dog-swipe-heart')

dogSwipeHeart.addEventListener("click", handleHeartClick)
dogSwipeCross.addEventListener("click", handleCrossClick)

function handleHeartClick() {
  console.log("hit heart")
}

function handleCrossClick() {
  console.log("hit cross")

}