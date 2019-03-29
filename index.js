const cheerio = require('cheerio');
const got = require('got');

const locations = ['kings-cross', 'gherkin', 'st-kats', 'west-india-quay'];
const json = {data: []};

// Get the locations
const getLocations = () => {
	return locations;
};

// Get the HTML
const getHTML = async location => {
	try {
		if (!locations[location]) {
			console.log('Error: Invalid location number');
			return null;
		}
		json.location = locations[location];
		return await got(locations[location], {baseUrl: 'http://www.kerbfood.com/markets'});
	} catch (error) {
		if (error.response.statusCode && error.response.statusMessage) {
			console.error(`${error.response.statusCode}: ${error.response.statusMessage}`);
		} else {
			console.error(error);
		}
	}
}

// Create trader list
const createTraders = async data => {
	const $ = cheerio.load(data);
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

const main = async location => {
	const response = await getHTML(location);
	return (response) ? await createTraders(response.body) : json;
}

module.exports.traders = main;
module.exports.locations = getLocations;