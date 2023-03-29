import {Component, Input} from '@angular/core';
import {FavouriteProduct} from "../../../mocks/data";

@Component({
  selector: 'ubfb-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss'],
})
export class FavouriteItemComponent {
  @Input()
  public productItem: FavouriteProduct;
}
