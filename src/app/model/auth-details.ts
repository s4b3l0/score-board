export interface AuthDetails {
  username?: string;
  email?: string;
  password?: string;
  permissions?: string[];
  //TODO: add data to tokens
  token?: string;
  session?: string;
  accountType?: string;
  passwordMatch?: string;
}

export class AuthDetails implements AuthDetails {}

