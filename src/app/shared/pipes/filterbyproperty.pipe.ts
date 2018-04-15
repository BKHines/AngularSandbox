import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({ name: 'filterbyproperty' })
export class FilterByPropertyPipe implements PipeTransform {
  transform(value: any, propertyname: string, filtervalues: any[], contains: boolean, strict: boolean, ignorecase: boolean) {
    const filterValueExists = filtervalues && filtervalues.every(fv => fv);
    if (value && propertyname && filterValueExists) {
      if (strict) {
        if (contains && !isNumber(value[0][propertyname])) {
          return value.filter((v, i) => filtervalues.find(_fv => v[propertyname].indexOf(_fv) > -1) && filtervalues.find(_fv => v[propertyname].indexOf(_fv) > -1).length > 0);
        } else {
          return value.filter((v, i) => filtervalues.indexOf(v[propertyname]) > -1);
        }
      } else if (ignorecase) {
        const _filtervalues: string[] = [];
        filtervalues.forEach((fv) => _filtervalues.push(fv.toString().toLowerCase()));
        if (contains && !isNumber(value[0][propertyname])) {
          return value.filter((v, i) => _filtervalues.find(_fv => v[propertyname].toString().toLowerCase().indexOf(_fv) > -1));
        } else {
          return value.filter((v, i) => _filtervalues.indexOf(v[propertyname].toString().toLowerCase()) > -1);
        }
      } else {
        const _filtervalues: string[] = [];
        filtervalues.forEach((fv) => _filtervalues.push(fv.toString().toLowerCase()));
        if (contains && !isNumber(value[0][propertyname])) {
          return value.filter((v, i) => _filtervalues.find(_fv => v[propertyname].toString().toLowerCase().indexOf(_fv) > -1));
        } else {
          return value.filter((v, i) => _filtervalues.indexOf(v[propertyname].toString()) > -1);
        }
      }
    } else {
      return value;
    }
  }
}
