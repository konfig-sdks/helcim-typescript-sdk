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
 * @interface Card
 */
export interface Card {
    /**
     * The full card number (13 to 16 digits) from merchant to process \"purchase\", \"pre-auth\", and \"verify\" transactions.
     * @type {string}
     * @memberof Card
     */
    'cardNumber': string;
    /**
     * The card expiry date, in MMYY format (total of 4 digits without spaces or slashes).
     * @type {string}
     * @memberof Card
     */
    'cardExpiry': string;
    /**
     * The card CVV (3-4 digits on back of credit card).
     * @type {string}
     * @memberof Card
     */
    'cardCVV': string;
}

