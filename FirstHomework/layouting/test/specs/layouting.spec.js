const { expect, browser, $ } = require("@wdio/globals");

describe("Layouting", () => {
	before(async () => {
		await browser.url("http://localhost:3000/layouting/src/");
		await browser.setWindowSize(1440, 900);
	});

	it("should compare vertical layout", async () => {
		await expect(await browser.checkElement(await $("#wrapper"), "initial", {})).toEqual(0);
	});

	it("should compare horizontal layout", async () => {
		const horizontal = await $$("#main-nav li a")[1];

		await horizontal.click();
		await expect(await browser.checkElement(await $("#wrapper"), "horizontal", {})).toEqual(0);
	});

	it("should compare 3 column layout", async () => {
		const threeColumn = await $$("#main-nav li a")[2];

		await threeColumn.click();
		await expect(await browser.checkElement(await $("#wrapper"), "3_column", {})).toEqual(0);
	});

	it("should compare full page layout", async () => {
		const fullPage = await $$("#main-nav li a")[3];

		await fullPage.click();
		await expect(await browser.checkElement(await $("#wrapper"), "full", {})).toEqual(0);
	});
});
