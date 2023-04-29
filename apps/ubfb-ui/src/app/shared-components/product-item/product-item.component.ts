import { Component, Input, HostListener } from '@angular/core';
import { CurrencyPipe, NgIf } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SharedModule } from "../../modules/shared/shared.module";
import { ProductItem } from "../../mocks/shared-models";

@Component({
  standalone: true,
  selector: 'ubfb-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  imports: [SharedModule, CurrencyPipe, NgIf, MatTooltipModule],
})
export class ProductItemComponent {
  @Input()
  public productItem: ProductItem;
  public isIconVisible: boolean = false;

  @HostListener('mouseenter', ['event'])
  private showIcon(): void {
    this.isIconVisible = true;
  }

  @HostListener('mouseleave', ['event'])
  private doNotShowIcon(): void {
    this.isIconVisible = false;
  }
}
