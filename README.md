<div align="center">

[![Visit Helcim](./header.png)](https://www.helcim.com&#x2F;)

# [Helcim](https://www.helcim.com&#x2F;)<a id="helcim"></a>

This API covers publicly accessible merchant actions

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`helcim.cardBatch.getAll`](#helcimcardbatchgetall)
  * [`helcim.cardBatch.getDetails`](#helcimcardbatchgetdetails)
  * [`helcim.cardBatch.settleBatch`](#helcimcardbatchsettlebatch)
  * [`helcim.cardTerminal.getAll`](#helcimcardterminalgetall)
  * [`helcim.cardTransaction.collectTransactions`](#helcimcardtransactioncollecttransactions)
  * [`helcim.cardTransaction.getById`](#helcimcardtransactiongetbyid)
  * [`helcim.customer.createNewCustomer`](#helcimcustomercreatenewcustomer)
  * [`helcim.customer.getBankAccount`](#helcimcustomergetbankaccount)
  * [`helcim.customer.getBankAccounts`](#helcimcustomergetbankaccounts)
  * [`helcim.customer.getCardDetails`](#helcimcustomergetcarddetails)
  * [`helcim.customer.getCards`](#helcimcustomergetcards)
  * [`helcim.customer.getCustomer`](#helcimcustomergetcustomer)
  * [`helcim.customer.list`](#helcimcustomerlist)
  * [`helcim.customer.setBankAccountDefault`](#helcimcustomersetbankaccountdefault)
  * [`helcim.customer.updateDetails`](#helcimcustomerupdatedetails)
  * [`helcim.general.testConnectivityToHelcimApi`](#helcimgeneraltestconnectivitytohelcimapi)
  * [`helcim.helcimPay.createCheckoutSession`](#helcimhelcimpaycreatecheckoutsession)
  * [`helcim.invoice.createNew`](#helciminvoicecreatenew)
  * [`helcim.invoice.getById`](#helciminvoicegetbyid)
  * [`helcim.invoice.list`](#helciminvoicelist)
  * [`helcim.invoice.updateDetails`](#helciminvoiceupdatedetails)
  * [`helcim.payment.processCaptureTransaction`](#helcimpaymentprocesscapturetransaction)
  * [`helcim.payment.processPreauthTransaction`](#helcimpaymentprocesspreauthtransaction)
  * [`helcim.payment.processPurchaseTransaction`](#helcimpaymentprocesspurchasetransaction)
  * [`helcim.payment.processRefundTransaction`](#helcimpaymentprocessrefundtransaction)
  * [`helcim.payment.processWithdrawalTransaction`](#helcimpaymentprocesswithdrawaltransaction)
  * [`helcim.payment.reverseTransaction`](#helcimpaymentreversetransaction)
  * [`helcim.payment.verifyTransaction`](#helcimpaymentverifytransaction)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Helcim&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Helcim } from "helcim-typescript-sdk";

const helcim = new Helcim({
  // Defining the base path is optional and defaults to https://api.helcim.com/v2
  // basePath: "https://api.helcim.com/v2",
  apiKey: "API_KEY",
});

const getAllResponse = await helcim.cardBatch.getAll({
  collectStats: "true",
});

console.log(getAllResponse);
```

## Reference<a id="reference"></a>


### `helcim.cardBatch.getAll`<a id="helcimcardbatchgetall"></a>

Get Card Batches

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await helcim.cardBatch.getAll({
  collectStats: "true",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchNumber: `number`<a id="batchnumber-number"></a>

The number of the batch to retrieve. Note that this is the batch number, not batch ID.

##### terminalId: `number`<a id="terminalid-number"></a>

The terminalId of the requested batch

##### collectStats: `'true' | 'false'`<a id="collectstats-true--false"></a>

Includes transaction statistics for the batch

#### 🔄 Return<a id="🔄-return"></a>

[CardBatch](./models/card-batch.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/card-batches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.cardBatch.getDetails`<a id="helcimcardbatchgetdetails"></a>

Get Card Batch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await helcim.cardBatch.getDetails({
  cardBatchId: 1,
  collectStats: "true",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardBatchId: `number`<a id="cardbatchid-number"></a>

The Card Batch Id of the Card Batch you want to get

##### collectStats: `'true' | 'false'`<a id="collectstats-true--false"></a>

Includes transaction statistics for the batch

#### 🔄 Return<a id="🔄-return"></a>

[CardBatch](./models/card-batch.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/card-batches/{cardBatchId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.cardBatch.settleBatch`<a id="helcimcardbatchsettlebatch"></a>

Settles an Open Card Batch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const settleBatchResponse = await helcim.cardBatch.settleBatch({
  cardBatchId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardBatchId: `number`<a id="cardbatchid-number"></a>

The Card Batch Id of the Card Batch you want to settle

#### 🔄 Return<a id="🔄-return"></a>

[CardBatch](./models/card-batch.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/card-batches/{cardBatchId}/settle` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.cardTerminal.getAll`<a id="helcimcardterminalgetall"></a>

Get card terminals

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await helcim.cardTerminal.getAll({
  currency: "CAD",
  status: "ACTIVE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency: `string`<a id="currency-string"></a>

The abbreviation of card terminal\\\'s currency. Possible values are CAD | USD

##### status: `string`<a id="status-string"></a>

The card terminal\\\'s status. possible values are ACTIVE | INACTIVE

#### 🔄 Return<a id="🔄-return"></a>

[CardTerminal](./models/card-terminal.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/card-terminals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.cardTransaction.collectTransactions`<a id="helcimcardtransactioncollecttransactions"></a>

Collects up to 1000 Card Transactions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const collectTransactionsResponse =
  await helcim.cardTransaction.collectTransactions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dateFrom: `string`<a id="datefrom-string"></a>

Filters transactions created from 2020-01-01 (Mountain Time)

##### dateTo: `string`<a id="dateto-string"></a>

Filters transactions created until 2021-01-01 (Mountain Time)

##### search: `string`<a id="search-string"></a>

Searches amount, card number(F4L4 only), cardholder name, & approval codes

##### customerCode: `string`<a id="customercode-string"></a>

The code of the customer associated with the transaction

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

The number of the invoice associated with the transaction

##### cardToken: `string`<a id="cardtoken-string"></a>

The token of the card associated with the transaction

##### cardBatchId: `number`<a id="cardbatchid-number"></a>

The id of the batch associated with the transaction

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/card-transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.cardTransaction.getById`<a id="helcimcardtransactiongetbyid"></a>

Get Card Transaction by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await helcim.cardTransaction.getById({
  cardTransactionId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardTransactionId: `number`<a id="cardtransactionid-number"></a>

The Card Transaction Id of the Card Transaction you want to get

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/card-transactions/{cardTransactionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.createNewCustomer`<a id="helcimcustomercreatenewcustomer"></a>

Create customer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewCustomerResponse = await helcim.customer.createNewCustomer({
  customerCode: "CST1000",
  contactName: "John Smith",
  businessName: "Best Company",
  cellPhone: "908-295-4902",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerCode: `string`<a id="customercode-string"></a>

The unique customer code. If blank, it will be automatically generated.

##### contactName: `string`<a id="contactname-string"></a>

The primary contact name (full name) of the customer.

##### businessName: `string`<a id="businessname-string"></a>

The business name of the customer. There must be either a contact name or business name present.

##### cellPhone: `string`<a id="cellphone-string"></a>

The cell phone number of the customer.

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### shippingAddress: [`Address`](./models/address.ts)<a id="shippingaddress-addressmodelsaddressts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Customer](./models/customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.getBankAccount`<a id="helcimcustomergetbankaccount"></a>

Get customer bank account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBankAccountResponse = await helcim.customer.getBankAccount({
  customerId: 1,
  bankAccountId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `number`<a id="customerid-number"></a>

The Id of the customer

##### bankAccountId: `number`<a id="bankaccountid-number"></a>

The Id of the bank account

#### 🔄 Return<a id="🔄-return"></a>

[BankAccountResponse](./models/bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}/bank-accounts/{bankAccountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.getBankAccounts`<a id="helcimcustomergetbankaccounts"></a>

Get customer bank accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBankAccountsResponse = await helcim.customer.getBankAccounts({
  customerId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `number`<a id="customerid-number"></a>

The Id of the customer

##### bankToken: `string`<a id="banktoken-string"></a>

The bank account token.

##### verified: `number`<a id="verified-number"></a>

Check if bank account is verified or not. use 1 or 0.

##### ready: `number`<a id="ready-number"></a>

Check if bank account is ready or not. use 1 or 0.

#### 🔄 Return<a id="🔄-return"></a>

[BankAccountResponse](./models/bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}/bank-accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.getCardDetails`<a id="helcimcustomergetcarddetails"></a>

Get customer card

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardDetailsResponse = await helcim.customer.getCardDetails({
  customerId: 1,
  cardId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `number`<a id="customerid-number"></a>

The Id of the customer

##### cardId: `number`<a id="cardid-number"></a>

The Id of the card

#### 🔄 Return<a id="🔄-return"></a>

[CardResponse](./models/card-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}/cards/{cardId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.getCards`<a id="helcimcustomergetcards"></a>

Get customer cards

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardsResponse = await helcim.customer.getCards({
  customerId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `number`<a id="customerid-number"></a>

The Id of the customer

##### cardToken: `string`<a id="cardtoken-string"></a>

The card token.

#### 🔄 Return<a id="🔄-return"></a>

[CardResponse](./models/card-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}/cards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.getCustomer`<a id="helcimcustomergetcustomer"></a>

Get customer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerResponse = await helcim.customer.getCustomer({
  customerId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `number`<a id="customerid-number"></a>

The Id of the customer

#### 🔄 Return<a id="🔄-return"></a>

[Customer](./models/customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.list`<a id="helcimcustomerlist"></a>

Get customers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await helcim.customer.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### search: `string`<a id="search-string"></a>

The search term to be used for partial matching on contactName, businessName, customerCode, city, phone and email (Only use one query field per request).

##### customerCode: `string`<a id="customercode-string"></a>

Existing customer code (Only use one query field per request).

#### 🔄 Return<a id="🔄-return"></a>

[Customer](./models/customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.setBankAccountDefault`<a id="helcimcustomersetbankaccountdefault"></a>

Set customer bank account as default

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setBankAccountDefaultResponse =
  await helcim.customer.setBankAccountDefault({
    customerId: 1,
    bankAccountId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `number`<a id="customerid-number"></a>

The Id of the customer

##### bankAccountId: `number`<a id="bankaccountid-number"></a>

The Id of the bank account

#### 🔄 Return<a id="🔄-return"></a>

[BankAccountResponse](./models/bank-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}/bank-accounts/{bankAccountId}/default` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.customer.updateDetails`<a id="helcimcustomerupdatedetails"></a>

Update customer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDetailsResponse = await helcim.customer.updateDetails({
  customerId: "customerId_example",
  customerCode: "CST1000",
  contactName: "John Smith",
  businessName: "Best Company",
  cellPhone: "908-295-4902",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Id of the customer

##### customerCode: `string`<a id="customercode-string"></a>

The unique customer code.

##### contactName: `string`<a id="contactname-string"></a>

The primary contact name (full name) of the customer.

##### businessName: `string`<a id="businessname-string"></a>

The business name of the customer. There must be either a contact name or business name present.

##### cellPhone: `string`<a id="cellphone-string"></a>

The cell phone number of the customer.

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### shippingAddress: [`Address`](./models/address.ts)<a id="shippingaddress-addressmodelsaddressts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Customer](./models/customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/{customerId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.general.testConnectivityToHelcimApi`<a id="helcimgeneraltestconnectivitytohelcimapi"></a>

Tests connectivity to the Helcim API

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const testConnectivityToHelcimApiResponse =
  await helcim.general.testConnectivityToHelcimApi();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connection-test` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.helcimPay.createCheckoutSession`<a id="helcimhelcimpaycreatecheckoutsession"></a>

Creates a HelcimPay.js Checkout Session

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCheckoutSessionResponse =
  await helcim.helcimPay.createCheckoutSession({
    paymentType: "purchase",
    amount: 100,
    currency: "CAD",
    customerCode: "CST1000",
    invoiceNumber: "INV1000",
    paymentMethod: "cc-ach",
    allowPartial: 1,
    hasConvenienceFee: 1,
    taxAmount: 3.67,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentType: `string`<a id="paymenttype-string"></a>

Payment Type. Valid payment types are purchase | preauth | verify

##### amount: `number`<a id="amount-number"></a>

The amount of the transaction to be processed

##### currency: `string`<a id="currency-string"></a>

Currency abbreviation. CAD | USD

##### customerCode: `string`<a id="customercode-string"></a>

This is the code of an existing customer in Helcim associated with this checkout

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

This is the number of an existing invoice in Helcim associated with this checkout

##### paymentMethod: `string`<a id="paymentmethod-string"></a>

This is the payment method (credit card, ACH) that customer can use to pay the amount. cc | ach | cc-ach

##### allowPartial: `number`<a id="allowpartial-number"></a>

This is used to determine whether the partial payment UI will be displayed to the customer

##### hasConvenienceFee: `number`<a id="hasconveniencefee-number"></a>

This is used to apply the convenience fee rate to credit card transaction should customer chooses this payment method

##### taxAmount: `number`<a id="taxamount-number"></a>

This is used to enable level 2 processing lower rates. The value should be the dollar amount of the tax to 2 decimal places.

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutInit200Response](./models/checkout-init200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/helcim-pay/initialize` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.invoice.createNew`<a id="helciminvoicecreatenew"></a>

Create invoice

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await helcim.invoice.createNew({
  invoiceNumber: "",
  tipAmount: 0.99,
  depositAmount: 1,
  notes: "No vegetables please",
  customerId: 123123,
  currency: "CAD",
  type: "INVOICE",
  status: "DUE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

Invoice number of invoice to be created. Will be generated if blank

##### tipAmount: `number`<a id="tipamount-number"></a>

Tip amount

##### depositAmount: `number`<a id="depositamount-number"></a>

Deposit amount

##### notes: `string`<a id="notes-string"></a>

Comment to appear at the bottom of the invoice, visible to the customer.

##### customerId: `number`<a id="customerid-number"></a>

Unique customer Id.

##### currency: `string`<a id="currency-string"></a>

The currency abbreviation of the invoice, such as CAD or USD. This should match currency of existing invoice.

##### type: `string`<a id="type-string"></a>

The type of the invoice, such as ESTIMATE | INVOICE | QUOTE | ORDER | PURCHASE_ORDER | STATEMENT | REGISTRATION | CREDIT.

##### status: `string`<a id="status-string"></a>

The status of invoice, such as DUE | SHIPPED | COMPLETED | CANCELLED

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### shipping: [`Shipping`](./models/shipping.ts)<a id="shipping-shippingmodelsshippingts"></a>

##### pickup: [`Pickup`](./models/pickup.ts)<a id="pickup-pickupmodelspickupts"></a>

##### tax: [`Tax`](./models/tax.ts)<a id="tax-taxmodelstaxts"></a>

##### discount: [`Discount`](./models/discount.ts)<a id="discount-discountmodelsdiscountts"></a>

##### lineItems: [`LineItem`](./models/line-item.ts)[]<a id="lineitems-lineitemmodelsline-itemts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CreateInvoice200Response](./models/create-invoice200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.invoice.getById`<a id="helciminvoicegetbyid"></a>

Get invoice

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await helcim.invoice.getById({
  invoiceId: "invoiceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The unique invoice Id

#### 🔄 Return<a id="🔄-return"></a>

[GetInvoice200Response](./models/get-invoice200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices/{invoiceId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.invoice.list`<a id="helciminvoicelist"></a>

Get invoices

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await helcim.invoice.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

The number of the invoice associated with the transaction

##### dateStart: `string`<a id="datestart-string"></a>

Filters transactions created from 2020-01-01 (Mountain Time)

##### dateEnd: `string`<a id="dateend-string"></a>

Filters transactions created until 2021-01-01 (Mountain Time)

##### withConvenienceFee: `number`<a id="withconveniencefee-number"></a>

Include convenience fee of each invoice 0 | 1

#### 🔄 Return<a id="🔄-return"></a>

[GetInvoices200ResponseInner](./models/get-invoices200-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.invoice.updateDetails`<a id="helciminvoiceupdatedetails"></a>

Update invoice

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDetailsResponse = await helcim.invoice.updateDetails({
  invoiceId: "invoiceId_example",
  invoiceNumber: "",
  tipAmount: 0.99,
  depositAmount: 1,
  notes: "No vegetables please",
  currency: "CAD",
  type: "INVOICE",
  status: "DUE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The unique invoice Id

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

Invoice number of invoice to be created. Will be generated if blank

##### tipAmount: `number`<a id="tipamount-number"></a>

Tip amount

##### depositAmount: `number`<a id="depositamount-number"></a>

Deposit amount

##### notes: `string`<a id="notes-string"></a>

Comment to appear at the bottom of the invoice, visible to the customer.

##### currency: `string`<a id="currency-string"></a>

The currency abbreviation of the invoice, such as CAD or USD. This should match currency of existing invoice.

##### type: `string`<a id="type-string"></a>

The type of the invoice, such as ESTIMATE | INVOICE | QUOTE | ORDER | PURCHASE_ORDER | STATEMENT | REGISTRATION | CREDIT.

##### status: `string`<a id="status-string"></a>

The status of invoice, such as DUE | SHIPPED | COMPLETED | CANCELLED

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GetInvoice200Response](./models/get-invoice200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoices/{invoiceId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.processCaptureTransaction`<a id="helcimpaymentprocesscapturetransaction"></a>

Process Capture Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processCaptureTransactionResponse =
  await helcim.payment.processCaptureTransaction({
    idempotencyKey: "idempotencyKey_example",
    preAuthTransactionId: 198763,
    amount: 100.99,
    ipAddress: "192.168.1.1",
    ecommerce: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### preAuthTransactionId: `number`<a id="preauthtransactionid-number"></a>

The transaction ID of the original pre-authorization transaction.

##### amount: `number`<a id="amount-number"></a>

The amount to capture. Must be less or equal to the original pre-authorization amount.

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/capture` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.processPreauthTransaction`<a id="helcimpaymentprocesspreauthtransaction"></a>

Process Preauth Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processPreauthTransactionResponse =
  await helcim.payment.processPreauthTransaction({
    idempotencyKey: "idempotencyKey_example",
    ipAddress: "192.168.1.1",
    ecommerce: true,
    terminalId: 3215,
    currency: "CAD",
    amount: 100.99,
    customerCode: "",
    invoiceNumber: "",
    cardData: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

##### terminalId: `number`<a id="terminalid-number"></a>

For card transactions only. Id of the terminal you would want to use. Default terminal for of the currency will be used if you dont send this.

##### currency: `string`<a id="currency-string"></a>

The currency abbreviation of the invoice, such as CAD or USD. This should match currency of existing invoice.

##### amount: `number`<a id="amount-number"></a>

Amount to be processed

##### customerCode: `string`<a id="customercode-string"></a>

Existing customer code associated with the transaction

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

To be filled when associating transaction to existing invoice. Invoice should be associated to the same customer linked to the card

##### invoice: [`PaymentRequestInvoice`](./models/payment-request-invoice.ts)<a id="invoice-paymentrequestinvoicemodelspayment-request-invoicets"></a>

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### cardData: [`CardDataCardData`](./models/card-data-card-data.ts)<a id="carddata-carddatacarddatamodelscard-data-card-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/preauth` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.processPurchaseTransaction`<a id="helcimpaymentprocesspurchasetransaction"></a>

Process Purchase Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processPurchaseTransactionResponse =
  await helcim.payment.processPurchaseTransaction({
    idempotencyKey: "idempotencyKey_example",
    ipAddress: "192.168.1.1",
    ecommerce: true,
    terminalId: 3215,
    currency: "CAD",
    amount: 100.99,
    customerCode: "",
    invoiceNumber: "",
    cardData: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

##### terminalId: `number`<a id="terminalid-number"></a>

For card transactions only. Id of the terminal you would want to use. Default terminal for of the currency will be used if you dont send this.

##### currency: `string`<a id="currency-string"></a>

The currency abbreviation of the invoice, such as CAD or USD. This should match currency of existing invoice.

##### amount: `number`<a id="amount-number"></a>

Amount to be processed

##### customerCode: `string`<a id="customercode-string"></a>

Existing customer code associated with the transaction

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

To be filled when associating transaction to existing invoice. Invoice should be associated to the same customer linked to the card

##### invoice: [`PaymentRequestInvoice`](./models/payment-request-invoice.ts)<a id="invoice-paymentrequestinvoicemodelspayment-request-invoicets"></a>

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### cardData: [`CardDataCardData`](./models/card-data-card-data.ts)<a id="carddata-carddatacarddatamodelscard-data-card-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/purchase` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.processRefundTransaction`<a id="helcimpaymentprocessrefundtransaction"></a>

Process Refund Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processRefundTransactionResponse =
  await helcim.payment.processRefundTransaction({
    idempotencyKey: "idempotencyKey_example",
    originalTransactionId: 198763,
    amount: 100.99,
    ipAddress: "192.168.1.1",
    ecommerce: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### originalTransactionId: `number`<a id="originaltransactionid-number"></a>

The transaction ID of the purchase/capture transaction.

##### amount: `number`<a id="amount-number"></a>

The amount to refund. Must be less or equal to the original purchase/capture amount.

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/refund` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.processWithdrawalTransaction`<a id="helcimpaymentprocesswithdrawaltransaction"></a>

Process Withdraw Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processWithdrawalTransactionResponse =
  await helcim.payment.processWithdrawalTransaction({
    idempotencyKey: "idempotencyKey_example",
    ipAddress: "192.168.1.1",
    ecommerce: true,
    terminalId: 3215,
    currency: "CAD",
    amount: 100.99,
    customerCode: "",
    invoiceNumber: "",
    bankData: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

##### terminalId: `number`<a id="terminalid-number"></a>

For card transactions only. Id of the terminal you would want to use. Default terminal for of the currency will be used if you dont send this.

##### currency: `string`<a id="currency-string"></a>

The currency abbreviation of the invoice, such as CAD or USD. This should match currency of existing invoice.

##### amount: `number`<a id="amount-number"></a>

Amount to be processed

##### customerCode: `string`<a id="customercode-string"></a>

Existing customer code associated with the transaction

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

To be filled when associating transaction to existing invoice. Invoice should be associated to the same customer linked to the card

##### invoice: [`PaymentRequestInvoice`](./models/payment-request-invoice.ts)<a id="invoice-paymentrequestinvoicemodelspayment-request-invoicets"></a>

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### bankData: [`BankDataBankData`](./models/bank-data-bank-data.ts)<a id="bankdata-bankdatabankdatamodelsbank-data-bank-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulAchTransactionResponse](./models/successful-ach-transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/withdraw` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.reverseTransaction`<a id="helcimpaymentreversetransaction"></a>

Process Reverse Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const reverseTransactionResponse = await helcim.payment.reverseTransaction({
  idempotencyKey: "idempotencyKey_example",
  cardTransactionId: 198763,
  ipAddress: "192.168.1.1",
  ecommerce: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cardTransactionId: `number`<a id="cardtransactionid-number"></a>

The transaction ID of the original transaction.

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/reverse` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `helcim.payment.verifyTransaction`<a id="helcimpaymentverifytransaction"></a>

Process Verify Transaction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyTransactionResponse = await helcim.payment.verifyTransaction({
  idempotencyKey: "idempotencyKey_example",
  ipAddress: "192.168.1.1",
  ecommerce: true,
  currency: "CAD",
  customerCode: "",
  invoiceNumber: "",
  cardData: {
    cardNumber: "5454545454545454",
    cardExpiry: "1257",
    cardCVV: "100",
  },
  billingAddress: {
    name: "John Smith / Helcim",
    street1: "Jump Street 21",
    city: "Calgary",
    province: "AB",
    country: "CAN",
    postalCode: "H0H0H0",
    phone: "4031231234",
    email: "john@example.com",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ipAddress: `string`<a id="ipaddress-string"></a>

IP address of the customer making the transaction, used as part of fraud detection.

##### currency: `string`<a id="currency-string"></a>

The currency abbreviation of the transaction.

##### cardData: [`Card`](./models/card.ts)<a id="carddata-cardmodelscardts"></a>

##### billingAddress: [`Address`](./models/address.ts)<a id="billingaddress-addressmodelsaddressts"></a>

##### idempotencyKey: `string`<a id="idempotencykey-string"></a>

Idempotency Key. Alphanumeric 25-characters

##### ecommerce: `boolean`<a id="ecommerce-boolean"></a>

Set to indicate that the transaction is e-commerce. When set, the Helcim Fraud Defender will provide further analysis.

##### customerCode: `string`<a id="customercode-string"></a>

Existing customer code associated with the transaction

##### invoiceNumber: `string`<a id="invoicenumber-string"></a>

To be filled when associating transaction to existing invoice. Invoice should be associated to the same customer linked to the card

##### invoice: [`VerifyRequestInvoice`](./models/verify-request-invoice.ts)<a id="invoice-verifyrequestinvoicemodelsverify-request-invoicets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SuccessfulPaymentResponse](./models/successful-payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
