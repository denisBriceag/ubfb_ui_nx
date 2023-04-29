import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCutter',
})
export class UbfbTextCutterPipe implements PipeTransform {
  public transform(value: string | undefined): string | undefined {
    if (value && value.length > 92) {
      const arrOfStrings: string[] = value.split('').splice(0, 96);
      return arrOfStrings.join('') + '...';
    }

    return value;
  }
}
