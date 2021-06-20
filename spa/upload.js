import Component from '/spa/router/component.js'
import Event from '/spa/router/event.js'
import Store from '/spa/store.js'
import View from '/spa/view/upload.js'

export class Page extends Component
{
	Setup(div)
	{
		document.title = 'Upload file';

		// Upload onchange file
		let upload = Event.addDocument("#file", (item,index) => {
			console.log("File changed! ", item, index)
			Store.Upload("form")
		}, "change");

		return { 'html': View.Html(div), 'document_events': [upload] }
	}
}