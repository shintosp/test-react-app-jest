var arrOfObjects = [
{domain: "www.google.com", desc: "search Engine"},
{domain: "www.gmail.com", desc: "mail server"},
{domain: "www.yahoo.com", desc: "search Engine"},
{domain: "www.bing.com", desc: "search Engine"},
];

function checkUrl(arrOfObjects, url) {
	console.log(arrOfObjects.filter((index) => index.domain.includes(url)));

};
checkUrl(arrOfObjects,"www.google.com")