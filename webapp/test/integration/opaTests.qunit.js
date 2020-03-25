/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "example/sapui5-docker/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
