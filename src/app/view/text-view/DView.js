import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class DView extends View {
    constructor(text){
        super(html);
        this.text = text;
        this.init();
    }
    async init(){
        await Utils.waitForSeconds(1);
        const nextLine = Utils.createHTMLElementFromString('<div/>');
        const TextView = Utils.createHTMLElementFromString(`<p class='title'>${this.text}</p>`);
        const valueAView = Utils.createHTMLElementFromString(`<p>${Number(this._inputData)}</p>`);
        const Button = Utils.createHTMLElementFromString('<button id="b-back-button">Atras</button>');

        this.viewElement.querySelector(".text-container").appendChild(TextView);
        this.viewElement.querySelector(".text-container").appendChild(valueAView);
        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(Button);

        const _this = this;
        Utils.onClickById('b-back-button', function(){
            _this.end(8);
        })
    }
}