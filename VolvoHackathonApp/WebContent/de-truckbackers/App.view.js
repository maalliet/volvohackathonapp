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
				new sap.m.VBox({
					items: [
						new sap.m.HBox({
							justifyContent: "Center",
							width: "100%",
							items: [
								new sap.ui.core.HTML({
									content: '<div id="header"></div>'
								})
							]
						}),
						new sap.m.IconTabBar({
							id: "appTabBar",
							items: [
								new sap.m.IconTabFilter({
									text: "Fleet Overview",
									content: [
										new sap.m.VBox({
											items: [
												new sap.m.Panel({
													headerText: "Map",
													width: "100%",
													height: "600px",
													content: [
														new sap.ui.core.HTML({
															content: '<div id="map"></div>'
														})
													]
												}),
												new sap.m.Panel({
													id: "dashboardPanel"
												})
											]
										})
									]
								}),
								new sap.m.IconTabFilter({
									text: "Tab2",
									content: []
								}),
								new sap.m.IconTabFilter({
									text: "Tab3",
									content: []
								}),
								new sap.m.IconTabFilter({
									text: "Tab4",
									content: []
								})
							]
						})
					]
				})
			]
 		})
	}
});