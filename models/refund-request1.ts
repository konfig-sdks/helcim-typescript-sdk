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
 * @interface RefundRequest1
 */
export interface RefundRequest1 {
    /**
     * The transaction ID of the original transaction.
     * @type {number}
     * @memberof RefundRequest1
     */
    'cardTransactionId': number;
    /**
     * IP address of the customer making the transaction, used as part of fraud detection.
     * @type {string}
     * @memberof RefundRequest1
     */
    'ipAddress': string;
    /**
     * Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.
     * @type {boolean}
     * @memberof RefundRequest1
     */
    'ecommerce'?: boolean;
}

