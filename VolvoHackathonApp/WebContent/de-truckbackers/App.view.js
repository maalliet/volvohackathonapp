sap.ui.jsview("de-truckbackers.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf de-truckbackers.App
	*/ 
	getControllerName : function() {
		return "de-truckbackers.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf de-truckbackers.App
	*/ 
	
	createContent : function(oController) {
 		return new sap.m.Page({
 			showHeader: false,
			content: [
				new sap.m.HBox({
					justifyContent: "Center",
					width: "100%",
					items: [
						new sap.m.VBox({
							width: "90%",
							items: [
								new sap.m.Panel({
									headerText: "Map",
									width: "100%",
									height: "600px",
									expandable: true,
									expanded: true,
									content: [
										new sap.ui.core.HTML({
											content: '<div id="map"></div>'
										})
									]
								}),
								new sap.m.Panel({
									headerText: "Table",
									width: "100%",
									height: "600px",
									expandable: true,
									expanded: true,
									content: [
									]
								})
							]
						})
					]
				})
			]
		});
	}

});