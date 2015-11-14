/// <reference path="card.ts"/>
/// <reference path="external/interfaces/jquery.d.ts"/>
/// <reference path="external/react/react.d.ts"/>
/// <reference path="external/react/react-dom.d.ts"/>
/// <reference path='external/typed-react/typed-react.d.ts' />
var Application: ApplicationInstance;
var React: any;
define((require: any) => {
    React = require('react');

    var Hello = React.createClass({
        displayName: 'Hello',
        render: function () {
            return React.createElement("div", null, "Hello ", this.props.name);
        }
    });
});

class ApplicationInstance {

    public cardDatabase: Array<Card>;

    constructor() {
        jQuery
            .getJSON('scripts/all-cards.json')
            .done((data) => this.getCards(data));

    }

    //TODO: make typed
    private getCards(data: any) {
        this.cardDatabase = data.cards;
    }

    static start(): void {
        Application = new ApplicationInstance();
    }
}
