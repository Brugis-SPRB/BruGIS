var clientRequest = require("./httpclient").request;
var Headers = require("ringo/utils/http").Headers;
var objects = require("ringo/utils/objects");
var log = require("ringo/logging").getLogger(module.id);

function getGeoServerUrl(request) {
    var url = java.lang.System.getProperty("app.proxy.geoserver");
    if (url) {
        if (url.charAt(url.length-1) !== "/") {
            url = url + "/";
        }
    } else {
        url = request.scheme + "://" + request.host + (request.port ? ":" + request.port : "") + "/geoserver/";
    }
    return url;
}

function getLoginUrl(request) {
    return getGeoServerUrl(request) + "j_spring_security_check";
}

function getAuthUrl(request) {
    return getGeoServerUrl(request) + "rest";
}

// get status (ACK!) by parsing Location header
function parseStatus(exchange) {
    var status = 200;
    var location = exchange.headers.get("Location");
	print(exchange.headers.get("Location"));
    if (/error=true/.test(location)) {
        status = 401;
    }
    return status;
}

exports.getStatus = function(request) {
/*
    var url = getAuthUrl(request);
	print(url);
    var status = 401;
    var headers = new Headers(request.headers);
    var token = headers.get("Cookie");

    var exchange = clientRequest({
        url: url,
        method: "GET",
        async: false,
        headers: headers
    });
    exchange.wait();
*/
    //return exchange.status; Does not work anymore with current browser
	return 200;
};

exports.authenticate = function(request) {
    var params = request.postParams;
    var status = 401;
    var token;
    if (params.username && params.password) {
        var url = getLoginUrl(request);
        log.info("url {}",url);
        var exchange = clientRequest({
            url: url,
            method: "post",
            async: false,
            data: {
                username: params.username,
                password: params.password
            }
        });
        exchange.wait();

        status = parseStatus(exchange);

        if (status === 200) {
            var cookie = exchange.headers.get("Set-Cookie");
			      log.info("cookie {}",cookie);
            //- cookie JSESSIONID=B5C07BAC68D130AE0CD986336B446A52; Path=/geoserver/; HttpOnly
            if (cookie) {
              //  token = cookie.split(";").shift();
				// CHange because of httponly cookie
				      token = cookie.split(";")[0];
            }
        }
    }
    return {
        token: token,
        status: status
    }
};
