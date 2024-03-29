/*
The Helcim API

This API covers publicly accessible merchant actions

The version of the OpenAPI document: 2.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  CardBatchApi,
  CardTerminalApi,
  CardTransactionApi,
  CustomerApi,
  GeneralApi,
  HelcimPayApi,
  InvoiceApi,
  PaymentApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { HelcimCustom } from "./client-custom";

export class Helcim extends HelcimCustom {
  readonly cardBatch: CardBatchApi;
  readonly cardTerminal: CardTerminalApi;
  readonly cardTransaction: CardTransactionApi;
  readonly customer: CustomerApi;
  readonly general: GeneralApi;
  readonly helcimPay: HelcimPayApi;
  readonly invoice: InvoiceApi;
  readonly payment: PaymentApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.cardBatch = new CardBatchApi(configuration);
    this.cardTerminal = new CardTerminalApi(configuration);
    this.cardTransaction = new CardTransactionApi(configuration);
    this.customer = new CustomerApi(configuration);
    this.general = new GeneralApi(configuration);
    this.helcimPay = new HelcimPayApi(configuration);
    this.invoice = new InvoiceApi(configuration);
    this.payment = new PaymentApi(configuration);
  }

}
