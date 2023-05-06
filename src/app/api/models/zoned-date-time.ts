/* tslint:disable */
import { Chronology } from './chronology';
import { ZoneOffset } from './zone-offset';
import { ZoneId } from './zone-id';
export interface ZonedDateTime {
  chronology?: Chronology;
  dayOfMonth?: number;
  dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  dayOfYear?: number;
  hour?: number;
  minute?: number;
  month?: 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER';
  monthValue?: number;
  nano?: number;
  offset?: ZoneOffset;
  second?: number;
  year?: number;
  zone?: ZoneId;
}
