/// <reference path="app.ts"/>
/// <reference path="external/requirejs/require.d.ts"/>
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': 'jquery-2.1.4',
        'react': "external/react/react-with-addons",
    }
});

requirejs(['app'], () => ApplicationInstance.start());