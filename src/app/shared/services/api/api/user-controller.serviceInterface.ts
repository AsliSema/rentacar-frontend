/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateUserRequest } from '../model/models';
import { CreatedUserResponse } from '../model/models';
import { Get400Response } from '../model/models';
import { GetAllUserResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AddRequestParams {
    createUserRequest: CreateUserRequest;
}


export interface UserControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    add(requestParameters: AddRequestParams, extraHttpRequestParams?: any): Observable<CreatedUserResponse>;

    /**
     * 
     * 
*/
    getAll(extraHttpRequestParams?: any): Observable<Array<GetAllUserResponse>>;

}