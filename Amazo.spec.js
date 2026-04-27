


test('amazon',async ({page}) => {




    await page.goto('https://www.amazon.in/');

    await page.getById('twotabsearchtextbox').type('iphone 13')
    
    
    await page.getByRole('input', { name: "submit" }).click();


    await page.locator('//img[@src="https://m.media-amazon.com/images/I/61Nu++wQx9L._AC_UY218_.jpg"]').click();
    
 

    //waitForEvent(newContext.)

    await page.waitForEvent('popup', async popup => {
        await page.locator('//img[@src="https://m.media-amazon.com/images/I/61Nu++wQx9L._AC_UY218_.jpg"]').click();
    });

});

test('demo',async ({newContext}) => {

    await newContext.locator('')

    //waitForEvent()
});