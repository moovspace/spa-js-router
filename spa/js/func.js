/*
Add in html without: defer or async
Event actions:
<a onclick="return Confirm()">
<img onerror="ErrorImage(this)">
<button onauxclick="MouseRightButton(this)">
<body oncontextmenu="return false;">
<form onsubmit="return CheckForm(this);">
<input onkeypress="return event.keyCode != 13;">
<input onkeyup="ValidPass(this)">
*/

function GoBack()
{
	history.back();
}

// Error image onerror=""
function ErrorImage(it)
{
    it.src='/media/img/nofoto.jpg';
}

function isValidUrl(url) {
	var re = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
	return re.test(url);
}

// Validate email
function IsValidEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

// Validate alias
function IsValidUsername(str)
{
	// const re = /^\w+$/;	// str with underscore
	const re = /^[a-zA-z]{1}[A-Za-z0-9_.]+$/;
	return re.test(str);
}

// String with number
function IsValidSlug(str)
{
	const re = /^[A-Za-z0-9_-]+$/;
	return re.test(str);
}

// String with number
function IsValidStr(str)
{
	const re = /^[A-Za-z0-9]+$/;
	return re.test(str);
}

// String with number
function IsValidInt(str)
{
	const re = /^\d*$/;
	return re.test(str);
}

// String with number
function IsValidNumber(str)
{
	const re = /[0-9]/;
	return re.test(str);
}

function IsValidDecimal(str)
{
	const re = /^\d+(\.\d{1,2})?$/;
	return re.test(str);
}

function IsValidHour(str)
{
	const re = /^[0-9]{2}:[0-9]{2}$/;
	return re.test(str);
}

// String with small letter
function IsValidSmallLetter(str)
{
	const re = /[a-z]/;
	return re.test(str);
}

// String with big letter
function IsValidBigLetter(str)
{
	const re = /[A-Z]/;
	return re.test(str);
}

function IsValidPass(str)
{
	if(IsValidBigLetter(str) && IsValidSmallLetter(str) && IsValidNumber(str) && str != '' && str.length >= 8) {
		return true;
	}
	return false;
}

// Confirm
function Confirm() {
	return confirm('Are you sure?');
}

// Scroll to top
function ScrollTo(pos = 0)
{
	window.scrollTo({top: pos, behavior: "smooth"});
}

// Scroll to id
function ScrollToId(id = 'error') {
	var e = document.getElementById(id);
	if(e) {
		e.scrollIntoView({ behavior: 'smooth' });
	}
}

// Close after time
function PopupHide(id = 'popup', timeout = 1000)
{
	setTimeout((e) => {
		var alert = document.getElementById(id);
		alert.style.display = 'none';
	}, timeout);
}

/*
<a href="#scrollTo"> Click here </a>
<div id="scrollTo"> Scroll page here </div>
*/
function EnableScrollToHref()
{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Disable enter in form
function DisableFormEnter(id = 'form, .search')
{
	// textarea, input[type=text], input[type=email], input[type=password]
	// form, input
	// .search
	document.querySelectorAll(id).forEach((i) => {
		i.addEventListener('keydown', function(e) {
			if (e.which == 13) {
				e.preventDefault();
			}
		});
	});
}

// Set cookie
function SetCookie(name, val, days, path, domain, secure, same_site = 'strict') {
	if (navigator.cookieEnabled) {
		let cookieText = name + "=" + val;
		if (typeof days === "number") {
			const data = new Date();
			data.setTime(data.getTime() + (days * 24*60*60*1000));
			cookieText += "; expires=" + data.toGMTString();
		}
		if (path) { cookieText += "; path=" + path; }
		if (domain) { cookieText += "; domain=" + domain; }
		if (secure) { cookieText += "; secure"; }
		cookieText += '; SameSite=' + same_site
		document.cookie = cookieText;
	}
}

// Get cookie
function GetCookie(name) {
	if (navigator.cookieEnabled) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
	}
}

// Delete cookie
function DelCookie(name) {
	if (navigator.cookieEnabled) {
		const data = new Date();
		data.setTime(date.getMonth()-1);
		document.cookie = name + "=; expires=" + data.toGMTString();
	}
}

// Load script
function LoadScript(src) {
	let script = document.createElement('script');
	script.src = src;
	script.async = false;
	document.body.append(script);
}

// Load link
function LoadLink(path) {
	var resource = document.createElement('link');
	resource.setAttribute("rel", "stylesheet");
	resource.setAttribute("href",path);
	resource.setAttribute("type","text/css");
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(resource);
}

/*
 * Add animation from data-animation if visible in window
 * <div class="onview orange" data-animation="blob">+</div>
 */
