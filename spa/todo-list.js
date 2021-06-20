import Component from '/spa/router/component.js'
import Event from '/spa/router/event.js'
import Store from '/spa/store.js'
import View from '/spa/view/todo.js'

export class Page extends Component
{
	Setup(div)
	{
		document.title = 'Todo list';

		// Pretty url /todo/{id}
		let id = this.urlParams()[1]

		Store.FetchAll(0,20);

		console.log("Todo id: ", id)

		return { 'html': View.Html(div), 'document_events': [] }
	}
}