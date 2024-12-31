using PurchaseorderService as service from '../../srv/service';
annotate service.A_PurchaseOrder with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'PurchaseOrder',
                Value : PurchaseOrder,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CompanyCode',
                Value : CompanyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Supplier',
                Value : Supplier,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PurchaseOrderDate',
                Value : PurchaseOrderDate,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.CollectionFacet',
            Label : 'Suppiler Section',
            ID : 'SuppilerSection',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'supplier details',
                    ID : 'supplierdetails',
                    Target : '@UI.FieldGroup#supplierdetails',
                },
            ],
        },
        {
            $Type : 'UI.CollectionFacet',
            Label : 'Deliver Section',
            ID : 'DeliverSection',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'delivery details',
                    ID : 'deliverydetails',
                    Target : '@UI.FieldGroup#deliverydetails',
                },
            ],
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'PurchaseOrder',
            Value : PurchaseOrder,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CompanyCode',
            Value : CompanyCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Supplier',
            Value : Supplier,
        },
        {
            $Type : 'UI.DataField',
            Label : 'PurchaseOrderDate',
            Value : PurchaseOrderDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'AddressCityName',
            Value : AddressCityName,
        },
        {
            $Type : 'UI.DataField',
            Value : AddressCountry,
            Label : 'AddressCountry',
        },
        {
            $Type : 'UI.DataField',
            Value : AddressHouseNumber,
            Label : 'AddressHouseNumber',
        },
        {
            $Type : 'UI.DataField',
            Value : AddressPostalCode,
            Label : 'AddressPostalCode',
        },
        {
            $Type : 'UI.DataField',
            Value : AddressStreetName,
            Label : 'AddressStreetName',
        },
    ],
    UI.FieldGroup #Supplierdetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    },
    UI.FieldGroup #supplierdetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : AddressCountry,
                Label : 'AddressCountry',
            },
            {
                $Type : 'UI.DataField',
                Value : AddressHouseNumber,
                Label : 'AddressHouseNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : AddressCityName,
                Label : 'AddressCityName',
            },
            {
                $Type : 'UI.DataField',
                Value : AddressPostalCode,
                Label : 'AddressPostalCode',
            },
            {
                $Type : 'UI.DataField',
                Value : AddressStreetName,
                Label : 'AddressStreetName',
            },
        ],
    },
    UI.FieldGroup #deliverydetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : to_PurchaseOrderItem.DeliveryAddressCityName,
                Label : 'DeliveryAddressCityName',
            },
            {
                $Type : 'UI.DataField',
                Value : to_PurchaseOrderItem.DeliveryAddressCountry,
                Label : 'DeliveryAddressCountry',
            },
            {
                $Type : 'UI.DataField',
                Value : to_PurchaseOrderItem.DeliveryAddressHouseNumber,
                Label : 'DeliveryAddressHouseNumber',
            },
            {
                $Type : 'UI.DataField',
                Value : to_PurchaseOrderItem.DeliveryAddressPostalCode,
                Label : 'DeliveryAddressPostalCode',
            },
            {
                $Type : 'UI.DataField',
                Value : to_PurchaseOrderItem.DeliveryAddressStreetName,
                Label : 'DeliveryAddressStreetName',
            },
        ],
    },
);

annotate service.A_PurchaseOrderItem with @(
    UI.LineItem #Deliverydetails : [
    ]
);

