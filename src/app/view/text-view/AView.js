import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class AView extends View {
    constructor(props){
        super(html);
        this.value = props;
        this.init();
    }
    async init(){
        const Input = Utils.createHTMLElementFromString('<input id="inputNumber" />');
        const Button = Utils.createHTMLElementFromString('<button id="next-button">Siguiente</button>');

        this.viewElement.querySelector(".text-container").appendChild(Input);
        this.viewElement.querySelector(".text-container").appendChild(Button);

        const _this = this;
        Utils.onClickById('next-button', function(){
            _this.end(Number(Input.value));
        })
        
    }
}