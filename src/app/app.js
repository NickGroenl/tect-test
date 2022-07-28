import "./view.scss";

import AView from "./view/text-view/AView"
import BView from "./view/text-view/BView";
import CView from "./view/text-view/CView"
import DView from "./view/text-view/DView"

export default class App {
    constructor() {
        this.finalResponse = 0;
    }
    async start() {
        let AViewresponse = 0;
        if(this.finalResponse === 0) {
            AViewresponse = await (new AView("Vista A")).start();
        } else {
            AViewresponse = this.finalResponse;
            this.finalResponse = 0;
        }
        const BViewresponse = await new BView("Vista B").start(AViewresponse);
        const CViewresponse = await new CView("Vista C").start(BViewresponse);
        if(CViewresponse === -1) {
            return this.start();
        }
        const DViewresponse = await new DView("Vista D").start(CViewresponse);
        this.finalResponse = DViewresponse;
        return this.start();
    }
}