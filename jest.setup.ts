import * as Adapter from 'enzyme-adapter-react-16';

require('enzyme').configure({ adapter: new Adapter() });

const nock = require('nock');

nock('http://localhost:4000')
	.get('/party/create')
	.query({ api_key: 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'})
	.reply(200);

//env variables
require('dotenv').config({ path: '.env.test' });

import { setConfig } from 'next/config'
setConfig({
	publicRuntimeConfig:
	{
		'API_URL': process.env.API_URL,
		'API_KEY': process.env.API_KEY
	}
});