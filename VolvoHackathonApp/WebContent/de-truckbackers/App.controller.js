sap.ui.controller("de-truckbackers.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf de-truckbackers.App
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf de-truckbackers.App
*/
onBeforeRendering: function() {
	
},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf de-truckbackers.App
*/
onAfterRendering: function() {
	
	//Activate for login dummy
	//this.showLogin();
	
	this.map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.21728, lng: 4.41728},
		zoom: 8
	});	
	
	this.addMarkers();
	
	this.createDashboard();
},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf de-truckbackers.App
*/
//	onExit: function() {
//
//	}

//#LOGIN
showLogin: function () {
	
	var shellContent = document.getElementsByClassName("sapMShellCentralBox");
	shellContent[0].style.opacity = "0"; 
	
	var userNameText = new sap.m.Text({
		text: "Username",
		width: "150px"
	}).addStyleClass("marginTop15");
	
	var userNameField = new sap.m.Input({
		width: "200px",
	});

	var userNameBox = new sap.m.HBox({
		items: [
			userNameText,
			userNameField
		]
	});
	
	var passwordText = new sap.m.Text({
		text: "Password",
		width: "150px"
	}).addStyleClass("marginTop15");
	
	var passwordField = new sap.m.Input({
		width: "200px",
		type: sap.m.InputType.Password
	});

	var passwordBox = new sap.m.HBox({
		items: [
			passwordText,
			passwordField
		]
	});
	
	var loginVBox = new sap.m.VBox({
		items: [
			userNameBox,
			passwordBox
		]
	});
	
	var dialogue = new sap.m.Dialog({
		title: "Login required",
		type: "Message",
		contentWidth: "400px",
		content: [
			loginVBox
		],
		endButton: new sap.m.Button({
			width: "98%",
			text: "Login",
			press: function () {
				
				dialogue.close();
				shellContent[0].style.opacity = "1";
			}
		}),
		afterClose: function () {
			dialogue.destroy();
		}
	});
	
	dialogue.open();
	
},

//#FLEETOVERVIEW
createDashboard: function () {
	
	var firstRow = new sap.m.HBox({
		items: [
			new sap.m.Panel({
				id: "checkPointRange",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Within Checkpoint Range"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin"),
			new sap.m.Panel({
				id: "speedingBreaches",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Speeding Breaches"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin"),
			new sap.m.Panel({
				id: "idling",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Idling"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin"),
			new sap.m.Panel({
				id: "shocks",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Shocks"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin")
		]
	});
	
	var secondRow = new sap.m.HBox({
		items: [
			new sap.m.Panel({
				id: "attentionZones",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "In Attention Zones"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin"),
			new sap.m.Panel({
				id: "lockBreaches",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Lock Breaches"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin"),
			new sap.m.Panel({
				id: "UnusualAreas",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Unusual areas"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin"),
			new sap.m.Panel({
				id: "HarshBrakes",
				width: "250px",
				height: "180px",
				content: [
					new sap.m.VBox({
						justifyContent: "Center",
						items: [
							new sap.m.Text({
								text: "Value",
							}),
							new sap.m.Text({
								text: "Harsh Brakes"
							})
						]
					})
				]
			}).addStyleClass("dashboardTileMargin")
		]
	});
	
	var tileBox = new sap.m.VBox({
		items: [
			firstRow,
			secondRow
		]
	});
	
	sap.ui.getCore().byId("dashboardPanel").addContent(tileBox);
	
},

//#MAP FUNCTIONS
addMarkers: function () {
	
	var locations = [
	      ['Brugess', 51.21460,3.22405],
	      ['Antwerpen', 51.21728,4.41728],
	      ['Bruxelles', 50.84056,4.36772]
	];

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < locations.length; i++) { 
		 marker = new google.maps.Marker({
			 position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		     map: this.map,
		     icon: 'resources/images/Truck-52.png'
		 });
		 
		 google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
			    infowindow.open(map, marker);
			}
		 })(marker, i));
	}
	
	var triangleCoords = [
	      {lat: 25.774, lng: -80.190},
	      {lat: 18.466, lng: -66.118},
	      {lat: 32.321, lng: -64.757},
	      {lat: 34.321, lng: -62.757}
	  ];
	
	this.positionGeofence(triangleCoords);
	
},

positionGeofence: function (coordinates) {
	
	var controller = this;
	
	var polygon = new google.maps.Polygon({
		paths: coordinates,
	    strokeColor: '#FF0000',
	    strokeOpacity: 0.8,
	    strokeWeight: 3,
	    fillColor: '#FF0000',
	    fillOpacity: 0.35
	  });
	
	polygon.setMap(this.map);
	
}



});