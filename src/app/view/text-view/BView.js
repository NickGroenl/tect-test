import View from "../../../core/view/view"
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class BView extends View {
    constructor(props){
        super(html);
        this.value = props;
        this.init();
    }
    async init(){
        this.viewElement.querySelector(".text-container").innerHTML = '<input type="text" id="number" /> <button id="next-button">asddsdsd</button>';
        this.end();
    }
}