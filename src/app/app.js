import BView from "./view/text-view/BView"

export default class App {

    constructor() {

    }

    async start() {
        await (new BView("as")).start();
    }
}