import { Pipe, PipeTransform } from '@angular/core';
declare var moment;

@Pipe({ name: 'dateFormat' })
export class DatePipe implements PipeTransform {

    transform(value: any): any {
        let date = new Date(value);
        var dateString = moment(date).format('DD [de] MMM [de] YYYY');
        return value && value.length ? dateString : "Invalid date!";
    }
}