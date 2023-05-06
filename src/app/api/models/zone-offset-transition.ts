/* tslint:disable */
import { LocalDateTime } from './local-date-time';
import { Duration } from './duration';
import { Instant } from './instant';
import { ZoneOffset } from './zone-offset';
export interface ZoneOffsetTransition {
  dateTimeAfter?: LocalDateTime;
  dateTimeBefore?: LocalDateTime;
  duration?: Duration;
  gap?: boolean;
  instant?: Instant;
  offsetAfter?: ZoneOffset;
  offsetBefore?: ZoneOffset;
  overlap?: boolean;
}
