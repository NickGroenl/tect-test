import AView from "./view/text-view/AView"
import BView from "./view/text-view/BView";
import CView from "./view/text-view/AView"
import DView from "./view/text-view/AView"

export default class App {
    constructor() {
        this.start();
    }
    async start() {
        const AViewresponse = await (new AView("AView")).start();
        console.log(AViewresponse);
        await new BView("BView").start();
        await new CView("CView").start();
        await new DView("DView").start();
    }
}