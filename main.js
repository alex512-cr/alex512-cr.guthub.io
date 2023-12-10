const radio1_btn = document.getElementById("id1");
const radio2_btn = document.getElementById("id2");
const radio3_btn = document.getElementById("id3");

const address_input = document.getElementById("address_input");
const number_input = document.getElementById("input_number_value");

const submit_btn = document.getElementById("submit");

let tg = window.Telegram.WebApp;
tg.ready();

let radio = 1;

radio1_btn.onclick = () => {
	radio1_btn.classList.add("radio_focus");
	radio2_btn.classList.remove("radio_focus");
	radio3_btn.classList.remove("radio_focus");
	address_input.classList.add("address_form_disabled");
	radio = 1;
}

radio2_btn.onclick = () => {
	radio1_btn.classList.remove("radio_focus");
	radio2_btn.classList.add("radio_focus");
	radio3_btn.classList.remove("radio_focus");
	address_input.classList.remove("address_form_disabled");
	radio = 2;
}

radio3_btn.onclick = () => {
	radio1_btn.classList.remove("radio_focus");
	radio2_btn.classList.remove("radio_focus");
	radio3_btn.classList.add("radio_focus");
	address_input.classList.remove("address_form_disabled");
	radio = 3;
}

submit_btn.onclick = () => {
	let delivery_address = '';
	let number_of_calendars = 0;
	let delivery_address_input = document.getElementById("input_address_value");
	if (radio != 1) {
		delivery_address = delivery_address_input.value;
	}
	number_of_calendars = number_input.value;
	console.log(delivery_address, number_of_calendars)
	let data = {
		username: tg.initDataUnsafe.user.username,
		method_of_obtaining: radio,
		delivery_address: delivery_address,
		number_of_calendars: number_of_calendars
	}
	tg.sendData(JSON.stringify(data));
	tg.close();
}
