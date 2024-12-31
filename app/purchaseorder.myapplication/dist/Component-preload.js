//@ui5-bundle purchaseorder/myapplication/Component-preload.js
sap.ui.require.preload({
	"purchaseorder/myapplication/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("purchaseorder.myapplication.Component",{metadata:{manifest:"json"}})});
},
	"purchaseorder/myapplication/i18n/i18n.properties":'# This is the resource bundle for purchaseorder.myapplication\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=My Application\n\n#YDES: Application description\nappDescription=My SAP application\n\n#XFLD,42\nflpTitle=My Application\n',
	"purchaseorder/myapplication/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"purchaseorder.myapplication","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.16.1","toolsId":"a5119703-5155-4bd6-a10f-e8dbfc815188"},"dataSources":{"mainService":{"uri":"service/PurchaseorderSvcs/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"purchaseordermyapplication-display":{"semanticObject":"purchaseordermyapplication","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"purchaseorder.myapplication.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"A_PurchaseOrderList","target":"A_PurchaseOrderList"},{"pattern":"A_PurchaseOrder({key}):?query:","name":"A_PurchaseOrderObjectPage","target":"A_PurchaseOrderObjectPage"},{"pattern":"A_PurchaseOrder({key})/to_PurchaseOrderItem({key2}):?query:","name":"A_PurchaseOrderItemObjectPage","target":"A_PurchaseOrderItemObjectPage"}],"targets":{"A_PurchaseOrderList":{"type":"Component","id":"A_PurchaseOrderList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/A_PurchaseOrder","variantManagement":"Page","navigation":{"A_PurchaseOrder":{"detail":{"route":"A_PurchaseOrderObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"A_PurchaseOrderObjectPage":{"type":"Component","id":"A_PurchaseOrderObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/A_PurchaseOrder","navigation":{"to_PurchaseOrderItem":{"detail":{"route":"A_PurchaseOrderItemObjectPage"}}}}}},"A_PurchaseOrderItemObjectPage":{"type":"Component","id":"A_PurchaseOrderItemObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/A_PurchaseOrder/to_PurchaseOrderItem"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.Purchaseorder"}}'
});
//# sourceMappingURL=Component-preload.js.map
