/* tslint:disable */
import { UserAccount } from './user-account';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageUserAccount {
  content?: Array<UserAccount>;
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
