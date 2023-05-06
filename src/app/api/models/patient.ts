/* tslint:disable */
import { Appointment } from './appointment';
import { Disease } from './disease';
import { EgService } from './eg-service';
import { Feedback } from './feedback';
import { UserAccount } from './user-account';
export interface Patient {
  appointments?: Array<Appointment>;
  diseases?: Array<Disease>;
  egServices?: Array<EgService>;
  email?: string;
  feedbacks?: Array<Feedback>;
  id?: number;
  userAccount?: UserAccount;
}
