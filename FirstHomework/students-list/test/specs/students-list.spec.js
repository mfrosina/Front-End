const { expect, browser, $ } = require("@wdio/globals");

describe(`Students List (1366 x 768)`, () => {
	beforeEach(async () => {
		await browser.setWindowSize(1366, 768);
		await browser.url("http://localhost:3000/students-list/src");
	});

	it("should compare students list full screen", async () => {
		(await $('#header')).moveTo();
		await expect(await browser.checkElement(await $("#container"), "student_list_full_page", {})).toEqual(0);
	});
	
	it("should compare students list header", async () => {
		await expect(await browser.checkElement(await $('#header'), 'students_list_header', {})).toEqual(0);
	});

	it("should compare students list header list", async () => {
		await expect(await browser.checkElement(await $('#header ul'), 'students_list_header_list', {})).toEqual(0);
	});

	it("should compare students list main list", async () => {
		await expect(await browser.checkElement(await $('#main ul'), 'students_list_main_list', {})).toEqual(0);
	});

	it("should compare hover on add button", async () => {
		(await $('#add-btn')).moveTo();
		await expect(await browser.checkElement(await $('#add-btn'), 'students_list_add_btn_hover', {})).toEqual(0);
	});

	it("should compare hover on first list item", async () => {
		(await $$('#main ul li'))[0].moveTo();
		await expect(await browser.checkElement((await $$('#main ul li'))[0], 'students_list_first_item_hover', {})).toEqual(0);
	});
});
