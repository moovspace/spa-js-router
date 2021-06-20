import Component from '/spa/router/component.js'
import Event from '/spa/router/event.js'
import View from '/spa/view/home.js'
import Store from './store.js';

export class Page extends Component
{
	Setup(div)
	{
		// Page title
		document.title = 'Homepage';

		// Document events: click, dblclick, change, keydown, contextmenu, auxclick, mouseover ...
		let e1 = Event.addDocument("#content", (item,index) => { console.log("Clicked! ", item, index); }, "click");
		let e2 = Event.addDocument("#content", (item,index) => { console.log("Clicked right mouse! ", item, index); }, "auxclick");

		// Window events: hashchange, load, popstate - after local link click
		let ew = Event.addWindow(() => {
			console.log("Page onload event !!!")
		}, 'load');

		// Page
		return { 'html': View.Html(div), 'document_events': [e1,e2], 'window_events': [ew] }
	}
}