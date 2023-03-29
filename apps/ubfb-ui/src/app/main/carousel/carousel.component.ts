import {Component, ElementRef, ViewChild} from '@angular/core';

declare interface CarouselConfig {
  img: string;
  alt: string;
  index: number;
}

@Component({
  selector: 'ubfb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  public readonly sliderArray: CarouselConfig[] = [
    {img: "../../assets/carousel-img/sample.webp", alt: "", index: 0},
    {img: "../../assets/carousel-img/sample_2.webp", alt: "", index: 1},
    {img: "../../assets/carousel-img/sample.webp", alt: "", index: 2},
  ];

  @ViewChild('carousel', { read: ElementRef}) public carousel: ElementRef;

  public currentIndex: number = 0;

  public nextSlide(): void {
    if (this.currentIndex === this.sliderArray.length - 1) {
      this.currentIndex = 0;
      return;
    }

    this.currentIndex++
  }

  public previousSlide(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.sliderArray.length - 1;
      return;
    }

    this.currentIndex--
  }
}
