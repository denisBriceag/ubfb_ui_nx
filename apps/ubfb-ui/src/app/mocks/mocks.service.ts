import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

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
}
