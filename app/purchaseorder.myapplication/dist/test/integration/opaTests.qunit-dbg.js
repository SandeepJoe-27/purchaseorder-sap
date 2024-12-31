sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'purchaseorder/myapplication/test/integration/FirstJourney',
		'purchaseorder/myapplication/test/integration/pages/A_PurchaseOrderList',
		'purchaseorder/myapplication/test/integration/pages/A_PurchaseOrderObjectPage',
		'purchaseorder/myapplication/test/integration/pages/A_PurchaseOrderItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, A_PurchaseOrderList, A_PurchaseOrderObjectPage, A_PurchaseOrderItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('purchaseorder/myapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheA_PurchaseOrderList: A_PurchaseOrderList,
					onTheA_PurchaseOrderObjectPage: A_PurchaseOrderObjectPage,
					onTheA_PurchaseOrderItemObjectPage: A_PurchaseOrderItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);