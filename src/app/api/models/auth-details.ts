/* tslint:disable */
export interface AuthDetails {
  accountType?: 'DOCTOR' | 'ADMIN' | 'PATIENT';
  email?: string;
  password?: string;
  passwordMd5?: Array<ArrayBuffer>;
  permissions?: Array<'DOCTOR' | 'ADMIN' | 'PATIENT'>;
  session?: string;
  token?: string;
  username?: string;
}
