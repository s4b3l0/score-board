/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Disease } from '../models/disease';
import { PageDisease } from '../models/page-disease';

/**
 * Disease Controller
 */
@Injectable({
  providedIn: 'root',
})
class DiseaseControllerService extends __BaseService {
  static readonly getAllUsingGET1Path = '/disease';
  static readonly deleteUsingPOST1Path = '/disease/delete/{id}';
  static readonly getByPatientEmailUsingGETPath = '/disease/patient/{email}';
  static readonly saveUsingPOST1Path = '/disease/save';
  static readonly updateUsingPOST1Path = '/disease/update/{id}';
  static readonly getOneUsingGET1Path = '/disease/{id}';
  static readonly updateUsingPUT1Path = '/disease/{id}';
  static readonly getUsingGET1Path = '/disease/{itemsPerPage}/{pageNo}';

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
  getAllUsingGET1Response(): __Observable<__StrictHttpResponse<Array<Disease>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/disease`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Disease>>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET1(): __Observable<Array<Disease>> {
    return this.getAllUsingGET1Response().pipe(
      __map(_r => _r.body as Array<Disease>)
    );
  }

  /**
   * delete
   * @param params The `DiseaseControllerService.DeleteUsingPOST1Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST1Response(params: DiseaseControllerService.DeleteUsingPOST1Params): __Observable<__StrictHttpResponse<Disease>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/disease/delete/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Disease>;
      })
    );
  }
  /**
   * delete
   * @param params The `DiseaseControllerService.DeleteUsingPOST1Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  deleteUsingPOST1(params: DiseaseControllerService.DeleteUsingPOST1Params): __Observable<Disease> {
    return this.deleteUsingPOST1Response(params).pipe(
      __map(_r => _r.body as Disease)
    );
  }

  /**
   * getByPatientEmail
   * @param email email
   * @return OK
   */
  getByPatientEmailUsingGETResponse(email: string): __Observable<__StrictHttpResponse<Array<Disease>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/disease/patient/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Disease>>;
      })
    );
  }
  /**
   * getByPatientEmail
   * @param email email
   * @return OK
   */
  getByPatientEmailUsingGET(email: string): __Observable<Array<Disease>> {
    return this.getByPatientEmailUsingGETResponse(email).pipe(
      __map(_r => _r.body as Array<Disease>)
    );
  }

  /**
   * save
   * @param item item
   * @return OK
   */
  saveUsingPOST1Response(item: Disease): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = item;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/disease/save`,
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
  saveUsingPOST1(item: Disease): __Observable<{}> {
    return this.saveUsingPOST1Response(item).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * update
   * @param params The `DiseaseControllerService.UpdateUsingPOST1Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST1Response(params: DiseaseControllerService.UpdateUsingPOST1Params): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/disease/update/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `DiseaseControllerService.UpdateUsingPOST1Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPOST1(params: DiseaseControllerService.UpdateUsingPOST1Params): __Observable<{}> {
    return this.updateUsingPOST1Response(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET1Response(id: string): __Observable<__StrictHttpResponse<Disease>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/disease/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Disease>;
      })
    );
  }
  /**
   * getOne
   * @param id id
   * @return OK
   */
  getOneUsingGET1(id: string): __Observable<Disease> {
    return this.getOneUsingGET1Response(id).pipe(
      __map(_r => _r.body as Disease)
    );
  }

  /**
   * update
   * @param params The `DiseaseControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1Response(params: DiseaseControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.item;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/disease/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `DiseaseControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `item`: item
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1(params: DiseaseControllerService.UpdateUsingPUT1Params): __Observable<{}> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * get
   * @param params The `DiseaseControllerService.GetUsingGET1Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET1Response(params: DiseaseControllerService.GetUsingGET1Params): __Observable<__StrictHttpResponse<PageDisease>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/disease/${encodeURIComponent(String(params.itemsPerPage))}/${encodeURIComponent(String(params.pageNo))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageDisease>;
      })
    );
  }
  /**
   * get
   * @param params The `DiseaseControllerService.GetUsingGET1Params` containing the following parameters:
   *
   * - `pageNo`: pageNo
   *
   * - `itemsPerPage`: itemsPerPage
   *
   * @return OK
   */
  getUsingGET1(params: DiseaseControllerService.GetUsingGET1Params): __Observable<PageDisease> {
    return this.getUsingGET1Response(params).pipe(
      __map(_r => _r.body as PageDisease)
    );
  }
}

module DiseaseControllerService {

  /**
   * Parameters for deleteUsingPOST1
   */
  export interface DeleteUsingPOST1Params {

    /**
     * item
     */
    item: Disease;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateUsingPOST1
   */
  export interface UpdateUsingPOST1Params {

    /**
     * item
     */
    item: Disease;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * item
     */
    item: Disease;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for getUsingGET1
   */
  export interface GetUsingGET1Params {

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

export { DiseaseControllerService }
