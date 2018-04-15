import { Injectable } from '@angular/core';

@Injectable()
export class CommonfunctionsService {

  constructor() { }

  isDateInRange(checkDate: string, beginDate: Date, endDate: Date): boolean {
    const checkDateArray = checkDate.split('/');
    const _checkDate = new Date(parseInt(checkDateArray[2], 10), parseInt(checkDateArray[1], 10) - 1, parseInt(checkDateArray[0], 10));

    return _checkDate >= beginDate && _checkDate <= endDate;
  }
}
