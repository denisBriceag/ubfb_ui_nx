import { Component } from '@angular/core';
import {MocksService} from "../../../mocks/mocks.service";

@Component({
  selector: 'ubfb-favourite-wrapper',
  templateUrl: './favourite-wrapper.component.html',
  styleUrls: ['./favourite-wrapper.component.scss'],
})
export class FavouriteWrapperComponent {
  constructor(public mockService: MocksService) {
  }
}
