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
 * @interface Invoice
 */
export interface Invoice {
    /**
     * Date the invoice is created.
     * @type {string}
     * @memberof Invoice
     */
    'dateCreated'?: string;
    /**
     * Date the invoice is updated.
     * @type {string}
     * @memberof Invoice
     */
    'dateUpdated'?: string;
    /**
     * Date the invoice is paid.
     * @type {string}
     * @memberof Invoice
     */
    'datePaid'?: string;
    /**
     * Date the invoice is paid.
     * @type {string}
     * @memberof Invoice
     */
    'dateIssued'?: string;
    /**
     * The status of the invoice, such as due | paid | completed | refunded.
     * @type {string}
     * @memberof Invoice
     */
    'status'?: string;
    /**
     * The id of customer associated to the invoice.
     * @type {number}
     * @memberof Invoice
     */
    'customerId'?: number;
    /**
     * The total amount of the invoice.
     * @type {number}
     * @memberof Invoice
     */
    'amount'?: number;
    /**
     * The total convenience fee paid for the invoice.
     * @type {number}
     * @memberof Invoice
     */
    'convenienceFee'?: number;
}

