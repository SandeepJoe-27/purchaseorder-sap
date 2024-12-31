sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'purchaseorder.myapplication',
            componentId: 'A_PurchaseOrderItemObjectPage',
            contextPath: '/A_PurchaseOrder/to_PurchaseOrderItem'
        },
        CustomPageDefinitions
    );
});