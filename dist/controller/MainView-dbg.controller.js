sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("testApp.Customer360.controller.MainView", {
		onInit: function () {
			var sCustomer	= null,
				oModel		= null,
				oSmartTable = this.byId('smartTable'),
				oSmartFilter= this.byId('smartFilterBar');

			//	Get Northwind Model
			oModel	= this.getView().getModel("Northwind");

			//	Set Model to SmartTable
			oSmartTable.setModel(oModel);
			oSmartFilter.setModel(oModel);
			
			debugger;
			
			sCustomer			= "/Customers";
			oModel.read( sCustomer, {
				success: function( oData ) {
					debugger;
				},
				error: this.handleError
			});
			
		//	Handle Routing		
			sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this.handleRouting, this);
		},
		
		handleError: function(oError) {
			debugger;
		},

		handleRouting: function() {
			debugger;
		},
		onCollapseExpandSidebar: function() {
			var oModel		= null,
				oSidebar	= this.byId('sideNavigation'),
				oSmartTable = this.byId('smartTable'),
				oSmartFilter= this.byId('smartFilterBar'),
				bExpanded	= oSidebar.getExpanded();

			//	Collapse/Expand Sidebar
			oSidebar.setExpanded( !bExpanded );	
			
			debugger;
	
			//	Get Northwind Model
			oModel	= this.getView().getModel("Northwind");

			//	Set Model to SmartTable
			oSmartTable.setModel(oModel);
			oSmartFilter.setModel(oModel);
			
		}
	});
});