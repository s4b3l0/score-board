/* tslint:disable */
import { Chronology } from './chronology';
export interface LocalDateTime {
  chronology?: Chronology;
  dayOfMonth?: number;
  dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  dayOfYear?: number;
  hour?: number;
  minute?: number;
  month?: 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER';
  monthValue?: number;
  nano?: number;
  second?: number;
  year?: number;
}
