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
import { CardBatch } from '../models';
// @ts-ignore
import { FailedPaymentResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CardBatchApi - axios parameter creator
 * @export
 */
export const CardBatchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Card Batches
         * @param {number} [batchNumber] The number of the batch to retrieve. Note that this is the batch number, not batch ID.
         * @param {number} [terminalId] The terminalId of the requested batch
         * @param {'true' | 'false'} [collectStats] Includes transaction statistics for the batch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (batchNumber?: number, terminalId?: number, collectStats?: 'true' | 'false', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/card-batches`;
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
            if (batchNumber !== undefined) {
                localVarQueryParameter['batchNumber'] = batchNumber;
            }

            if (terminalId !== undefined) {
                localVarQueryParameter['terminalId'] = terminalId;
            }

            if (collectStats !== undefined) {
                localVarQueryParameter['collect-stats'] = collectStats;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/card-batches',
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
         * @summary Get Card Batch
         * @param {number} cardBatchId The Card Batch Id of the Card Batch you want to get
         * @param {'true' | 'false'} [collectStats] Includes transaction statistics for the batch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (cardBatchId: number, collectStats?: 'true' | 'false', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardBatchId' is not null or undefined
            assertParamExists('getDetails', 'cardBatchId', cardBatchId)
            const localVarPath = `/card-batches/{cardBatchId}`
                .replace(`{${"cardBatchId"}}`, encodeURIComponent(String(cardBatchId !== undefined ? cardBatchId : `-cardBatchId-`)));
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
            if (collectStats !== undefined) {
                localVarQueryParameter['collect-stats'] = collectStats;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/card-batches/{cardBatchId}',
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
         * @summary Settles an Open Card Batch
         * @param {number} cardBatchId The Card Batch Id of the Card Batch you want to settle
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        settleBatch: async (cardBatchId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardBatchId' is not null or undefined
            assertParamExists('settleBatch', 'cardBatchId', cardBatchId)
            const localVarPath = `/card-batches/{cardBatchId}/settle`
                .replace(`{${"cardBatchId"}}`, encodeURIComponent(String(cardBatchId !== undefined ? cardBatchId : `-cardBatchId-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/card-batches/{cardBatchId}/settle',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CardBatchApi - functional programming interface
 * @export
 */
export const CardBatchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardBatchApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Card Batches
         * @param {CardBatchApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: CardBatchApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CardBatch>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.batchNumber, requestParameters.terminalId, requestParameters.collectStats, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Card Batch
         * @param {CardBatchApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: CardBatchApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CardBatch>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.cardBatchId, requestParameters.collectStats, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Settles an Open Card Batch
         * @param {CardBatchApiSettleBatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async settleBatch(requestParameters: CardBatchApiSettleBatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CardBatch>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.settleBatch(requestParameters.cardBatchId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CardBatchApi - factory interface
 * @export
 */
export const CardBatchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CardBatchApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Card Batches
         * @param {CardBatchApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: CardBatchApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<CardBatch>> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Card Batch
         * @param {CardBatchApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: CardBatchApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<CardBatch> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Settles an Open Card Batch
         * @param {CardBatchApiSettleBatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        settleBatch(requestParameters: CardBatchApiSettleBatchRequest, options?: AxiosRequestConfig): AxiosPromise<CardBatch> {
            return localVarFp.settleBatch(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in CardBatchApi.
 * @export
 * @interface CardBatchApiGetAllRequest
 */
export type CardBatchApiGetAllRequest = {
    
    /**
    * The number of the batch to retrieve. Note that this is the batch number, not batch ID.
    * @type {number}
    * @memberof CardBatchApiGetAll
    */
    readonly batchNumber?: number
    
    /**
    * The terminalId of the requested batch
    * @type {number}
    * @memberof CardBatchApiGetAll
    */
    readonly terminalId?: number
    
    /**
    * Includes transaction statistics for the batch
    * @type {'true' | 'false'}
    * @memberof CardBatchApiGetAll
    */
    readonly collectStats?: 'true' | 'false'
    
}

/**
 * Request parameters for getDetails operation in CardBatchApi.
 * @export
 * @interface CardBatchApiGetDetailsRequest
 */
export type CardBatchApiGetDetailsRequest = {
    
    /**
    * The Card Batch Id of the Card Batch you want to get
    * @type {number}
    * @memberof CardBatchApiGetDetails
    */
    readonly cardBatchId: number
    
    /**
    * Includes transaction statistics for the batch
    * @type {'true' | 'false'}
    * @memberof CardBatchApiGetDetails
    */
    readonly collectStats?: 'true' | 'false'
    
}

/**
 * Request parameters for settleBatch operation in CardBatchApi.
 * @export
 * @interface CardBatchApiSettleBatchRequest
 */
export type CardBatchApiSettleBatchRequest = {
    
    /**
    * The Card Batch Id of the Card Batch you want to settle
    * @type {number}
    * @memberof CardBatchApiSettleBatch
    */
    readonly cardBatchId: number
    
}

/**
 * CardBatchApiGenerated - object-oriented interface
 * @export
 * @class CardBatchApiGenerated
 * @extends {BaseAPI}
 */
export class CardBatchApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Card Batches
     * @param {CardBatchApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardBatchApiGenerated
     */
    public getAll(requestParameters: CardBatchApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return CardBatchApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Card Batch
     * @param {CardBatchApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardBatchApiGenerated
     */
    public getDetails(requestParameters: CardBatchApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return CardBatchApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Settles an Open Card Batch
     * @param {CardBatchApiSettleBatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardBatchApiGenerated
     */
    public settleBatch(requestParameters: CardBatchApiSettleBatchRequest, options?: AxiosRequestConfig) {
        return CardBatchApiFp(this.configuration).settleBatch(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
