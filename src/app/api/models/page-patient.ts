/* tslint:disable */
import { Patient } from './patient';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PagePatient {
  content?: Array<Patient>;
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
