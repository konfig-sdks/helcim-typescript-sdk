type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/card-batches-GET': {
        parameters: [
            {
                name: 'batchNumber'
            },
            {
                name: 'terminalId'
            },
            {
                name: 'collect-stats'
            },
        ]
    },
    '/card-batches/{cardBatchId}-GET': {
        parameters: [
            {
                name: 'cardBatchId'
            },
            {
                name: 'collect-stats'
            },
        ]
    },
    '/card-batches/{cardBatchId}/settle-POST': {
        parameters: [
            {
                name: 'cardBatchId'
            },
        ]
    },
    '/card-terminals-GET': {
        parameters: [
            {
                name: 'currency'
            },
            {
                name: 'status'
            },
        ]
    },
    '/card-transactions-GET': {
        parameters: [
            {
                name: 'dateFrom'
            },
            {
                name: 'dateTo'
            },
            {
                name: 'search'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'cardToken'
            },
            {
                name: 'cardBatchId'
            },
        ]
    },
    '/card-transactions/{cardTransactionId}-GET': {
        parameters: [
            {
                name: 'cardTransactionId'
            },
        ]
    },
    '/customers-POST': {
        parameters: [
            {
                name: 'customerCode'
            },
            {
                name: 'contactName'
            },
            {
                name: 'businessName'
            },
            {
                name: 'cellPhone'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'shippingAddress'
            },
        ]
    },
    '/customers/{customerId}/bank-accounts/{bankAccountId}-GET': {
        parameters: [
            {
                name: 'customerId'
            },
            {
                name: 'bankAccountId'
            },
        ]
    },
    '/customers/{customerId}/bank-accounts-GET': {
        parameters: [
            {
                name: 'customerId'
            },
            {
                name: 'bankToken'
            },
            {
                name: 'verified'
            },
            {
                name: 'ready'
            },
        ]
    },
    '/customers/{customerId}/cards/{cardId}-GET': {
        parameters: [
            {
                name: 'customerId'
            },
            {
                name: 'cardId'
            },
        ]
    },
    '/customers/{customerId}/cards-GET': {
        parameters: [
            {
                name: 'customerId'
            },
            {
                name: 'cardToken'
            },
        ]
    },
    '/customers/{customerId}-GET': {
        parameters: [
            {
                name: 'customerId'
            },
        ]
    },
    '/customers-GET': {
        parameters: [
            {
                name: 'search'
            },
            {
                name: 'customerCode'
            },
        ]
    },
    '/customers/{customerId}/bank-accounts/{bankAccountId}/default-PATCH': {
        parameters: [
            {
                name: 'customerId'
            },
            {
                name: 'bankAccountId'
            },
        ]
    },
    '/customers/{customerId}-PUT': {
        parameters: [
            {
                name: 'customerId'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'contactName'
            },
            {
                name: 'businessName'
            },
            {
                name: 'cellPhone'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'shippingAddress'
            },
        ]
    },
    '/connection-test-GET': {
        parameters: [
        ]
    },
    '/helcim-pay/initialize-POST': {
        parameters: [
            {
                name: 'paymentType'
            },
            {
                name: 'amount'
            },
            {
                name: 'currency'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'paymentMethod'
            },
            {
                name: 'allowPartial'
            },
            {
                name: 'hasConvenienceFee'
            },
            {
                name: 'taxAmount'
            },
        ]
    },
    '/invoices-POST': {
        parameters: [
            {
                name: 'invoiceNumber'
            },
            {
                name: 'tipAmount'
            },
            {
                name: 'depositAmount'
            },
            {
                name: 'notes'
            },
            {
                name: 'customerId'
            },
            {
                name: 'currency'
            },
            {
                name: 'type'
            },
            {
                name: 'status'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'shipping'
            },
            {
                name: 'pickup'
            },
            {
                name: 'tax'
            },
            {
                name: 'discount'
            },
            {
                name: 'lineItems'
            },
        ]
    },
    '/invoices/{invoiceId}-GET': {
        parameters: [
            {
                name: 'invoiceId'
            },
        ]
    },
    '/invoices-GET': {
        parameters: [
            {
                name: 'invoiceNumber'
            },
            {
                name: 'dateStart'
            },
            {
                name: 'dateEnd'
            },
            {
                name: 'withConvenienceFee'
            },
        ]
    },
    '/invoices/{invoiceId}-PUT': {
        parameters: [
            {
                name: 'invoiceId'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'tipAmount'
            },
            {
                name: 'depositAmount'
            },
            {
                name: 'notes'
            },
            {
                name: 'currency'
            },
            {
                name: 'type'
            },
            {
                name: 'status'
            },
            {
                name: 'billingAddress'
            },
        ]
    },
    '/payment/capture-POST': {
        parameters: [
            {
                name: 'preAuthTransactionId'
            },
            {
                name: 'amount'
            },
            {
                name: 'ipAddress'
            },
            {
                name: 'idempotency-key'
            },
            {
                name: 'ecommerce'
            },
        ]
    },
    '/payment/preauth-POST': {
        parameters: [
            {
                name: 'idempotency-key'
            },
            {
                name: 'ipAddress'
            },
            {
                name: 'ecommerce'
            },
            {
                name: 'terminalId'
            },
            {
                name: 'currency'
            },
            {
                name: 'amount'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'invoice'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'cardData'
            },
        ]
    },
    '/payment/purchase-POST': {
        parameters: [
            {
                name: 'idempotency-key'
            },
            {
                name: 'ipAddress'
            },
            {
                name: 'ecommerce'
            },
            {
                name: 'terminalId'
            },
            {
                name: 'currency'
            },
            {
                name: 'amount'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'invoice'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'cardData'
            },
        ]
    },
    '/payment/refund-POST': {
        parameters: [
            {
                name: 'originalTransactionId'
            },
            {
                name: 'amount'
            },
            {
                name: 'ipAddress'
            },
            {
                name: 'idempotency-key'
            },
            {
                name: 'ecommerce'
            },
        ]
    },
    '/payment/withdraw-POST': {
        parameters: [
            {
                name: 'idempotency-key'
            },
            {
                name: 'ipAddress'
            },
            {
                name: 'ecommerce'
            },
            {
                name: 'terminalId'
            },
            {
                name: 'currency'
            },
            {
                name: 'amount'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'invoice'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'bankData'
            },
        ]
    },
    '/payment/reverse-POST': {
        parameters: [
            {
                name: 'cardTransactionId'
            },
            {
                name: 'ipAddress'
            },
            {
                name: 'idempotency-key'
            },
            {
                name: 'ecommerce'
            },
        ]
    },
    '/payment/verify-POST': {
        parameters: [
            {
                name: 'ipAddress'
            },
            {
                name: 'currency'
            },
            {
                name: 'cardData'
            },
            {
                name: 'billingAddress'
            },
            {
                name: 'idempotency-key'
            },
            {
                name: 'ecommerce'
            },
            {
                name: 'customerCode'
            },
            {
                name: 'invoiceNumber'
            },
            {
                name: 'invoice'
            },
        ]
    },
}