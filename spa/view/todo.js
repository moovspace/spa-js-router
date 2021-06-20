import Menu from '/spa/view/menu.js'

export default class TodoView
{
	static Todo(div)
	{
		return '<div id="content"></div>';
	}

	static Html(div)
	{
		return Menu.Html() + this.Todo(div);
	}
}