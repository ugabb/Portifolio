const filterMain = document.querySelectorAll(`.filter`);
const filterContainerMain = document.querySelector(`.filters-container-main`);

const cardIntro = document.querySelector(`.card--intro`);
const cardMap = document.querySelector(`.card--map`);
const cardPhotos = document.querySelector(`.card--photos`);
const cardRunning = document.querySelector(`.card--running`);
const cardLearning = document.querySelector(`.card--learning`);
const cardSpotify = document.querySelector(`.card--spotify`);
const cardRotation = document.querySelector(`.card--rotation`);
const cardGithub = document.querySelector(`.card--github`);
const cardTwitter = document.querySelector(`.card--twitter`);
const cardLinkedin = document.querySelector(`.card--linkedin`);
const cardYoutube = document.querySelector(`.card--youtube`);
const cardInsta = document.querySelector(`.card--instagram`);
const cardRyos = document.querySelector(`.card--ryos`);
const cardRecipely = document.querySelector(`.card--recipely`);
const cardDonate = document.querySelector(`.card--donate`);

const introTextAll = document.getElementById(`intro-text-all`);
const introTextAbout = document.getElementById(`intro-text-about`);
const introTextContent = document.querySelectorAll(`.intro-text-content`);

filterContainerMain.addEventListener(`click`, function (event) {
    
  const clicked = event.target.closest(`.filter`);
  if (!clicked) return;
  filterMain.forEach(filter => filter.classList.remove(`active`));
  clicked.classList.add(`active`);
  
  cardIntro.setAttribute(`id`, `card--intro--${clicked.dataset.filter}`);
  cardMap.setAttribute(`id`, `card--map--${clicked.dataset.filter}`);
  cardPhotos.setAttribute(`id`, `card--photos--${clicked.dataset.filter}`);
  cardRunning.setAttribute(`id`, `card--running--${clicked.dataset.filter}`);
  cardLearning.setAttribute(`id`, `card--learning--${clicked.dataset.filter}`);
  cardSpotify.setAttribute(`id`, `card--spotify--${clicked.dataset.filter}`);
  cardRotation.setAttribute(`id`, `card--rotation--${clicked.dataset.filter}`);
  cardGithub.setAttribute(`id`, `card--github--${clicked.dataset.filter}`);
  cardTwitter.setAttribute(`id`, `card--twitter--${clicked.dataset.filter}`);
  cardLinkedin.setAttribute(`id`, `card--linkedin--${clicked.dataset.filter}`);
  cardYoutube.setAttribute(`id`, `card--youtube--${clicked.dataset.filter}`);
  cardInsta.setAttribute(`id`, `card--instagram--${clicked.dataset.filter}`);
  cardRyos.setAttribute(`id`, `card--ryos--${clicked.dataset.filter}`);
  cardRecipely.setAttribute(`id`, `card--recipely--${clicked.dataset.filter}`);
  cardDonate.setAttribute(`id`, `card--donate--${clicked.dataset.filter}`);
  // CHANGE PHOTO ON FILTER CHANGE
  if (clicked.dataset.filter === `running`) {
    currentSlide = 4;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  }
  // CHANGE INTRO CARD ON FILTER CHANGE
  if (clicked.dataset.filter === `about`) {
    introTextContent.forEach(element =>
      element.classList.remove(`intro-text--active`)
    );
    introTextAbout.classList.add(`intro-text--active`);
  } else {
    introTextContent.forEach(element =>
      element.classList.remove(`intro-text--active`)
    );
    introTextAll.classList.add(`intro-text--active`);
  }
});