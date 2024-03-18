/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { Card } from './card';
import { VerifyRequestInvoice } from './verify-request-invoice';

/**
 * 
 * @export
 * @interface VerifyRequest
 */
export interface VerifyRequest {
    /**
     * IP address of the customer making the transaction, used as part of fraud detection.
     * @type {string}
     * @memberof VerifyRequest
     */
    'ipAddress': string;
    /**
     * Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.
     * @type {boolean}
     * @memberof VerifyRequest
     */
    'ecommerce'?: boolean;
    /**
     * The currency abbreviation of the transaction.
     * @type {string}
     * @memberof VerifyRequest
     */
    'currency': string;
    /**
     * Existing customer code associated with the transaction
     * @type {string}
     * @memberof VerifyRequest
     */
    'customerCode'?: string;
    /**
     * To be filled when associating transaction to existing invoice. Invoice should be associated to the same customer linked to the card
     * @type {string}
     * @memberof VerifyRequest
     */
    'invoiceNumber'?: string;
    /**
     * 
     * @type {VerifyRequestInvoice}
     * @memberof VerifyRequest
     */
    'invoice'?: VerifyRequestInvoice;
    /**
     * 
     * @type {Card}
     * @memberof VerifyRequest
     */
    'cardData': Card;
    /**
     * 
     * @type {Address}
     * @memberof VerifyRequest
     */
    'billingAddress': Address;
}
