const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");
const removeBtn = document.getElementById("remove-btn");


let uid = 123;
let user = {
	name: "Ramil",
	age: 23,
	hobbies: ["Sports", "Cooking"],
};

storeBtn.addEventListener("click", () => {
	document.cookie = `uid=${uid}; max-age=5`;
	document.cookie = `user=${JSON.stringify(user)}; max-age=5`;
});

retrieveBtn.addEventListener("click", () => {
	console.log(document.cookie, "document.cookie");
	const cookieData = document.cookie.split(";");
	const data = cookieData.map((cookie) => cookie.trim());

	console.log(data[1].split("=")[1]);
});

removeBtn.addEventListener("click", () => {});
