sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("testApp.Customer360.controller.MainView", {
		onInit: function () {
		//	Handle Routing		
			sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this.handleRouting, this);
			
		},
		handleRouting: function() {
			debugger;
		},
		
		handleEditBtnPress: function(oEvent) {
			var bEditable		= this.getView().getModel("UIData").getProperty("/editable");
			
			this.getView().getModel("UIData").setProperty("/editable", !bEditable );
		}
	});
});