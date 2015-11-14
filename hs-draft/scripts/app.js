/// <reference path="card.ts"/>
/// <reference path="external/interfaces/jquery.d.ts"/>
/// <reference path="external/react/react.d.ts"/>
/// <reference path="external/react/react-dom.d.ts"/>
/// <reference path='external/typed-react/typed-react.d.ts' />
var Application;
var React;
define(function (require) {
    React = require('react');
    var Hello = React.createClass({
        displayName: 'Hello',
        render: function () {
            return React.createElement("div", null, "Hello ", this.props.name);
        }
    });
});
var ApplicationInstance = (function () {
    function ApplicationInstance() {
        var _this = this;
        jQuery
            .getJSON('scripts/all-cards.json')
            .done(function (data) { return _this.getCards(data); });
    }
    //TODO: make typed
    ApplicationInstance.prototype.getCards = function (data) {
        this.cardDatabase = data.cards;
    };
    ApplicationInstance.start = function () {
        Application = new ApplicationInstance();
    };
    return ApplicationInstance;
})();
//# sourceMappingURL=app.js.map