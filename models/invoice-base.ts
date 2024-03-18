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
 * @interface InvoiceBase
 */
export interface InvoiceBase {
    /**
     * Invoice number of invoice to be created. Will be generated if blank
     * @type {string}
     * @memberof InvoiceBase
     */
    'invoiceNumber'?: string;
    /**
     * Tip amount
     * @type {number}
     * @memberof InvoiceBase
     */
    'tipAmount'?: number;
    /**
     * Deposit amount
     * @type {number}
     * @memberof InvoiceBase
     */
    'depositAmount'?: number;
    /**
     * Comment to appear at the bottom of the invoice, visible to the customer.
     * @type {string}
     * @memberof InvoiceBase
     */
    'notes'?: string;
}
