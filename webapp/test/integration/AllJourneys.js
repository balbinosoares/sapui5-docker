sap.ui.define([
  "sap/ui/test/Opa5",
  "example/sapui5-docker/test/integration/arrangements/Startup",
  "example/sapui5-docker/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
