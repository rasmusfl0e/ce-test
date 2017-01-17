import "./Follow.css";

const SUBSCRIBED = "data-subscribed";
const TOPIC = "data-topic";

export default class Follow extends HTMLElement {

	constructor() {
		super();

		this.topic = this.getAttribute(TOPIC);
		this.subscribed = this.getAttribute(SUBSCRIBED);

		this.toggle = this.toggle.bind(this);

		this.addEventListener("click", this.toggle);
	}

	toggle() {
		var subscribed = !this.subscribed;
		if (subscribed) {
			this.setAttribute(SUBSCRIBED, "");
		}
		else {
			this.removeAttribute(SUBSCRIBED);
		}
		this.subscribed = subscribed;
	}

	connectedCallback() {
		this.innerHTML = this.topic;
	}

}