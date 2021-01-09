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
	sessionStorage.setItem("uid", uid);
	sessionStorage.setItem("user", user);
	// !
	sessionStorage.setItem("user", JSON.stringify(user));
});

retrieveBtn.addEventListener("click", () => {
	// let value = sessionStorage.getItem("uid");
	// console.log(value);
	// console.log(sessionStorage.getItem("user"));
	// let user = JSON.parse(sessionStorage.getItem("user"));
	let user = sessionStorage.getItem("user");
	console.log("user", user.name);
});

removeBtn.addEventListener("click", () => {
	sessionStorage.removeItem("uid");
});
