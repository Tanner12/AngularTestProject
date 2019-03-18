import { Rental } from 'src/app/rental/shared/rental.model';


export class Booking {

    static readonly DATE_FORMAT = 'MM/DD/Y';

    _id: string;
    startAt: string;
    endAt: string;
    totalPrice: number;
    guests: number;
    days: number;
    createdAt: string;
    rental: Rental;
}