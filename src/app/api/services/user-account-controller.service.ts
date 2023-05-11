/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserAccount } from '../models/user-account';
import { PageUserAccount } from '../models/page-user-account';

/**
 * User Account Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserAccountControllerService extends __BaseService {
  static readonly getAllUsingGET4Path = '/account';
  static readonly deleteUsingPOST4Path = '/account/delete/{id}';
  static readonly saveUsingPOST4Path = '/account/save';
  static readonly getOneUsingGET4Path = '/account/{id}';
  static readonly updateUsingPUT4Path = '/account/{id}';
  static readonly getUsingGET4Path = '/account/{itemsPerPage}/{pageNo}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAll
   * @return OK
   */
  getAllUsingGET4Response(): __Observable<__StrictHttpResponse<Array<UserAccount>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserAccount>>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET4(): __Observable<Array<UserAccount>> {
    return this.getAllUsingGET4Response().pipe(
      __map(_r => _r.body as Array<UserAccount>)
    );
  }

  /**
   * delete
   * @param params The `UserAccountControllerService.DeleteUsingPOST4Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST4Response(params: UserAccountControllerService.DeleteUsingPOST4Params): __Observable<__StrictHttpResponse<UserAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/delete/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserAccount>;
      })
    );
  }
  /**
   * delete
   * @param params The `UserAccountControllerService.DeleteUsingPOST4Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST4(params: UserAccountControllerService.DeleteUsingPOST4Params): __Observable<UserAccount> {
    return this.deleteUsingPOST4Response(params).pipe(
      __map(_r => _r.body as UserAccount)
    );
  }

  /**
   * save
   * @param item item
   * @return OK
   */
  saveUsingPOST4Response(item: UserAccount): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/account/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * save
   * @param item item
   * @return OK
   */
  saveUsingPOST4(item: UserAccount): __Observable<{}> {
    return this.saveUsingPOST4Response(item).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET4Response(id: string): __Observable<__StrictHttpResponse<UserAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserAccount>;
      })
    );
  }
  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET4(id: string): __Observable<UserAccount> {
    return this.getOneUsingGET4Response(id).pipe(
      __map(_r => _r.body as UserAccount)
    );
  }

  /**
   * update
   * @param params The `UserAccountControllerService.UpdateUsingPUT4Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT4Response(params: UserAccountControllerService.UpdateUsingPUT4Params): __Observable<__StrictHttpResponse<UserAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/account/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserAccount>;
      })
    );
  }
  /**
   * update
   * @param params The `UserAccountControllerService.UpdateUsingPUT4Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT4(params: UserAccountControllerService.UpdateUsingPUT4Params): __Observable<UserAccount> {
    return this.updateUsingPUT4Response(params).pipe(
      __map(_r => _r.body as UserAccount)
    );
  }

  /**
   * get
   * @param params The `UserAccountControllerService.GetUsingGET4Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET4Response(params: UserAccountControllerService.GetUsingGET4Params): __Observable<__StrictHttpResponse<PageUserAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/account/${encodeURIComponent(String(params.itemsPerPage))}/${encodeURIComponent(String(params.pageNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageUserAccount>;
      })
    );
  }
  /**
   * get
   * @param params The `UserAccountControllerService.GetUsingGET4Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET4(params: UserAccountControllerService.GetUsingGET4Params): __Observable<PageUserAccount> {
    return this.getUsingGET4Response(params).pipe(
      __map(_r => _r.body as PageUserAccount)
    );
  }
}

module UserAccountControllerService {

  /**
   * Parameters for deleteUsingPOST4
   */
  export interface DeleteUsingPOST4Params {

    /**
     * item
     */
    item: UserAccount;

    /**
     * id
     */
    id: string;
  }

  /**
   * Parameters for updateUsingPUT4
   */
  export interface UpdateUsingPUT4Params {

    /**
     * item
     */
    item: UserAccount;

    /**
     * id
     */
    id: string;
  }

  /**
   * Parameters for getUsingGET4
   */
  export interface GetUsingGET4Params {

    /**
     * pageNo
     */
    pageNo: number;

    /**
     * itemsPerPage
     */
    itemsPerPage: number;
  }
}

export { UserAccountControllerService }
