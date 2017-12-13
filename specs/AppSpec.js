
export default function(spec) {

	spec.describe('Basic workflow', function() {

		spec.it('tap on the component and back to the grid view', async function() {
			await tapAndBack('9366518572');
			await tapAndBack('9366497280');
			await tapAndBack('9366496694');
			await tapAndBack('9363715015');
		});

	});

	const tapAndBack = async (id) =>{
		await spec.exists(`FlickrItem.${id}`);
		await spec.press(`FlickrItem.${id}`);
		await spec.pause(2000);
		await spec.exists(`FlickPreview.${id}`);
		await spec.press(`FlickPreview.${id}`);
		await spec.pause(2000);
	}

	// spec.describe('Tapping on an employee', function() {
	//
	// 	spec.it('shows a button to email them', async function() {
	// 		await spec.fillIn('SearchBar.TextInput', 'Amy');
	// 		await spec.press('EmployeeListItem.AmyTaylor');
	// 		await spec.pause(1000);
	// 		await spec.exists('ActionBar.EmailButton');
	// 	});
	//
	// });
}