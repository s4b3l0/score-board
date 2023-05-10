/* tslint:disable */
import { Appointment } from './appointment';
import { EgService } from './eg-service';
import { Feedback } from './feedback';
import { UserAccount } from './user-account';
export interface Patient {
  appointments?: Array<Appointment>;
  egServices?: Array<EgService>;
  email?: string;
  feedbacks?: Array<Feedback>;
  id?: number;
  userAccount?: UserAccount;
}
