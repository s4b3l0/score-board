/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Feedback } from '../models/feedback';
import { PageFeedback } from '../models/page-feedback';

/**
 * Feedback Controller
 */
@Injectable({
  providedIn: 'root',
})
class FeedbackControllerService extends __BaseService {
  static readonly getAllUsingGET2Path = '/feedback';
  static readonly deleteUsingPOST2Path = '/feedback/delete/{id}';
  static readonly getDoctorUsingGET1Path = '/feedback/doctor/{email}';
  static readonly getPatientUsingGETPath = '/feedback/patient/{email}';
  static readonly saveUsingPOST2Path = '/feedback/save';
  static readonly updateUsingPOST2Path = '/feedback/update/{id}';
  static readonly getOneUsingGET2Path = '/feedback/{id}';
  static readonly updateUsingPUT2Path = '/feedback/{id}';
  static readonly getUsingGET2Path = '/feedback/{itemsPerPage}/{pageNo}';

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
  getAllUsingGET2Response(): __Observable<__StrictHttpResponse<Array<Feedback>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feedback`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Feedback>>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET2(): __Observable<Array<Feedback>> {
    return this.getAllUsingGET2Response().pipe(
      __map(_r => _r.body as Array<Feedback>)
    );
  }

  /**
   * delete
   * @param params The `FeedbackControllerService.DeleteUsingPOST2Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST2Response(params: FeedbackControllerService.DeleteUsingPOST2Params): __Observable<__StrictHttpResponse<Feedback>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/feedback/delete/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Feedback>;
      })
    );
  }
  /**
   * delete
   * @param params The `FeedbackControllerService.DeleteUsingPOST2Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST2(params: FeedbackControllerService.DeleteUsingPOST2Params): __Observable<Feedback> {
    return this.deleteUsingPOST2Response(params).pipe(
      __map(_r => _r.body as Feedback)
    );
  }

  /**
   * getDoctor
   * @param email email
   * @return OK
   */
  getDoctorUsingGET1Response(email: string): __Observable<__StrictHttpResponse<Array<Feedback>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feedback/doctor/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Feedback>>;
      })
    );
  }
  /**
   * getDoctor
   * @param email email
   * @return OK
   */
  getDoctorUsingGET1(email: string): __Observable<Array<Feedback>> {
    return this.getDoctorUsingGET1Response(email).pipe(
      __map(_r => _r.body as Array<Feedback>)
    );
  }

  /**
   * getPatient
   * @param email email
   * @return OK
   */
  getPatientUsingGETResponse(email: string): __Observable<__StrictHttpResponse<Array<Feedback>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feedback/patient/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Feedback>>;
      })
    );
  }
  /**
   * getPatient
   * @param email email
   * @return OK
   */
  getPatientUsingGET(email: string): __Observable<Array<Feedback>> {
    return this.getPatientUsingGETResponse(email).pipe(
      __map(_r => _r.body as Array<Feedback>)
    );
  }

  /**
   * save
   * @param item item
   * @return OK
   */
  saveUsingPOST2Response(item: Feedback): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/feedback/save`,
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
  saveUsingPOST2(item: Feedback): __Observable<{}> {
    return this.saveUsingPOST2Response(item).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * update
   * @param params The `FeedbackControllerService.UpdateUsingPOST2Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST2Response(params: FeedbackControllerService.UpdateUsingPOST2Params): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/feedback/update/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `FeedbackControllerService.UpdateUsingPOST2Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST2(params: FeedbackControllerService.UpdateUsingPOST2Params): __Observable<{}> {
    return this.updateUsingPOST2Response(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET2Response(id: string): __Observable<__StrictHttpResponse<Feedback>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feedback/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Feedback>;
      })
    );
  }
  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET2(id: string): __Observable<Feedback> {
    return this.getOneUsingGET2Response(id).pipe(
      __map(_r => _r.body as Feedback)
    );
  }

  /**
   * update
   * @param params The `FeedbackControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2Response(params: FeedbackControllerService.UpdateUsingPUT2Params): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/feedback/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `FeedbackControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2(params: FeedbackControllerService.UpdateUsingPUT2Params): __Observable<{}> {
    return this.updateUsingPUT2Response(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * get
   * @param params The `FeedbackControllerService.GetUsingGET2Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET2Response(params: FeedbackControllerService.GetUsingGET2Params): __Observable<__StrictHttpResponse<PageFeedback>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feedback/${encodeURIComponent(String(params.itemsPerPage))}/${encodeURIComponent(String(params.pageNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageFeedback>;
      })
    );
  }
  /**
   * get
   * @param params The `FeedbackControllerService.GetUsingGET2Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET2(params: FeedbackControllerService.GetUsingGET2Params): __Observable<PageFeedback> {
    return this.getUsingGET2Response(params).pipe(
      __map(_r => _r.body as PageFeedback)
    );
  }
}

module FeedbackControllerService {

  /**
   * Parameters for deleteUsingPOST2
   */
  export interface DeleteUsingPOST2Params {

    /**
     * item
     */
    item: Feedback;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateUsingPOST2
   */
  export interface UpdateUsingPOST2Params {

    /**
     * item
     */
    item: Feedback;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateUsingPUT2
   */
  export interface UpdateUsingPUT2Params {

    /**
     * item
     */
    item: Feedback;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for getUsingGET2
   */
  export interface GetUsingGET2Params {

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

export { FeedbackControllerService }
