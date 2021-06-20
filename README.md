# SpaJs
SpaJs SPA application routing in javascript with translations.

### Router
main.js
```js
import Router from '/spa/router/router.js'

// Start router
let r = new Router()

// App html div id (optional)
r.AppDiv = "#app"
// Default page
r.AppMainPage = "/spa/home.js"
// Error page
r.AppErrorPage = "/spa/error/error.js"
// Show error page
r.ShowError = true
// Show console logs
r.ShowLog = true

// Add routes
r.addRoute("/", "/spa/home.js")
r.addRoute("/todos/list", "/spa/todo-list.js")
r.addRoute("/todo/{id}", "/spa/todo.js")
r.addRoute("/profil/{id}", "/spa/user.js")

// Load external links redirects
r.init()
```

### Add router
index.html
```html
<head>
	<script src="/routes.js" type="module"></script>
	<script src="/main.js"></script>
	<link href="/style.css" rel="stylesheet">
</head>
<body id="body">
	<div id="app">
		<h2> Loading ... </h2>
		<h4> <img src="/media/loader.gif"> </h4>
	</div>
</body>
```

### Page component class
nano /spa/home.js
```js
import Component from '/spa/router/component.js'
import Event from '/spa/router/event.js'
import Store from '/spa/store.js'
import View from '/spa/view/home.js'

export class Page extends Component
{
	Setup(div)
	{
		// Document events: click, dblclick, change, keydown, contextmenu, auxclick, mouseover ...
		let e1 = Event.addDocument("#boo-click", (item,index,event) => {
			Store.FetchId(11);
		}, "click");

		let e2 = Event.addDocument(".btn", (item,index,event) => {
			alert("Path clicked: " + event.target.dataset.id);
		}, "click");

		// Window events: hashchange, load, popstate - after local link click
		let e3 = Event.addWindow((event) => {
			Store.FetchAll(0,10);
		}, 'load');

		// Page title
		document.title = 'Home page - ' + location.pathname;

		return { 'html': View.Html(), 'document_events': [e1,e2], 'window_events': [e3] }
	}
}
```

### Install spa-js-router with git
```sh
# Get with git
git clone https://github.com/moovspace/spa-js-router.git /var/www/html/spajs.xx

# Permissions
chown -R your-user-name:www-data /var/www/html/spajs.xx
chmod -R 2775 /var/www/html/spajs.xx
```

### Domain local host
nano /etc/hosts
```sh
# Add to /etc/hosts file
127.0.0.1	spajs.xx www.spajs.xx
```

### Nginx
```bash
# Add to file
# /etc/nginx/sites-available/default
# Restart nginx
# sudo service nginx restart

server {
	listen 80;
	listen [::]:80;
	server_name spajs.xx;
	root /var/www/html/spajs.xx;
	index index.html
	# Js
	location / {
		# Get file or folder or redirect uri to index.html
		try_files $uri $uri/ /index.html;

		# Get file or folder or redirect uri to url param in index.php
		# try_files $uri $uri/ /index.php?url=$uri&$args;
		# Get file or folder or error
		# try_files $uri $uri/ =404;
	}
	# Php
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/var/run/php/php7.3-fpm.sock;
		# fastcgi_pass 127.0.0.1:9000;
	}
	# Allow symlinks
	disable_symlinks off;
	# File upload size
	client_max_body_size 100M;

	# Tls redirect
	# return 301 https://$host$request_uri;
	# return 301 https://spajs.xx$request_uri;
}
```

### Run from browser
```sh
http://spajs.xx
```

### Apache2 .htaccess
```bash
RewriteEngine on
# RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# Rewrite to index.html
RewriteRule ^(.*)$ /index.html [NC,L,QSA]
# Rewrite to index.php
# RewriteRule ^(.*)$ /index.php?uri=$1 [NC,L,QSA]
DirectoryIndex index.html
```

### Sample page image
<img src="https://raw.githubusercontent.com/moovspace/spa-js-router/master/media/spa-js-router-fetch-data.png.png" width="100%">