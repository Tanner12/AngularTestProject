import { Injectable } from "@angular/core";
import { Booking } from 'src/app/booking/shared/booking.model';
import * as moment from 'moment';


@Injectable()
export class HelperService {

    private makeProperDateFormat(dateString, trueFalse: boolean) {
        if (!trueFalse) return dateString;
        const dateArray = dateString.split("/");
        let newDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];
        return newDate;
    }

    private getRangeOfDates(startAt, endAt, dateFormat) {
        const tempDates = [];
        let change = true;
        if (startAt.includes("-")) change = false;
        const mEndAt = moment(this.makeProperDateFormat(endAt, change));
        let mStartAt = moment(this.makeProperDateFormat(startAt, change));

        while (mStartAt < mEndAt) {
            tempDates.push(mStartAt.format(dateFormat));
            mStartAt = mStartAt.add(1, 'day');
        }

        tempDates.push(mEndAt.format(dateFormat));

        return tempDates;
    }

    private formatDate(date, dateFormat) {
        return moment(date).format(dateFormat);
    }

    public formatBookingDate(date) {
        return this.formatDate(date, Booking.DATE_FORMAT);
    }

    public getBookingRangeOfDates(startAt, endAt) {
        return this.getRangeOfDates(startAt, endAt, Booking.DATE_FORMAT);
    }
}