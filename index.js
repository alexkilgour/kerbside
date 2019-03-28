const cheerio = require('cheerio');
const got = require('got');

// Grab the HTML
const getHTML = async () => {
	try {
		return await got('kings-cross', {baseUrl: 'http://www.kerbfood.com/markets'});
	} catch (error) {
		console.log(error.response.body);
	}
}

// Create trader list
const createTraders = async data => {
	const $ = cheerio.load(data);
	const json = {data: []};
	const $container = $('.traders-list--wrap .royalSlider.traders-carousel');
	
	$container.find($('.rsContent')).each(function () {
		const $this = $(this);
		const obj = {traders: {}};
		obj.date = $this.find($('.rsCaption')).text();

		$this.find($('.grid-item')).each(function (i, elem) {
			const name = $(elem).find($('.grid-title')).text().trim();
			const url = $(elem).find('a').attr('href');
			obj.traders[name] = url;
		});

		json.data.push(obj);
	});

	return json;
}

// Run
getHTML()
	.then(res => createTraders(res.body))
		.then(res => {
			console.log(JSON.stringify(res, null, 2));
		});