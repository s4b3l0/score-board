/* tslint:disable */
import { LocalTime } from './local-time';
import { ZoneOffset } from './zone-offset';
export interface ZoneOffsetTransitionRule {
  dayOfMonthIndicator?: number;
  dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  localTime?: LocalTime;
  midnightEndOfDay?: boolean;
  month?: 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER';
  offsetAfter?: ZoneOffset;
  offsetBefore?: ZoneOffset;
  standardOffset?: ZoneOffset;
  timeDefinition?: 'UTC' | 'WALL' | 'STANDARD';
}
