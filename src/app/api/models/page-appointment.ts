/* tslint:disable */
import { Appointment } from './appointment';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageAppointment {
  content?: Array<Appointment>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
