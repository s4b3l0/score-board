/* tslint:disable */
import { TemporalUnit } from './temporal-unit';
export interface Duration {
  nano?: number;
  negative?: boolean;
  seconds?: number;
  units?: Array<TemporalUnit>;
  zero?: boolean;
}
