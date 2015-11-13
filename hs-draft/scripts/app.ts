/// <reference path="card.ts"/>
/// <reference path="external/interfaces/jquery.d.ts"/>
var Application: ApplicationInstance;

class ApplicationInstance {

    public cardDatabase: Array<Card>;

    constructor() {
        jQuery.getJSON('scripts/all-cards.json').done((data) => this.getCards(data));
    }

    //TODO: make typed
    private getCards(data: any) {
        this.cardDatabase = data.cards;
    }

    static start(): void {
        Application = new ApplicationInstance();
    }
}
