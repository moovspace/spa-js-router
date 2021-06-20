class Request
{
	method = 'GET'
	cors = 'same-origin'
	credentials = 'same-origin'
	headers = new Headers()
	isJsonRequest = false

	Method(str = 'GET')
	{
		this.method = str
		return this
	}

	Cors(str = 'cors')
	{
		// (*) cors, no-cors, same-origin
		this.cors = str
		return this
	}

	Credentials(str = 'same-origin')
	{
		// (*) same-origin, include, omit
		this.credentials = str
		return this
	}

	Headers(obj = {})
	{
		this.headers = obj
		return this
	}

	Header(name, value)
	{
		this.headers.append(name, value)
		return this
	}

	Json()
	{
		this.headers.append('Content-type', 'application/json; charset=UTF-8')
		this.isJsonRequest = true
		return this
	}

	async Send(url, formData)
	{
		let opt = {
			method: this.method,
			mode: this.cors,
			credentials: this.credentials,
			headers: this.headers
		}
		opt.body = formData
		return await (await fetch(url, opt)).text()
	}

	async SendJson(url, obj)
	{
		this.Json()

		let opt = {
			method: this.method,
			mode: this.cors,
			credentials: this.credentials,
			headers: this.headers
		}
		opt.body = JSON.stringify(obj)
		return await (await fetch(url, opt)).json()
	}
}

class Cors
{
	static get Cors() { return 'cors' }
	static get NoCors() { return 'no-cors' }
	static get SameOrigin() { return 'same-origin' }
}

class Credentials
{
	static get Include() { return 'include' }
	static get Omit() { return 'omit' }
	static get SameOrigin() { return 'same-origin' }
}

export { Request as default, Cors, Credentials };

/*
function Get()
{
	new Req().Method('GET').Cors()
	.SendJson('https://jsonplaceholder.typicode.com/users/3/posts')
	.then((s) => {
		// Do something with response
		console.log(s)
	});
}

function Post(obj = { title: 'foo', body: 'bar', userId: 1 })
{
	new Req().Method('POST').Cors()
	.SendJson('https://jsonplaceholder.typicode.com/users/3/posts', obj)
	.then((s) => {
		// Do something with response
		console.log(s)
	});
}

function Upload(formId = "form")
{
	let ele = document.getElementById(formId)
	new Req().Method('POST')
	.Send('/upload.php', new FormData(ele))
	.then((s) => {
		// Do something with upload response
		console.log(s)
	});
}
*/