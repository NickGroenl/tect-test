import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class CView extends View {
    constructor(text){
        super(html);
        this.text = text;
        this.init();
    }
    async init(){
        await Utils.waitForSeconds(1);
        const TextView = Utils.createHTMLElementFromString(`<p>${this.text}</p>`);
        const valueAView = Utils.createHTMLElementFromString(`<p>${Number(this._inputData)}</p>`);
        const ResetButton = Utils.createHTMLElementFromString('<button id="c-reset-button">Reiniciar</button>');
        const NextButton = Utils.createHTMLElementFromString('<button id="c-next-button">Siguiente</button>');

        this.viewElement.querySelector(".text-container").appendChild(TextView);
        this.viewElement.querySelector(".text-container").appendChild(valueAView);
        this.viewElement.querySelector(".text-container").appendChild(ResetButton);
        this.viewElement.querySelector(".text-container").appendChild(NextButton);

        const _this = this;
        Utils.onClickById('c-reset-button', function(){
            _this.end(-1);
        })
        Utils.onClickById('c-next-button', function(){
            _this.end(_this._inputData);
        })
    }
}