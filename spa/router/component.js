export default class Component
{
	addScript(url)
	{
		let s = document.createElement('script')
		s.setAttribute("type","text/javascript")
		s.setAttribute("src", url)
		if (typeof s != "undefined") { document.head.appendChild(s) }
	}

	queryParam(id){
		const urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(id)
	}

	urlParams(){
		return window.location.pathname.substring(1).split('/').filter(function (el) {
			return el != null
		});
	}

	Setup(){
		return 'Override this'
	}
}