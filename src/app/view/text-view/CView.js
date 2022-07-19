import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class CView extends View {
    constructor(props){
        super(html);
        this.value = props;
        this.init();
    }
    async init(){
        this.viewElement.querySelector(".text-container").innerHTML = this.value;
        this.end();
    }
}