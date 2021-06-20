export default class Translator
{
	static lang = 'en';

	constructor()
	{
		if (!Translator._instance) {
			Translator._instance = this
		}

		return Translator._instance
	}

	static getInstance()
	{
		return this._instance
	}

	static setLang(lang) {
		this.lang = lang
		if (eval('typeof ' + this.lang) == 'undefined'){
			this.lang = "en"
		}
		return this.getInstance();
	}

	static str(str){
		var retStr = eval('eval(this.lang).' + str)
		if (typeof retStr != 'undefined'){
			return retStr
		} else {
			return str
		}
	}

	getLang(){
		return this.lang.slice(-2)
	}
}

/*
import t from '/spa/router/translator.js'
t.setLang("lang_en");
console.log("Language:", translator.getLang(), translator.str("Save"));
*/

/*
<!-- Add lang links in html for router -->
<a href="?lang=jp" id="lang" class="lang" data-lang="jp"> JP </a>
<a href="?lang=en" id="lang" class="lang" data-lang="en"> EN </a>
*/