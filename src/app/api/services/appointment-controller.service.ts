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
  static readonly deleteUsingPOSTPath = '/appointment/delete/{id}';
  static readonly getDoctorUsingGETPath = '/appointment/doctor/{email}/{flag}';
  static readonly saveUsingPOSTPath = '/appointment/save';
  static readonly updateUsingPOSTPath = '/appointment/update/{id}';
  static readonly getUsingGETPath = '/appointment/{itemsPerPage}/{pageNo}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
  deleteUsingPOSTResponse(params: AppointmentControllerService.DeleteUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
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
        return _r as __StrictHttpResponse<{}>;
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
  deleteUsingPOST(params: AppointmentControllerService.DeleteUsingPOSTParams): __Observable<{}> {
    return this.deleteUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
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
