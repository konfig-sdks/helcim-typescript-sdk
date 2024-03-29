/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { PaymentRequestInvoice } from './payment-request-invoice';

/**
 * 
 * @export
 * @interface PaymentRequest
 */
export interface PaymentRequest {
    /**
     * IP address of the customer making the transaction, used as part of fraud detection.
     * @type {string}
     * @memberof PaymentRequest
     */
    'ipAddress': string;
    /**
     * Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.
     * @type {boolean}
     * @memberof PaymentRequest
     */
    'ecommerce'?: boolean;
    /**
     * For card transactions only. Id of the terminal you would want to use. Default terminal for of the currency will be used if you dont send this.
     * @type {number}
     * @memberof PaymentRequest
     */
    'terminalId'?: number;
    /**
     * The currency abbreviation of the invoice, such as CAD or USD. This should match currency of existing invoice.
     * @type {string}
     * @memberof PaymentRequest
     */
    'currency': string;
    /**
     * Amount to be processed
     * @type {number}
     * @memberof PaymentRequest
     */
    'amount': number;
    /**
     * Existing customer code associated with the transaction
     * @type {string}
     * @memberof PaymentRequest
     */
    'customerCode'?: string;
    /**
     * To be filled when associating transaction to existing invoice. Invoice should be associated to the same customer linked to the card
     * @type {string}
     * @memberof PaymentRequest
     */
    'invoiceNumber'?: string;
    /**
     * 
     * @type {PaymentRequestInvoice}
     * @memberof PaymentRequest
     */
    'invoice'?: PaymentRequestInvoice;
    /**
     * 
     * @type {Address}
     * @memberof PaymentRequest
     */
    'billingAddress'?: Address;
}

