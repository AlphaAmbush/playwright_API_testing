// @ts-check
const { test, expect } = require("@playwright/test");
let orderID = 10;
let placedOrderData = {
	id: orderID,
	petId: 1,
	quantity: 20,
	shipDate: "2024-06-06T15:00:10.075Z",
	status: "placed",
	complete: true,
};

test.describe.serial("Store related tests @integration", async () => {
	test("Get store inventory", async ({ request }) => {
		const response = await request.get(
			`https://petstore.swagger.io/v2/store/inventory`
		);
		expect(response.ok()).toBeTruthy();
		let jsonData = await response.json();
		console.log(jsonData);
	});

	test("Place pet order", async ({ request }) => {
		const response = await request.post(
			`https://petstore.swagger.io/v2/store/order`,
			{
				data: placedOrderData,
			}
		);
		expect(response.ok()).toBeTruthy();
		let jsonData = await response.json();
		expect(jsonData.status).toContain("placed");
	});

	test("get placed pet order", async ({ request }) => {
		const response = await request.get(
			`https://petstore.swagger.io/v2/store/order/${orderID}`
		);
		expect(response.ok()).toBeTruthy();
		let jsonData = await response.json();
		expect(jsonData.id).toBe(10);
		expect(jsonData.quantity).toBe(20);
	});

	test("delete placed pet order", async ({ request }) => {
		const response = await request.delete(
			`https://petstore.swagger.io/v2/store/order/${orderID}`
		);
		expect(response.ok()).toBeTruthy();
		let jsonData = await response.json();
	});

	test("Check if order got deleted", async ({ request }) => {
		const response = await request.get(
			`https://petstore.swagger.io/v2/store/order/${orderID}`
		);
		let status = response.status();
		expect(status).toBe(404);
	});
});
