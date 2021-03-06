var {Application} = require("stick");

var app = exports.app = Application();
app.configure("render", "route");
app.render.base = module.resolve("../templates");
app.render.master = "base.html";
var log = require("ringo/logging").getLogger(module.id);
var auth = require("../auth");

app.get("/", function(request) {
    var status = auth.getStatus(request);
	//console.dir(request);
	log.info("requesturl {}",request.env.servletRequest.getRequestURL());
	log.info("pathinfo {}",request.env.servletRequest.getPathInfo());
	
    return app.render("brugis.html", {status: status || 404});
});