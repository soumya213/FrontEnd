import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionViewComponent implements OnInit {

  public regions:string[]=["Africa", "Americas", "Asia", "Europe", "Oceania"]

  constructor() { }

  ngOnInit() {

    this.jqueryFunction();

  }

  jqueryFunction(){ 
    let sliderImage=$('.slide');
    let arrowLeft=$('#arrow-left');
    let arrowRight=$('#arrow-right');
    let current=0
    function reset(){
      for (let i =0;i<sliderImage.length ; i++) {
        $('.slide'+i).css({"display":"none"})
      }
    }

  function startSlide() {
    reset();
    $('.slide0').css({"display":"block"})
  }
  // Show prev
function slideLeft() {
  reset();
  sliderImage[current - 1].style.display = "block";
  current--;
}
// Show next
function slideRight() {
  reset();
  sliderImage[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.click(function() {
  if (current === 0) {
    current = sliderImage.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.click( function() {
  if (current === sliderImage.length - 1) {
    current = -1;
  }
  slideRight();
});

    startSlide()
  }

}
