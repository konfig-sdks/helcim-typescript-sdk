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
 * @interface HelcimPayInitializeRequest
 */
export interface HelcimPayInitializeRequest {
    /**
     * Payment Type. Valid payment types are purchase | preauth | verify
     * @type {string}
     * @memberof HelcimPayInitializeRequest
     */
    'paymentType': string;
    /**
     * The amount of the transaction to be processed
     * @type {number}
     * @memberof HelcimPayInitializeRequest
     */
    'amount': number;
    /**
     * Currency abbreviation. CAD | USD
     * @type {string}
     * @memberof HelcimPayInitializeRequest
     */
    'currency': string;
    /**
     * This is the code of an existing customer in Helcim associated with this checkout
     * @type {string}
     * @memberof HelcimPayInitializeRequest
     */
    'customerCode'?: string;
    /**
     * This is the number of an existing invoice in Helcim associated with this checkout
     * @type {string}
     * @memberof HelcimPayInitializeRequest
     */
    'invoiceNumber'?: string;
    /**
     * This is the payment method (credit card, ACH) that customer can use to pay the amount. cc | ach | cc-ach
     * @type {string}
     * @memberof HelcimPayInitializeRequest
     */
    'paymentMethod'?: string;
    /**
     * This is used to determine whether the partial payment UI will be displayed to the customer
     * @type {number}
     * @memberof HelcimPayInitializeRequest
     */
    'allowPartial'?: number;
    /**
     * This is used to apply the convenience fee rate to credit card transaction should customer chooses this payment method
     * @type {number}
     * @memberof HelcimPayInitializeRequest
     */
    'hasConvenienceFee'?: number;
    /**
     * This is used to enable level 2 processing lower rates. The value should be the dollar amount of the tax to 2 decimal places.
     * @type {number}
     * @memberof HelcimPayInitializeRequest
     */
    'taxAmount'?: number;
}
