sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("The_costomerOrders_table.controller.View1", {
		handleListItemPress: function (evt) {
 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 	var selectedCustomerID = evt.getSource().getBindingContext().getProperty("CustomerID");
	oRouter.navTo("Detail", {
		CustomerID: selectedCustomerID
	});
}
});
});
