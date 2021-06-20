export default class Event
{
	static addDocument(id, cb, type = "click", prevent = false, stop = false){
		return { 'id': id, 'cb': cb, 'type': type, 'prevent': prevent, 'stop': stop }
	}

	static addWindow(cb, type = "popstate"){
		return { 'cb': cb, 'type': type }
	}

	static run(id, cb, type = "click", prevent = false, stop = false){
		document.querySelectorAll(id).forEach((item,index) => {
			item.addEventListener(type, event => {
				if(prevent){
					event.preventDefault()
				}
				if(stop){
					event.stopPropagation()
				}
				cb(item,index,event)
			}, false)
		})
	}

	static runOnLoad(cb, type = "load"){
		window.addEventListener(type, cb(event), false)
	}

	static clear(type = "popstate")
	{
		window.addEventListener(type, event.stopPropagation(), false)
	}
}