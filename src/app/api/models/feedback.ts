/* tslint:disable */
import { UserAccount } from './user-account';
export interface Feedback {
  doctor?: UserAccount;
  id?: number;
  name?: string;
  patient?: UserAccount;
}
