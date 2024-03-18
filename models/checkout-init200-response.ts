/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CheckoutInit200Response
 */
export interface CheckoutInit200Response {
    /**
     * The checkout token is used to initialize Helcim Pay
     * @type {string}
     * @memberof CheckoutInit200Response
     */
    'checkoutToken'?: string;
    /**
     * The secret token is used to validate the transaction response
     * @type {string}
     * @memberof CheckoutInit200Response
     */
    'secretToken'?: string;
}

