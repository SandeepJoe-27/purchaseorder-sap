using { PurchaseOrder } from './external/PurchaseOrder.cds';

@path : '/service/PurchaseorderSvcs'
service PurchaseorderService
{
    annotate A_PurchaseOrder with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'Viewer' ] }
    ];

    annotate A_PurchaseOrderItem with @restrict :
    [
        { grant : [ '*' ], to : [ 'Manager' ] }
    ];

    @readonly
    entity A_PurchaseOrder as
        projection on PurchaseOrder.A_PurchaseOrder
        {
            PurchaseOrder,
            CompanyCode,
            Supplier,
            PurchaseOrderDate,
            AddressCityName,
            AddressHouseNumber,
            AddressName,
            AddressPostalCode,
            AddressStreetName,
            AddressCountry,
            to_PurchaseOrderItem : redirected to PurchaseorderService.A_PurchaseOrderItem
        };

    @readonly
    entity A_PurchaseOrderItem as
        projection on PurchaseOrder.A_PurchaseOrderItem
        {
            PurchaseOrder,
            PurchaseOrderItem,
            Plant,
            OrderQuantity,
            NetPriceAmount,
            Material,
            DeliveryAddressStreetName,
            DeliveryAddressHouseNumber,
            DeliveryAddressCityName,
            DeliveryAddressPostalCode,
            DeliveryAddressCountry
        };
}

annotate PurchaseorderService with @requires :
[
    'authenticated-user'
];
