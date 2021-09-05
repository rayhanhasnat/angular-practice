import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bootToText'
})
export class BootToTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Yes' : 'No';
  }

}
