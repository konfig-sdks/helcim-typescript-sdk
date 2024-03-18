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
 * @interface SuccessfulPaymentResponse
 */
export interface SuccessfulPaymentResponse {
    /**
     * The transaction id
     * @type {number}
     * @memberof SuccessfulPaymentResponse
     */
    'transactionId'?: number;
    /**
     * The id of associated card batch
     * @type {number}
     * @memberof SuccessfulPaymentResponse
     */
    'cardBatchId'?: number;
    /**
     * The date(Mountain Time) when the transaction is created.
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'dateCreated'?: string;
    /**
     * The status of the transaction. possible values are APPROVED | DECLINED
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'status'?: string;
    /**
     * Full name of the user who processed the transaction. Default value is Helcim System
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'user'?: string;
    /**
     * The type of the transaction. possible values are purchase | preauth | verify
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'type'?: string;
    /**
     * The amount of processed transaction
     * @type {number}
     * @memberof SuccessfulPaymentResponse
     */
    'amount'?: number;
    /**
     * The abbreviation of the transaction\'s currency
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'currency'?: string;
    /**
     * AVS Response
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'avsResponse'?: string;
    /**
     * CVV Response
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'cvvResponse'?: string;
    /**
     * Approval Code
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'approvalCode'?: string;
    /**
     * Card token associated to the transaction
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'cardToken'?: string;
    /**
     * First-6 Last-4 numbers of the card number associated to the transaction
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'cardNumber'?: string;
    /**
     * Cardholdername associated to the transaction
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'cardHolderName'?: string;
    /**
     * Customer code associated to the transaction
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'customerCode'?: string;
    /**
     * Invoice number associated to the transaction
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'invoiceNumber'?: string;
    /**
     * Warnings
     * @type {string}
     * @memberof SuccessfulPaymentResponse
     */
    'warning'?: string;
}

