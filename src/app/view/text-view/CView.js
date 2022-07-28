import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class CView extends View {
    constructor(text){
        super(html);
        this.text = text;
        this.swap = false
        this.init();
    }
    async init(){
        await Utils.waitForSeconds(1);
        const nextLine = Utils.createHTMLElementFromString('<div class="style1"/>');
        const TextView = Utils.createHTMLElementFromString(`<p id="title" class='style1'>${this.text}</p>`);
        const valueAView = Utils.createHTMLElementFromString(`<p id="number" class='style1'>${Number(this._inputData)}</p>`);
        const SwapButton = Utils.createHTMLElementFromString('<button id="c-swap-button" class="style1">Swap</button>');
        const ResetButton = Utils.createHTMLElementFromString('<button id="c-reset-button" class="style1">Reiniciar</button>');
        const NextButton = Utils.createHTMLElementFromString('<button id="c-next-button" class="style1">Siguiente</button>');
        this.viewElement.querySelector(".text-container").appendChild(TextView);
        this.viewElement.querySelector(".text-container").appendChild(valueAView);
        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(SwapButton);
        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(ResetButton);
        this.viewElement.querySelector(".text-container").appendChild(nextLine);
        this.viewElement.querySelector(".text-container").appendChild(NextButton);

        const _this = this;
        Utils.onClickById('c-swap-button', function(){
            const tempVar = !this.swap;
            this.swap = !this.swap;        
            
            document.getElementById("text-container").childNodes.forEach(function(child) {
                child.className = tempVar ? 'style2' : 'style1';
            });
            document.getElementById("text-container").className = 'text-container ' + (tempVar ? 'style2' : 'style1');
            
        })
        Utils.onClickById('c-reset-button', function(){
            _this.end(-1);
        })
        Utils.onClickById('c-next-button', function(){
            _this.end(_this._inputData);
        })
    }
}