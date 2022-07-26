import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class AView extends View {
    constructor(text){
        super(html);
        this.text = text;
        this.init();
    }
    async init(){
        const TextView = Utils.createHTMLElementFromString(`<p>${this.text}</p>`);
        const Input = Utils.createHTMLElementFromString('<input id="inputNumber" />');
        const Button = Utils.createHTMLElementFromString('<button id="a-next-button">Siguiente</button>');

        
        this.viewElement.querySelector(".text-container").appendChild(TextView);
        this.viewElement.querySelector(".text-container").appendChild(Input);
        this.viewElement.querySelector(".text-container").appendChild(Button);

        const _this = this;
        Utils.onClickById('a-next-button', function(){
            _this.end(Number(Input.value));
        });
    }
}