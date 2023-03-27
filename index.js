import { dogs } from './data.js'
import Dog from './Dog.js'

const dogSwipeCross = document.getElementById('dog-swipe-cross');
const dogSwipeHeart = document.getElementById('dog-swipe-heart');

dogSwipeHeart.addEventListener("click", handleHeartClick);
dogSwipeCross.addEventListener("click", handleCrossClick);

let isWaiting = false;

function handleHeartClick() {
  if (!isWaiting) {
    dog.hasBeenLiked = true;
    render();
    isWaiting = true;
    setTimeout(() => { 
      if (dogs.length> 0) {
        dog = getNextDog()
        render()
      }

      isWaiting = false;
    } , 1000);
  }
}

function handleCrossClick() {
  if (!isWaiting) {
    dog.hasBeenSwiped = true;
    render();
    isWaiting = true;
    setTimeout(() => { 
      if (dogs.length> 0) {
        dog = getNextDog()
        render()
      }
      isWaiting = false;
    } , 1000);
  }
}

function getNextDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
  document.getElementById('dog-swipe-main-img').innerHTML = dog.getDogHtml();
  document.getElementById('dog-swipe-main-img').style.background = `url(${dog.getDogAvatarSrc()})`
  document.getElementById('dog-swipe-main-img').style.backgroundSize = 'cover'
}

let dog = getNextDog();
render()