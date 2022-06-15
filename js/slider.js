let sliderFactory = {
   createSlider:function() {
      let newSlider = {
         prevButton: null,
         nextButton: null,
         sliderImg: null,
         arrImg: [],
         currentIndexImg: 0,
         start: function (elId) {
            let that = this;
            let elSelector = document.querySelector('#' + elId);
            this.prevButton = elSelector.querySelector('.prev-btn');
            this.nextButton = elSelector.querySelector('.next-btn');
            this.sliderImg = elSelector.querySelector('.img');
            this.prevButton.addEventListener('click', function (e) {
               that.onPrevBtnClick(e);
            });
            this.nextButton.addEventListener('click', function (e) {
               that.onNextBtnClick(e);
            });
            this.arrImg.push('../img/heart.png');
            this.arrImg.push('../img/shoe.png');
            this.arrImg.push('../img/cup.png');
            this.sliderImg.src = this.arrImg[this.currentIndexImg];
            this.prevButton.disabled = true;
         },
         onPrevBtnClick: function (e) {
            this.currentIndexImg--;
            this.nextButton.disabled = false;
            this.sliderImg.src = this.arrImg[this.currentIndexImg];
            if (this.currentIndexImg === 0) {
               this.prevButton.disabled = true;
            }
         },
         onNextBtnClick: function (e) {
            this.currentIndexImg++;
            this.prevButton.disabled = false;
            this.sliderImg.src = this.arrImg[this.currentIndexImg];
            if (this.currentIndexImg === (this.arrImg.length - 1)) {
               this.nextButton.disabled = true;
            }
         }
      };
      return newSlider;
   }
};
