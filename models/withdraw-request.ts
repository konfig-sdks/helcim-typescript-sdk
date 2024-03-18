/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { BankData } from './bank-data';
import { BankDataBankData } from './bank-data-bank-data';
import { PaymentRequest } from './payment-request';
import { PaymentRequestInvoice } from './payment-request-invoice';

/**
 * @type WithdrawRequest
 * @export
 */
export type WithdrawRequest = BankData & PaymentRequest;


