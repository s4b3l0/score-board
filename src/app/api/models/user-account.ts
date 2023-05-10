/* tslint:disable */
export interface UserAccount {
  accountType?: 'DOCTOR' | 'ADMIN' | 'PATIENT';
  email?: string;
  password?: Array<ArrayBuffer>;
  userName?: string;
}
