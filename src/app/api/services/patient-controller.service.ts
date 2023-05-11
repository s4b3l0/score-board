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
  static readonly getAllUsingGET3Path = '/patient';
  static readonly createUserUsingPOSTPath = '/patient/createUser/{password}';
  static readonly deleteUsingPOST3Path = '/patient/delete/{id}';
  static readonly saveUsingPOST3Path = '/patient/save';
  static readonly getOneUsingGET3Path = '/patient/{id}';
  static readonly updateUsingPUT3Path = '/patient/{id}';
  static readonly getUsingGET3Path = '/patient/{itemsPerPage}/{pageNo}';

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
  getAllUsingGET3Response(): __Observable<__StrictHttpResponse<Array<Patient>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/patient`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Patient>>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET3(): __Observable<Array<Patient>> {
    return this.getAllUsingGET3Response().pipe(
      __map(_r => _r.body as Array<Patient>)
    );
  }

  /**
   * createUser
   * @param params The `PatientControllerService.CreateUserUsingPOSTParams` containing the following parameters:
   *
   * - `patient`: patient
   *
   * - `password`: password
   *
   * @return OK
   */
  createUserUsingPOSTResponse(params: PatientControllerService.CreateUserUsingPOSTParams): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.patient;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/patient/createUser/${encodeURIComponent(String(params.password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * createUser
   * @param params The `PatientControllerService.CreateUserUsingPOSTParams` containing the following parameters:
   *
   * - `patient`: patient
   *
   * - `password`: password
   *
   * @return OK
   */
  createUserUsingPOST(params: PatientControllerService.CreateUserUsingPOSTParams): __Observable<Patient> {
    return this.createUserUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Patient)
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
  deleteUsingPOST3Response(params: PatientControllerService.DeleteUsingPOST3Params): __Observable<__StrictHttpResponse<Patient>> {
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
        return _r as __StrictHttpResponse<Patient>;
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
  deleteUsingPOST3(params: PatientControllerService.DeleteUsingPOST3Params): __Observable<Patient> {
    return this.deleteUsingPOST3Response(params).pipe(
      __map(_r => _r.body as Patient)
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
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET3Response(id: number): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/patient/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET3(id: number): __Observable<Patient> {
    return this.getOneUsingGET3Response(id).pipe(
      __map(_r => _r.body as Patient)
    );
  }

  /**
   * update
   * @param params The `PatientControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3Response(params: PatientControllerService.UpdateUsingPUT3Params): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/patient/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * update
   * @param params The `PatientControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3(params: PatientControllerService.UpdateUsingPUT3Params): __Observable<Patient> {
    return this.updateUsingPUT3Response(params).pipe(
      __map(_r => _r.body as Patient)
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
   * Parameters for createUserUsingPOST
   */
  export interface CreateUserUsingPOSTParams {

    /**
     * patient
     */
    patient: Patient;

    /**
     * password
     */
    password: string;
  }

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
   * Parameters for updateUsingPUT3
   */
  export interface UpdateUsingPUT3Params {

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
