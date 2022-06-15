let slider1 = {
   prevButton: document.querySelector('.prev-btn'),
   nextButton: document.querySelector('.next-btn'),
   sliderImg: document.querySelector('.img'),
   arrImg: [],
   crrentIndexImg: 0,
   start: function() {
      let that = this;
      this.prevButton.addEventListener('click', function(e) {
         that.onPrevBtnClick(e);
      });
      this.nextButton.addEventListener('click', function(e) {
         that.onNextBtnClick(e);
      });
      this.arrImg.push('../img/heart.png');
      this.arrImg.push('../img/shoe.png');
      this.arrImg.push('../img/cup.png');
      this.sliderImg.src = this.arrImg[this.crrentIndexImg];
      this.prevButton.disabled = true;
   },
   onPrevBtnClick: function (e) {
      this.crrentIndexImg--;
      this.nextButton.disabled = false;
      this.sliderImg.src = this.arrImg[this.crrentIndexImg];
      if (this.crrentIndexImg === 0) {
         this.prevButton.disabled = true;
      }
   },
   onNextBtnClick: function (e) {
      this.crrentIndexImg++;
      this.prevButton.disabled = false;
      this.sliderImg.src = this.arrImg[this.crrentIndexImg];
      if (this.crrentIndexImg === (this.arrImg.length - 1)) {
         this.nextButton.disabled = true;
      }
   }
};