import { PartyService } from '@Services';

describe('Party Service tests', () => {
	test('200 test', async () => {
		const result = await PartyService.CreateParty({ params: { hd: true } });
		expect(result.isStartedWithX).toEqual(true);
	});

});
