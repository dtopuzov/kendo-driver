import { Browser } from "../../../src/selenium/browser";
import { Grid } from "../../../src/components/grid";
import { Config } from "../../const";
import { isAscending, isDescending } from "../../utils";

let browser: Browser;
let grid: Grid;

beforeAll(() => {
    browser = new Browser();
});

afterAll(async () => {
    await browser.close();
});

it("should be able to sort", async () => {
    await browser.navigateTo(`${Config.vueUrl}/grid/examples/sorting/custom/?theme=default`);
    grid = new Grid(browser.driver);

    await browser.sleep(3000);
    const header = await grid.Header(1);
    expect(await isAscending(await grid.CellsByColumn(1))).toBe(true);

    await header.click();
    expect(await isDescending(await grid.CellsByColumn(1))).toBe(true);
});
