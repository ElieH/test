sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"testApp/Customer360/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("testApp.Customer360.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			//	UI Model Initialization
			var data = {editable:false},
				oJSONModel = new sap.ui.model.json.JSONModel();
			
			
			oJSONModel.setData( data );
			this.setModel( oJSONModel , "UIData");

		}
	});
});