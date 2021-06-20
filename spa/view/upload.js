import Menu from '/spa/view/menu.js'

export default class UploadView
{
	static Todo(div)
	{
		return `<div id="content">
			<form id="form">
				<h4> Upload file onchange </h4>
				<input type="file" name="file" id="file">
			</form>
		</div>`;
	}

	static Html(div)
	{
		return Menu.Html() + this.Todo(div);
	}
}