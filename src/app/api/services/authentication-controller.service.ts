/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthDetails } from '../models/auth-details';

/**
 * Authentication Controller
 */
@Injectable({
  providedIn: 'root',
})
class AuthenticationControllerService extends __BaseService {
  static readonly createUsingPOSTPath = '/auth/create';
  static readonly loginUsingPOSTPath = '/auth/login';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * create
   * @param authDetails authDetails
   * @return OK
   */
  createUsingPOSTResponse(authDetails: AuthDetails): __Observable<__StrictHttpResponse<AuthDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = authDetails;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthDetails>;
      })
    );
  }
  /**
   * create
   * @param authDetails authDetails
   * @return OK
   */
  createUsingPOST(authDetails: AuthDetails): __Observable<AuthDetails> {
    return this.createUsingPOSTResponse(authDetails).pipe(
      __map(_r => _r.body as AuthDetails)
    );
  }

  /**
   * login
   * @param authDetails authDetails
   * @return OK
   */
  loginUsingPOSTResponse(authDetails: AuthDetails): __Observable<__StrictHttpResponse<AuthDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = authDetails;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthDetails>;
      })
    );
  }
  /**
   * login
   * @param authDetails authDetails
   * @return OK
   */
  loginUsingPOST(authDetails: AuthDetails): __Observable<AuthDetails> {
    return this.loginUsingPOSTResponse(authDetails).pipe(
      __map(_r => _r.body as AuthDetails)
    );
  }
}

module AuthenticationControllerService {
}

export { AuthenticationControllerService }
