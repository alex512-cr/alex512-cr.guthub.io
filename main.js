const radio1_btn = document.getElementById("id1");
const radio2_btn = document.getElementById("id2");
const radio3_btn = document.getElementById("id3");

const submit_btn = document.getElementById("submit");

let tg = window.Telegram.WebApp;
console.log(tg);
//console.log(tg);
radio1_btn.onclick = () => {
	radio1_btn.classList.add("radio_focus");
	radio2_btn.classList.remove("radio_focus");
	radio3_btn.classList.remove("radio_focus");
}

radio2_btn.onclick = () => {
	radio1_btn.classList.remove("radio_focus");
	radio2_btn.classList.add("radio_focus");
	radio3_btn.classList.remove("radio_focus");
}

radio3_btn.onclick = () => {
	radio1_btn.classList.remove("radio_focus");
	radio2_btn.classList.remove("radio_focus");
	radio3_btn.classList.add("radio_focus");
}

submit_btn.onclick = () => {
	console.log("yes");
}

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
