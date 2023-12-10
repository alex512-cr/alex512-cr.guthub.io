const radio1_btn = document.getElementById("id1");
const radio2_btn = document.getElementById("id2");
const radio3_btn = document.getElementById("id3");

const address_input = document.getElementById("address_input");

const submit_btn = document.getElementById("submit");

let tg = window.Telegram.WebApp;
console.log(tg);
//console.log(tg);
radio1_btn.onclick = () => {
	radio1_btn.classList.add("radio_focus");
	radio2_btn.classList.remove("radio_focus");
	radio3_btn.classList.remove("radio_focus");
	address_input.classList.add("address_form_disabled");
}

radio2_btn.onclick = () => {
	radio1_btn.classList.remove("radio_focus");
	radio2_btn.classList.add("radio_focus");
	radio3_btn.classList.remove("radio_focus");
	address_input.classList.remove("address_form_disabled");
}

radio3_btn.onclick = () => {
	radio1_btn.classList.remove("radio_focus");
	radio2_btn.classList.remove("radio_focus");
	radio3_btn.classList.add("radio_focus");
	address_input.classList.remove("address_form_disabled");
}

submit_btn.onclick = () => {
	console.log("yes");
}

console.log(WebApp.WebAppUser.username);
