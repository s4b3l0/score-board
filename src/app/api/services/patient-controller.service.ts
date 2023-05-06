/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Patient } from '../models/patient';
import { PagePatient } from '../models/page-patient';

/**
 * Patient Controller
 */
@Injectable({
  providedIn: 'root',
})
class PatientControllerService extends __BaseService {
  static readonly deleteUsingPOST3Path = '/patient/delete/{id}';
  static readonly saveUsingPOST3Path = '/patient/save';
  static readonly updateUsingPOST3Path = '/patient/update/{id}';
  static readonly getUsingGET3Path = '/patient/{itemsPerPage}/{pageNo}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * delete
   * @param params The `PatientControllerService.DeleteUsingPOST3Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST3Response(params: PatientControllerService.DeleteUsingPOST3Params): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/patient/delete/${encodeURIComponent(String(params.id))}`,
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
   * delete
   * @param params The `PatientControllerService.DeleteUsingPOST3Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST3(params: PatientControllerService.DeleteUsingPOST3Params): __Observable<{}> {
    return this.deleteUsingPOST3Response(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * save
   * @param item item
   * @return OK
   */
  saveUsingPOST3Response(item: Patient): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/patient/save`,
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
  saveUsingPOST3(item: Patient): __Observable<{}> {
    return this.saveUsingPOST3Response(item).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * update
   * @param params The `PatientControllerService.UpdateUsingPOST3Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST3Response(params: PatientControllerService.UpdateUsingPOST3Params): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/patient/update/${encodeURIComponent(String(params.id))}`,
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
   * update
   * @param params The `PatientControllerService.UpdateUsingPOST3Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST3(params: PatientControllerService.UpdateUsingPOST3Params): __Observable<{}> {
    return this.updateUsingPOST3Response(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * get
   * @param params The `PatientControllerService.GetUsingGET3Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET3Response(params: PatientControllerService.GetUsingGET3Params): __Observable<__StrictHttpResponse<PagePatient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/patient/${encodeURIComponent(String(params.itemsPerPage))}/${encodeURIComponent(String(params.pageNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PagePatient>;
      })
    );
  }
  /**
   * get
   * @param params The `PatientControllerService.GetUsingGET3Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET3(params: PatientControllerService.GetUsingGET3Params): __Observable<PagePatient> {
    return this.getUsingGET3Response(params).pipe(
      __map(_r => _r.body as PagePatient)
    );
  }
}

module PatientControllerService {

  /**
   * Parameters for deleteUsingPOST3
   */
  export interface DeleteUsingPOST3Params {

    /**
     * item
     */
    item: Patient;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateUsingPOST3
   */
  export interface UpdateUsingPOST3Params {

    /**
     * item
     */
    item: Patient;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for getUsingGET3
   */
  export interface GetUsingGET3Params {

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

export { PatientControllerService }
