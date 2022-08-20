const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        slowMo : 50
    }

    );
    const page = await browser.newPage();
    await page.goto('https://course.ncku.edu.tw/index.php?c=auth');
    //await page.waitForSelector('dropdown eng_span')
    try {
    
        await page.waitForTimeout(500);
        //return array [login_button] instead of login_button
        const [login_button] = await page.$x("//*[@id='loginbg']/div/div/div[2]/a");
        
        await login_button.click(login_button);
        await page.waitForTimeout(500);
        const [id_input] = await page.$x("//*[@id='userNameInput']");
        await id_input.type("id");
        const [passwd_input] = await page.$x("//*[@id='passwordInput']");
        await passwd_input.type("passwd");
        
        await page.screenshot({ path: 'after_typing.png' });

        console.log("input success");
        const [login_btn2] = await page.$x("//*[@id='submitButton']");
        await login_btn2.click(login_btn2);
        await page.waitForTimeout(1500);
        await page.screenshot({ path: 'login_success.png' });
        console.log("login success");
        try {
            //navigation to course page
            await page.waitForTimeout(1500);
            //const data = await page.evaluate(() => document.querySelector('*').outerHTML);
            //console.log(data);

            await page.waitForSelector(".open_profile");
            await page.click(".open_profile");
            await page.waitForTimeout(1000);
            await page.screenshot({ path: 'course_page.png' });

        }
        catch (error) {
            console.log(error);
        }
        
    }
    catch (error) {
        console.log(error);
    }

    
    await browser.close();
})();