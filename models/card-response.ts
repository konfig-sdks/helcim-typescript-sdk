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
 * @interface CardResponse
 */
export interface CardResponse {
    /**
     * The id of the card.
     * @type {number}
     * @memberof CardResponse
     */
    'id'?: number;
    /**
     * The card token.
     * @type {string}
     * @memberof CardResponse
     */
    'cardToken'?: string;
    /**
     * The date when the card is created.
     * @type {string}
     * @memberof CardResponse
     */
    'dateCreated'?: string;
    /**
     * The date when the card last got updated.
     * @type {string}
     * @memberof CardResponse
     */
    'dateUpdated'?: string;
    /**
     * The cardholder name.
     * @type {string}
     * @memberof CardResponse
     */
    'cardHolderName'?: string;
    /**
     * The first-six and last-four card numbers.
     * @type {string}
     * @memberof CardResponse
     */
    'cardF6L4'?: string;
    /**
     * The card expiry date, in MMYY format (total of 4 digits without spaces or slashes).
     * @type {string}
     * @memberof CardResponse
     */
    'cardExpiry'?: string;
    /**
     * The card CVV (3-4 digits on back of credit card).
     * @type {string}
     * @memberof CardResponse
     */
    'cardCVV'?: string;
}
