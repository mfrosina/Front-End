const { expect, browser, $ } = require("@wdio/globals");

describe("Simple Web Site (1440x900)", () => {
	beforeEach(async () => {
		await browser.setWindowSize(1440, 900);
		await browser.url("http://localhost:3000/simple-web-site/src/");
	});

	it("Should compare full page", async () => {
		await expect(await browser.checkScreen("full_page", {})).toEqual(0);
	});

	it("Should compare header", async () => {
		await expect(await browser.checkElement(await $('#header'), 'header', {})).toEqual(0);
	});

	it("Should compare navigation", async () => {
		await expect(await browser.checkElement(await $('#header nav'), 'nav')).toEqual(0);
	});

	it("Should compare heading", async () => {
		await expect(await browser.checkElement(await $('#header h1'), 'heading')).toEqual(0);
	});

	it("Should compare main", async () => {
		await expect(await browser.checkElement(await $('#main'), 'main')).toEqual(0);
	});

	it("Should compare first column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[0], 'first-column')).toEqual(0);
	});

	it("Should compare second column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[1], 'second-column')).toEqual(0);
	});

	it("Should compare third column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[2], 'third-column')).toEqual(0);
	});


	it("Should compare footer", async () => {
		const footer = await $("#footer");
		await footer.scrollIntoView();

		await expect(await browser.checkScreen("full_page_scrolled_end", {})).toEqual(0);
		await expect(await browser.checkElement(footer, 'footer')).toEqual(0);
	});
});

describe("Simple Web Site (1366x768)", () => {
	beforeEach(async () => {
		await browser.setWindowSize(1366, 768);
		await browser.url("http://localhost:3000/simple-web-site/src/");
	});

	it("Should compare full page", async () => {
		await expect(await browser.checkElement(await $("body"), "full_page", {})).toEqual(0);
	});

	it("Should compare header", async () => {
		await expect(await browser.checkElement(await $('#header'), 'header', {})).toEqual(0);
	});

	it("Should compare navigation", async () => {
		await expect(await browser.checkElement(await $('#header nav'), 'nav')).toEqual(0);
	});

	it("Should compare heading", async () => {
		await expect(await browser.checkElement(await $('#header h1'), 'heading')).toEqual(0);
	});

	it("Should compare main", async () => {
		await expect(await browser.checkElement(await $('#main'), 'main')).toEqual(0);
	});

	it("Should compare first column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[0], 'first-column')).toEqual(0);
	});

	it("Should compare second column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[1], 'second-column')).toEqual(0);
	});

	it("Should compare third column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[2], 'third-column')).toEqual(0);
	});


	it("Should compare footer", async () => {
		const footer = await $("#footer");
		await footer.scrollIntoView();

		await expect(await browser.checkScreen("full_page_scrolled_end", {})).toEqual(0);
		await expect(await browser.checkElement(footer, 'footer')).toEqual(0);
	});
});

describe("Simple Web Site (500x800)", () => {
	beforeEach(async () => {
		await browser.setWindowSize(500, 800);
		await browser.url("http://localhost:3000/simple-web-site/src/");
	});

	it("Should compare full page", async () => {
		await expect(await browser.checkScreen("full_page", {})).toEqual(0);
	});

	it("Should compare header", async () => {
		await expect(await browser.checkElement(await $('#header'), 'header', {})).toEqual(0);
	});

	it("Should compare navigation", async () => {
		await expect(await browser.checkElement(await $('#header nav'), 'nav')).toEqual(0);
	});

	it("Should compare heading", async () => {
		await expect(await browser.checkElement(await $('#header h1'), 'heading')).toEqual(0);
	});

	it("Should compare main", async () => {
		await expect(await browser.checkElement(await $('#main'), 'main')).toEqual(0);
	});

	it("Should compare first column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[0], 'first-column')).toEqual(0);
	});

	it("Should compare second column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[1], 'second-column')).toEqual(0);
	});

	it("Should compare third column", async () => {
		await expect(await browser.checkElement(await $$('.two-column')[2], 'third-column')).toEqual(0);
	});


	it("Should compare footer", async () => {
		const footer = await $("#footer");
		await footer.scrollIntoView();

		await expect(await browser.checkScreen("full_page_scrolled_end", {})).toEqual(0);
		await expect(await browser.checkElement(footer, 'footer')).toEqual(0);
	});
});
