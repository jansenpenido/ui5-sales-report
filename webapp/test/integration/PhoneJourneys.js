jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/jp/employeesnorth/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/jp/employeesnorth/test/integration/pages/App",
	"com/jp/employeesnorth/test/integration/pages/Browser",
	"com/jp/employeesnorth/test/integration/pages/Master",
	"com/jp/employeesnorth/test/integration/pages/Detail",
	"com/jp/employeesnorth/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.jp.employeesnorth.view."
	});

	sap.ui.require([
		"com/jp/employeesnorth/test/integration/NavigationJourneyPhone",
		"com/jp/employeesnorth/test/integration/NotFoundJourneyPhone",
		"com/jp/employeesnorth/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});