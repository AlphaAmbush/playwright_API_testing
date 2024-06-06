// @ts-check
const { test, expect } = require("@playwright/test");
const username = "testUser";
const password = "test";

test("Auth testing", async ({ request }) => {
	const response = await request.get(
		`https://petstore.swagger.io/oauth/authorize`
	);
	expect(response.ok()).toBeTruthy();
	console.log("auth successful");
});

test.describe.serial("User related tests @sanity", async () => {
	test("Create user", async ({ request }) => {
		const response = await request.post(`https://petstore.swagger.io/v2/user`, {
			data: {
				id: 0,
				username: username,
				firstName: "string",
				lastName: "string",
				email: "string",
				password: password,
				phone: "string",
				userStatus: 0,
			},
		});
		expect(response.ok()).toBeTruthy();
	});

	test("Login test with creds", async ({ request }) => {
		const response = await request.get(
			`https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`
		);
		expect(response.ok()).toBeTruthy();
		let json = await response.json();
		console.log(json.message);
		expect(json.message).toContain("logged in user session");
	});

	test("Update user", async ({ request }) => {
		const response = await request.put(
			`https://petstore.swagger.io/v2/user/${username}`,
			{
				data: {
					id: 0,
					username: username,
					firstName: "string",
					lastName: "string",
					email: "string",
					password: password,
					phone: "123456789",
					userStatus: 0,
				},
			}
		);
		expect(response.ok()).toBeTruthy();
	});

	test("Get updated user", async ({ request }) => {
		const response = await request.get(
			`https://petstore.swagger.io/v2/user/${username}`
		);
		expect(response.ok()).toBeTruthy();
		let jsonData = await response.json();
		console.log(jsonData);
		expect(jsonData.username).toContain("testUser");
		expect(jsonData.password).toContain("test");
		console.log(jsonData);
	});

	test("Delete user", async ({ request }) => {
		const response = await request.delete(
			`https://petstore.swagger.io/v2/user/${username}`
		);
		expect(response.ok()).toBeTruthy();
	});
});
