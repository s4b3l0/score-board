/* tslint:disable */
import { UserAccount } from './user-account';
import { ZonedDateTime } from './zoned-date-time';
export interface Appointment {
  doctor?: UserAccount;
  effFrom?: ZonedDateTime;
  effTo?: ZonedDateTime;
  id?: number;
  patient?: UserAccount;
}
