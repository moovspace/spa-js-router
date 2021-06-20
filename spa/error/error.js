import Component from '/spa/router/component.js'

export class Page extends Component
{
	Setup(div)
	{
		document.title = 'Error 404';

		let html = '<div id="error404"> <strong> Error 404! </strong> <br> Page does not exists! </div> <br><br> <a href="/"> Homepage </a>'

		return { html }
	}
}