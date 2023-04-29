import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {comboItemsData, favouriteProductData} from './data';
import { ProductItem } from "./shared-models";

@Injectable({
  providedIn: 'root',
})
export class MocksService {
  public categories: string[] = [
    'whisky',
    'cognac',
    'vodka',
    'rum',
    'tequila',
    'gin',
    'wine',
    'sparkling wine',
    'champagne',
    'vermouth',
    'liquor',
    'tincture',
    'beer',
    'water',
    'coffee and tea',
    'children´s champagne',
    'sparkling water',
  ];

  public readonly categories$: Subject<string[]> = new Subject<string[]>();

  public getFavouriteProducts(): Observable<ProductItem[]> {
    return of(favouriteProductData);
  }

  public getComboItems(): Observable<ProductItem[]> {
    return of(comboItemsData);
  }
}
