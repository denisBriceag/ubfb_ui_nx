import {
  Component,
  ViewEncapsulation
} from '@angular/core'
import SwiperCore , {
  Navigation,
  Pagination,
  Autoplay,

} from 'swiper';

declare interface CarouselConfig {
  img: string;
  alt: string;
  index: number;
}

@Component({
  selector: 'ubfb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  public readonly sliderArray: CarouselConfig[] = [
    {img: "../../assets/carousel-img/sample.webp", alt: "", index: 0},
    {img: "../../assets/carousel-img/sample_2.webp", alt: "", index: 1},
    {img: "../../assets/carousel-img/sample.webp", alt: "", index: 2},
  ];

  constructor() {
    SwiperCore.use([
      Navigation,
      Pagination,
      Autoplay
    ]);
  }

}
