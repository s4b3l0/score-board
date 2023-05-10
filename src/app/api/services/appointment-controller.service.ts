/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Appointment } from '../models/appointment';
import { PageAppointment } from '../models/page-appointment';

/**
 * Appointment Controller
 */
@Injectable({
  providedIn: 'root',
})
class AppointmentControllerService extends __BaseService {
  static readonly getAllUsingGETPath = '/appointment';
  static readonly deleteUsingPOSTPath = '/appointment/delete/{id}';
  static readonly getDoctorUsingGETPath = '/appointment/doctor/{email}/{flag}';
  static readonly saveUsingPOSTPath = '/appointment/save';
  static readonly updateUsingPOSTPath = '/appointment/update/{id}';
  static readonly getOneUsingGETPath = '/appointment/{id}';
  static readonly updateUsingPUTPath = '/appointment/{id}';
  static readonly getUsingGETPath = '/appointment/{itemsPerPage}/{pageNo}';

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
  getAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Appointment>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Appointment>>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET(): __Observable<Array<Appointment>> {
    return this.getAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Appointment>)
    );
  }

  /**
   * delete
   * @param params The `AppointmentControllerService.DeleteUsingPOSTParams` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOSTResponse(params: AppointmentControllerService.DeleteUsingPOSTParams): __Observable<__StrictHttpResponse<Appointment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/appointment/delete/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Appointment>;
      })
    );
  }
  /**
   * delete
   * @param params The `AppointmentControllerService.DeleteUsingPOSTParams` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST(params: AppointmentControllerService.DeleteUsingPOSTParams): __Observable<Appointment> {
    return this.deleteUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Appointment)
    );
  }

  /**
   * getDoctor
   * @param params The `AppointmentControllerService.GetDoctorUsingGETParams` containing the following parameters:
   *
   * - `flag`: flag
   *
   * - `email`: email
   *
   * @return OK
   */
  getDoctorUsingGETResponse(params: AppointmentControllerService.GetDoctorUsingGETParams): __Observable<__StrictHttpResponse<Array<Appointment>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointment/doctor/${encodeURIComponent(String(params.email))}/${encodeURIComponent(String(params.flag))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Appointment>>;
      })
    );
  }
  /**
   * getDoctor
   * @param params The `AppointmentControllerService.GetDoctorUsingGETParams` containing the following parameters:
   *
   * - `flag`: flag
   *
   * - `email`: email
   *
   * @return OK
   */
  getDoctorUsingGET(params: AppointmentControllerService.GetDoctorUsingGETParams): __Observable<Array<Appointment>> {
    return this.getDoctorUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<Appointment>)
    );
  }

  /**
   * save
   * @param item item
   * @return OK
   */
  saveUsingPOSTResponse(item: Appointment): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/appointment/save`,
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
  saveUsingPOST(item: Appointment): __Observable<{}> {
    return this.saveUsingPOSTResponse(item).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * update
   * @param params The `AppointmentControllerService.UpdateUsingPOSTParams` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOSTResponse(params: AppointmentControllerService.UpdateUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/appointment/update/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `AppointmentControllerService.UpdateUsingPOSTParams` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST(params: AppointmentControllerService.UpdateUsingPOSTParams): __Observable<{}> {
    return this.updateUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGETResponse(id: string): __Observable<__StrictHttpResponse<Appointment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointment/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Appointment>;
      })
    );
  }
  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET(id: string): __Observable<Appointment> {
    return this.getOneUsingGETResponse(id).pipe(
      __map(_r => _r.body as Appointment)
    );
  }

  /**
   * update
   * @param params The `AppointmentControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUTResponse(params: AppointmentControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/appointment/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `AppointmentControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT(params: AppointmentControllerService.UpdateUsingPUTParams): __Observable<{}> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * get
   * @param params The `AppointmentControllerService.GetUsingGETParams` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGETResponse(params: AppointmentControllerService.GetUsingGETParams): __Observable<__StrictHttpResponse<PageAppointment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/appointment/${encodeURIComponent(String(params.itemsPerPage))}/${encodeURIComponent(String(params.pageNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageAppointment>;
      })
    );
  }
  /**
   * get
   * @param params The `AppointmentControllerService.GetUsingGETParams` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET(params: AppointmentControllerService.GetUsingGETParams): __Observable<PageAppointment> {
    return this.getUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageAppointment)
    );
  }
}

module AppointmentControllerService {

  /**
   * Parameters for deleteUsingPOST
   */
  export interface DeleteUsingPOSTParams {

    /**
     * item
     */
    item: Appointment;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for getDoctorUsingGET
   */
  export interface GetDoctorUsingGETParams {

    /**
     * flag
     */
    flag: string;

    /**
     * email
     */
    email: string;
  }

  /**
   * Parameters for updateUsingPOST
   */
  export interface UpdateUsingPOSTParams {

    /**
     * item
     */
    item: Appointment;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {

    /**
     * item
     */
    item: Appointment;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for getUsingGET
   */
  export interface GetUsingGETParams {

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

export { AppointmentControllerService }
