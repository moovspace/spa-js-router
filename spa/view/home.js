import Menu from '/spa/view/menu.js'
import t from '/spa/router/translator.js'

export default class HomeView
{
	static Home(div)
	{
		return `<div id="content">` + t.str("Welcome") + ` Homepage content goes here (` + div + `).</div>`;
	}

	static Html(div)
	{
		return Menu.Html() + this.Home(div);
	}
}