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
    async waitFor5(){
        await Utils.waitForSeconds(5);
        return alert('5 o click')
    }
    async waitFor3(){
        await Utils.waitForSeconds(3);
        return alert('3 o click')
    }
    async waitForClick5(){
        return alert('5 o click');
    }
    async init(){
        await Utils.waitForSeconds(1);
        this.waitFor5();
        const nextLine = Utils.createHTMLElementFromString('<div/>');
        const TextView = Utils.createHTMLElementFromString(`<p class='title'>${this.text}</p>`);
        const valueAView = Utils.createHTMLElementFromString(`<p>${Number(this._inputData)}</p>`);
        const FiveButton = Utils.createHTMLElementFromString('<button id="five-button">5 o Click</button>');
        const ThreeButton = Utils.createHTMLElementFromString('<button id="three-button">3 o Click</button>');
        const Button = Utils.createHTMLElementFromString('<button id="b-back-button">Atras</button>');

        this.viewElement.querySelector(".text-container").appendChild(TextView);
        this.viewElement.querySelector(".text-container").appendChild(valueAView);

        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(FiveButton);
        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(ThreeButton);
        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(Button);

        const _this = this;
        Utils.onClickById('five-button', this.waitForClick5);
        Utils.onClickById('three-button', this.waitFor3);

        Utils.onClickById('b-back-button', function(){
            _this.end(8);
        });
        Promise.all([this.waitForClick, this.waitFor5, this.waitFor3]).then(values => {
            console.log(values);
        }, reason => {
            console.log(reason)
        });
    }
}