function OnView(ele = '.onview')
{
	let items = document.querySelectorAll(ele);

	items.forEach((i) =>
	{
		let cl = i.dataset.animation;
		let wh = window.innerHeight - 50;
		let ws = window.scrollY;
		let offset = i.offsetTop;
		let wt = offset - ws;
		if(wt < wh) { i.classList.add(cl); }
		console.log("Offset", offset, "Top scroll", ws, "Win top", wt, "height", wh);
	})
}

/*
    Fixed top menu
*/
var div = document.getElementById("fixed");
if(div != null) {
    var fixedOffset = div.offsetTop;
}

function SetFixed()
{
    var pageOffset = window.scrollY;

    if(div != null) {
        if(pageOffset > fixedOffset - 90) {
            div.classList.add('fixed-menu');
        } else {
            div.classList.remove('fixed-menu');
        }
    }
}

/*
	// Window onscroll
	window.onscroll = () => {
		// Menu
		SetFixed();

		// Animatons
		OnView('.onview')
	}
*/

/*
	Validate form inputs
*/
function ValidPass(it)
{
	let str = it.value
	let ele = document.getElementById("error-pass");
	if(str.length > 0) {
		if(IsValidPass(str)) {
			console.log("Password", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("Password Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

function ValidEmail(it)
{
	let str = it.value
	let ele = document.getElementById("error-email");
	if(str.length > 0) {
		if(IsValidEmail(str)) {
			console.log("Email", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("Email Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

function ValidUsername(it)
{
	let str = it.value
	let ele = document.getElementById("error-username");
	if(str.length > 0) {
		if(IsValidUsername(str)) {
			console.log("User", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("User Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

function ValidNumber(it)
{
	let str = it.value
	let err = it.dataset.error;
	let ele = document.getElementById(err);
	if(str.length > 0) {
		if(IsValidInt(str)) {
			console.log("Number", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("Number Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

function ValidDecimal(it)
{
	let str = it.value
	let err = it.dataset.error;
	let ele = document.getElementById(err);
	if(str.length > 0) {
		if(IsValidDecimal(str)) {
			console.log("Decimal", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("Decimal Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

function ValidSlug(it)
{
	let str = it.value
	let err = it.dataset.error;
	let ele = document.getElementById(err);
	if(str.length > 0) {
		if(IsValidSlug(str)) {
			console.log("Number", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("Number Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

function ValidHour(it)
{
	let str = it.value
	let err = it.dataset.error;
	let ele = document.getElementById(err);
	if(str.length > 0) {
		if(IsValidHour(str)) {
			console.log("Hour", str)
			it.classList.remove("input-error")
			if(ele){
				ele.style.display = "none"
			}
		} else {
			console.log("Hour Error", str)
			it.classList.add("input-error")
			if(ele){
				ele.style.display = "inherit"
			}
		}
	} else {
		it.classList.remove("input-error")
		if(ele){
			ele.style.display = "none"
		}
	}
}

var element = {}
element.list = []

function AddAddonToList(it)
{
	let input = document.getElementById("addon-groups")
	if(input){
		let str = input.value;
		if(str){
			element = JSON.parse(str)
		}
		console.log("Input", str)
	}

	let a = document.getElementById("addon-group")
	if(a){
		let name = a.options[a.selectedIndex].getAttribute('data-name');
		let id = a.value
		let addon = {}
		addon.id = id
		addon.name = name
		DelFromList(element, id)
		element.list.push(addon)
	}

	if(input){
		input.value = JSON.stringify(element)
	}

	RefreshAddonGroupList()
}

function RefreshAddonGroupList()
{
	let input = document.getElementById("addon-groups")
	if(input){
		let json = input.value;
		if(json){
			let el = JSON.parse(json)
			let div = document.getElementById("addons-group-list")
			let h = ''
			el.list.forEach((i) => {
				h += '<div class="item-addon-group" data-id="'+i.id+'" onclick="DelAddonFromList(this)"> '+i.name+' <i class="fas fa-trash"></i> </div>'
			})
			div.innerHTML = h
		}
	}
}

function DelAddonFromList(it)
{
	let id = it.dataset.id
	let input = document.getElementById("addon-groups")
	if(input){
		let json = input.value
		if(json){
			element = JSON.parse(json)
			DelFromList(element, id)
			input.value = JSON.stringify(element)
			it.remove()
		}
	}
}

function DelFromList(arr, id)
{
	if(arr.list) {
		arr.list.forEach((value, index, self) => {
			if(value.id == id) {
				arr.list.splice(index, 1);
			}
		})
	}
	return arr
}

function DelFromArray(arr = [], id)
{
	arr.forEach((value, index, self) => {
		if(value[0] == id) {
			arr.splice(index, 1);
		}
	})

	return arr
}


function RemoveFromArray(arr = [], ...del) {
    return arr.filter(i => !del.includes(i))
}