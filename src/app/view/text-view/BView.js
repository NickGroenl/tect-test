import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class BView extends View {
    constructor(text){
        super(html)
        this.text = text;
        this.init();
    }
    async init(){
        await Utils.waitForSeconds(1);
        const TextView = Utils.createHTMLElementFromString(`<p class='title'>${this.text}</p>`);
        const valueAView = Utils.createHTMLElementFromString(`<p>${Number(this._inputData)}</p>`);
        const Button = Utils.createHTMLElementFromString('<button id="b-next-button">Siguiente</button>');

        this.viewElement.querySelector(".text-container").appendChild(TextView);
        this.viewElement.querySelector(".text-container").appendChild(valueAView);
        this.viewElement.querySelector(".text-container").appendChild(Button);

        const _this = this;
        Utils.onClickById('b-next-button', function(){
            _this.end(Number(_this._inputData) + 5);
        })
    }
}