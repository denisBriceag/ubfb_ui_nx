import { Component } from '@angular/core';
import {MocksService} from "../../mocks/mocks.service";
import {Observable} from "rxjs";
import {ProductItem} from "../../mocks/shared-models";

@Component({
  selector: 'ubfb-combo-items',
  templateUrl: './combo-items.component.html',
  styleUrls: ['./combo-items.component.scss'],
})
export class ComboItemsComponent {
  public comboItems$: Observable<ProductItem[]> = this.mockService.getComboItems()

  constructor(private mockService: MocksService) {
  }
}
