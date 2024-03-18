/* tslint:disable */
/* eslint-disable */
/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Address } from '../models';
// @ts-ignore
import { CreateInvoice200Response } from '../models';
// @ts-ignore
import { CreateInvoiceRequest } from '../models';
// @ts-ignore
import { Discount } from '../models';
// @ts-ignore
import { FailedPaymentResponse } from '../models';
// @ts-ignore
import { GetInvoice200Response } from '../models';
// @ts-ignore
import { GetInvoices200ResponseInner } from '../models';
// @ts-ignore
import { LineItem } from '../models';
// @ts-ignore
import { Pickup } from '../models';
// @ts-ignore
import { Shipping } from '../models';
// @ts-ignore
import { Tax } from '../models';
// @ts-ignore
import { UpdateInvoiceRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InvoiceApi - axios parameter creator
 * @export
 */
export const InvoiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create invoice
         * @param {CreateInvoiceRequest} [createInvoiceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNew: async (createInvoiceRequest?: CreateInvoiceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invoices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiAccessAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "api-token", keyParamName: "apiAccessAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createInvoiceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/invoices',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createInvoiceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get invoice
         * @param {string} invoiceId The unique invoice Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (invoiceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'invoiceId' is not null or undefined
            assertParamExists('getById', 'invoiceId', invoiceId)
            const localVarPath = `/invoices/{invoiceId}`
                .replace(`{${"invoiceId"}}`, encodeURIComponent(String(invoiceId !== undefined ? invoiceId : `-invoiceId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiAccessAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "api-token", keyParamName: "apiAccessAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/invoices/{invoiceId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get invoices
         * @param {string} [invoiceNumber] The number of the invoice associated with the transaction
         * @param {string} [dateStart] Filters transactions created from 2020-01-01 (Mountain Time)
         * @param {string} [dateEnd] Filters transactions created until 2021-01-01 (Mountain Time)
         * @param {number} [withConvenienceFee] Include convenience fee of each invoice 0 | 1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (invoiceNumber?: string, dateStart?: string, dateEnd?: string, withConvenienceFee?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invoices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiAccessAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "api-token", keyParamName: "apiAccessAuth", configuration })
            if (invoiceNumber !== undefined) {
                localVarQueryParameter['invoiceNumber'] = invoiceNumber;
            }

            if (dateStart !== undefined) {
                localVarQueryParameter['dateStart'] = dateStart;
            }

            if (dateEnd !== undefined) {
                localVarQueryParameter['dateEnd'] = dateEnd;
            }

            if (withConvenienceFee !== undefined) {
                localVarQueryParameter['withConvenienceFee'] = withConvenienceFee;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/invoices',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update invoice
         * @param {string} invoiceId The unique invoice Id
         * @param {UpdateInvoiceRequest} [updateInvoiceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDetails: async (invoiceId: string, updateInvoiceRequest?: UpdateInvoiceRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'invoiceId' is not null or undefined
            assertParamExists('updateDetails', 'invoiceId', invoiceId)
            const localVarPath = `/invoices/{invoiceId}`
                .replace(`{${"invoiceId"}}`, encodeURIComponent(String(invoiceId !== undefined ? invoiceId : `-invoiceId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiAccessAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "api-token", keyParamName: "apiAccessAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateInvoiceRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/invoices/{invoiceId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateInvoiceRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InvoiceApi - functional programming interface
 * @export
 */
export const InvoiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InvoiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create invoice
         * @param {InvoiceApiCreateNewRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNew(requestParameters: InvoiceApiCreateNewRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateInvoice200Response>> {
            const createInvoiceRequest: CreateInvoiceRequest = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNew(createInvoiceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get invoice
         * @param {InvoiceApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: InvoiceApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInvoice200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.invoiceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get invoices
         * @param {InvoiceApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: InvoiceApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetInvoices200ResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.invoiceNumber, requestParameters.dateStart, requestParameters.dateEnd, requestParameters.withConvenienceFee, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update invoice
         * @param {InvoiceApiUpdateDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDetails(requestParameters: InvoiceApiUpdateDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInvoice200Response>> {
            const updateInvoiceRequest: UpdateInvoiceRequest = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDetails(requestParameters.invoiceId, updateInvoiceRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InvoiceApi - factory interface
 * @export
 */
export const InvoiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InvoiceApiFp(configuration)
    return {
        /**
         * 
         * @summary Create invoice
         * @param {InvoiceApiCreateNewRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNew(requestParameters: InvoiceApiCreateNewRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CreateInvoice200Response> {
            return localVarFp.createNew(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get invoice
         * @param {InvoiceApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: InvoiceApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<GetInvoice200Response> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get invoices
         * @param {InvoiceApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: InvoiceApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<GetInvoices200ResponseInner>> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update invoice
         * @param {InvoiceApiUpdateDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDetails(requestParameters: InvoiceApiUpdateDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<GetInvoice200Response> {
            return localVarFp.updateDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNew operation in InvoiceApi.
 * @export
 * @interface InvoiceApiCreateNewRequest
 */
export type InvoiceApiCreateNewRequest = {
    
} & CreateInvoiceRequest

/**
 * Request parameters for getById operation in InvoiceApi.
 * @export
 * @interface InvoiceApiGetByIdRequest
 */
export type InvoiceApiGetByIdRequest = {
    
    /**
    * The unique invoice Id
    * @type {string}
    * @memberof InvoiceApiGetById
    */
    readonly invoiceId: string
    
}

/**
 * Request parameters for list operation in InvoiceApi.
 * @export
 * @interface InvoiceApiListRequest
 */
export type InvoiceApiListRequest = {
    
    /**
    * The number of the invoice associated with the transaction
    * @type {string}
    * @memberof InvoiceApiList
    */
    readonly invoiceNumber?: string
    
    /**
    * Filters transactions created from 2020-01-01 (Mountain Time)
    * @type {string}
    * @memberof InvoiceApiList
    */
    readonly dateStart?: string
    
    /**
    * Filters transactions created until 2021-01-01 (Mountain Time)
    * @type {string}
    * @memberof InvoiceApiList
    */
    readonly dateEnd?: string
    
    /**
    * Include convenience fee of each invoice 0 | 1
    * @type {number}
    * @memberof InvoiceApiList
    */
    readonly withConvenienceFee?: number
    
}

/**
 * Request parameters for updateDetails operation in InvoiceApi.
 * @export
 * @interface InvoiceApiUpdateDetailsRequest
 */
export type InvoiceApiUpdateDetailsRequest = {
    
    /**
    * The unique invoice Id
    * @type {string}
    * @memberof InvoiceApiUpdateDetails
    */
    readonly invoiceId: string
    
} & UpdateInvoiceRequest

/**
 * InvoiceApiGenerated - object-oriented interface
 * @export
 * @class InvoiceApiGenerated
 * @extends {BaseAPI}
 */
export class InvoiceApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create invoice
     * @param {InvoiceApiCreateNewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApiGenerated
     */
    public createNew(requestParameters: InvoiceApiCreateNewRequest = {}, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).createNew(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get invoice
     * @param {InvoiceApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApiGenerated
     */
    public getById(requestParameters: InvoiceApiGetByIdRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get invoices
     * @param {InvoiceApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApiGenerated
     */
    public list(requestParameters: InvoiceApiListRequest = {}, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update invoice
     * @param {InvoiceApiUpdateDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApiGenerated
     */
    public updateDetails(requestParameters: InvoiceApiUpdateDetailsRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).updateDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}