const puppeteer = require('puppeteer');
const fs = require('fs');
var course_dict = new Object();
var id = "";
var passwd = ""; 

async function crawl_ncku() {
    const browser = await puppeteer.launch({
        slowMo: 50
    });
    const page = await browser.newPage();
    await page.goto('https://qrys.ncku.edu.tw/ncku/qrys02.asp');
    await page.screenshot({ path: './scrawl2/test1.png' });
    await page.setDefaultNavigationTimeout(9000); //set timeout 30000 -> 9000

    let department_id_raw = fs.readFileSync('department.json');
    var department_id_dict = JSON.parse(department_id_raw);
    //console.log(department_id_dict);
    try {


        const [login_button] = await page.$x("//*[@id='form1']/div/table/tbody/tr[2]/td[2]/div/table/tbody/tr[3]/td/div/button/img");
        await Promise.all([
            await login_button.click(login_button),
            page.waitForNavigation({ waitUntil: "domcontentloaded" }),
        ]);

        await page.waitForSelector("#userNameInput");
        await page.screenshot({ path: './scrawl2/test2.png' });


        const [id_input] = await page.$x("//*[@id='userNameInput']");
        //抓取id
        await id_input.type(id);
        const [passwd_input] = await page.$x("//*[@id='passwordInput']");
        //抓取passwd
        await passwd_input.type(passwd);
        console.log("input success...");
        const [login_btn2] = await page.$x("//*[@id='submitButton']");
        //await login_btn2.click(login_btn2);
        await Promise.all([
            await login_btn2.click(login_btn2),
            page.waitForNavigation({ waitUntil: "domcontentloaded" }),
            console.log("login success..."),
        ]);

        const [jump_to_course] = await page.$x("/html/body/form/table/tbody/tr[7]/td/div/a");
        await Promise.all([
            await jump_to_course.click(jump_to_course),
            page.waitForNavigation(),
            console.log("enter course page success..."),
        ]);

        //await jump_to_course.click(jump_to_course);
        await page.screenshot({ path: './scrawl2/course.png' });



        //################################################
        //url : https://stackoverflow.com/questions/49236981/want-to-scrape-table-using-puppeteer-how-can-i-get-all-rows-iterate-through-ro

        const result = await page.evaluate(() => {
            const rows = document.querySelectorAll('table tbody tr');
            return Array.from(rows, row => {
                const columns = row.querySelectorAll('td');
                return Array.from(columns, column => column.innerText);
            });
        });

        //console.log(result);
        //console.log(result.length);

        //爬課表到 course_dict
        for (let i = 7; i < result.length; i++) {
            //有課程的row.length = 14
            row = result[i];
            if (row.length != 14)
                break;
            department_id = row[1];
            let department = department_id_dict[department_id];
            course_name = row[4];
            course_dict[course_name] = [];
            course_dict[course_name].push(department_id);
            course_dict[course_name].push(department);
            //7-13 對應一到日
            for (let j = 7; j < 14; j++) {
                console.log(row[j]);
                let text = row[j];
                let day = j - 6;
                text = text.substring(2, 4);
                text = day + '_' + text;
                course_dict[course_name].push(text);
            }
        }
        console.log(course_dict);

    }
    catch (error) {
        console.log(error);
    }
    await browser.close();

}

crawl_ncku();