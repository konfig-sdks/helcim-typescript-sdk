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
 * @interface CaptureRequest
 */
export interface CaptureRequest {
    /**
     * The transaction ID of the original pre-authorization transaction.
     * @type {number}
     * @memberof CaptureRequest
     */
    'preAuthTransactionId': number;
    /**
     * The amount to capture. Must be less or equal to the original pre-authorization amount.
     * @type {number}
     * @memberof CaptureRequest
     */
    'amount': number;
    /**
     * IP address of the customer making the transaction, used as part of fraud detection.
     * @type {string}
     * @memberof CaptureRequest
     */
    'ipAddress': string;
    /**
     * Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.
     * @type {boolean}
     * @memberof CaptureRequest
     */
    'ecommerce'?: boolean;
}
