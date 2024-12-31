sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'purchaseorder.myapplication',
            componentId: 'A_PurchaseOrderList',
            contextPath: '/A_PurchaseOrder'
        },
        CustomPageDefinitions
    );
});