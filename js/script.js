let prevButton = document.querySelector('.prev-btn');
let nextButton = document.querySelector('.next-btn');
let sliderImg = document.querySelector('.img');
let arrImg = [];
arrImg.push('../img/heart.png');
arrImg.push('../img/shoe.png');
arrImg.push('../img/cup.png');

let crrentIndexImg = 0;
sliderImg.src = arrImg[crrentIndexImg];
prevButton.disabled = true;

function onPrevBtnClick() {
   crrentIndexImg --;
   nextButton.disabled = false;
   sliderImg.src = arrImg[crrentIndexImg];
   if(crrentIndexImg === 0 ){
      prevButton.disabled = true;
   }
}
function onNextBtnClick() {
   crrentIndexImg ++;
   prevButton.disabled = false;
   sliderImg.src = arrImg[crrentIndexImg];
   if(crrentIndexImg === (arrImg.length-1)){
      nextButton.disabled = true;
   }
}

prevButton.addEventListener('click',onPrevBtnClick);
nextButton.addEventListener('click',onNextBtnClick);