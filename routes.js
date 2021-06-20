import Router from '/spa/router/router.js'

// Set default lang
let lng = "en"

// Add router
let r = new Router(lng)

// Console logs
// r.ShowLog = true

// Routes
r.addRoute("/", "/spa/home.js")
r.addRoute("/todos/list", "/spa/todo-list.js")
r.addRoute("/todo/{id}", "/spa/todo.js")
r.addRoute("/profil/{id}", "/spa/user.js")
r.addRoute("/upload", "/spa/upload.js")

// Run router
r.init()