import { Component } from '@angular/core';
import { MocksService } from '../../mocks/mocks.service';
import { Observable } from 'rxjs';
import { ProductItem } from "../../mocks/shared-models";

@Component({
  selector: 'ubfb-favourite-items',
  templateUrl: './favourite-items.component.html',
  styleUrls: ['./favourite-items.component.scss'],
})
export class FavouriteItemsComponent {
  public favProducts$: Observable<ProductItem[]> =
    this.mockService.getFavouriteProducts();

  constructor(public mockService: MocksService) {}
}
