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
 * @interface CardToken
 */
export interface CardToken {
    /**
     * The token for the card on file. If Customer Code is filled, The card should must be owned by a passed customer code
     * @type {string}
     * @memberof CardToken
     */
    'cardToken': string;
}
