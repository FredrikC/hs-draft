/// <reference path="external/interfaces/require.d.ts"/>
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'jquery-2.1.4'
    }
});
requirejs(['app'], function () { return ApplicationInstance.start(); });
//# sourceMappingURL=initializer.js.map