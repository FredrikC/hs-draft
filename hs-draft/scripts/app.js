/// <reference path="card.ts"/>
/// <reference path="external/interfaces/jquery.d.ts"/>
var Application;
var ApplicationInstance = (function () {
    function ApplicationInstance() {
        var _this = this;
        jQuery.getJSON('scripts/all-cards.json').done(function (data) { return _this.getCards(data); });
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