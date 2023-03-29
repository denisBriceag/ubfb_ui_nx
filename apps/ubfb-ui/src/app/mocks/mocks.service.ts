import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {FavouriteProduct, favouriteProductData} from "./data";

@Injectable({
  providedIn: 'root'
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
    "children´s champagne",
    'sparkling water'
  ]

  public categories$: Subject<string[]> = new Subject<string[]>();

  public getFavouriteProducts(): Observable<FavouriteProduct[]> {
    return of(favouriteProductData)
  }
}
