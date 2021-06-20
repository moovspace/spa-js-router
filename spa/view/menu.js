import t from '/spa/router/translator.js'

export default class MenuView
{
	static Html()
	{
		return `<div id="links">
			<a href="?lang=jp" id="lang" class="lang" data-lang="jp"> JP </a>
			<a href="?lang=en" id="lang" class="lang" data-lang="en"> EN </a>
			<a href="/">` + t.str("Home") + `</a>
			<a href="/todos/list">` + t.str("TodosList") + `</a>
			<a href="/profil/10">` + t.str("UserProfil") + `</a>
			<a href="/upload">` + t.str("UploadFile") + `</a>
			<a href="https://www.pagani.com">` + t.str("ExternalPage") + `</a>
		</div>`;
	}
}