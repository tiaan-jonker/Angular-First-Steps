import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesToKmConvert',
})
export class MilesToKmConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): any {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      default:
        return value;
    }
  }
}
