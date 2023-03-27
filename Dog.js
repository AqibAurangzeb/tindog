class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogAvatarSrc() {
    return this.avatar;
  }

  getDogHtml() {
    const { name, age, bio, hasBeenLiked, hasBeenSwiped } = this;

    let stamp = hasBeenLiked ? 
      '<img class="dog-swipe-like" src="images/badge-like.png" alt="like badge">'
      : hasBeenSwiped 
        ? '<img class="dog-swipe-nope" src="images/badge-nope.png" alt=" nope badge">'
        : '';

    return `
      <h3 class="dog-name">${name}, ${age}</h3>
      <p class="dog-quote">${bio}</p>
      ${stamp}
    `
  }
}

export default Dog