const dailyHours = document.querySelectorAll(".daily");
const weeklyHours = document.querySelectorAll(".weekly");
const monthlyHours = document.querySelectorAll(".monthly");
const currentHours = document.querySelectorAll(".current");
const previousHours = document.querySelectorAll(".previous");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

fetch("data.json")
	.then((response) => response.json())
	.then((json) => {
		for (let i = 0; i < currentHours.length; i += 3) {
			currentHours[i].innerHTML = `${json[Math.floor(i / 3)].timeframes.daily.current}`;
			previousHours[i].innerHTML = `${json[Math.floor(i / 3)].timeframes.daily.previous}`;
		}

		for (let i = 1; i < currentHours.length; i += 3) {
			currentHours[i].innerHTML = `${json[Math.floor(i / 3)].timeframes.weekly.current}`;
			previousHours[i].innerHTML = `${json[Math.floor(i / 3)].timeframes.weekly.previous}`;
		}

		for (let i = 2; i < currentHours.length; i += 3) {
			currentHours[i].innerHTML = `${json[Math.floor(i / 3)].timeframes.monthly.current}`;
			previousHours[i].innerHTML = `${json[Math.floor(i / 3)].timeframes.monthly.previous}`;
		}
	});

showDaily();
hideWeekly();
hideMonthly();

dailyBtn.addEventListener("click", () => {
	showDaily();
	hideWeekly();
	hideMonthly();
});

weeklyBtn.addEventListener("click", () => {
	showWeekly();
	hideDaily();
	hideMonthly();
});

monthlyBtn.addEventListener("click", () => {
	showMonthly();
	hideDaily();
	hideWeekly();
});

function showDaily() {
	dailyBtn.style.color = "white";

	dailyHours.forEach((stat) => {
		stat.style.display = null;
	});
}

function showWeekly() {
	weeklyBtn.style.color = "white";
	weeklyHours.forEach((stat) => {
		stat.style.display = null;
	});
}

function showMonthly() {
	monthlyBtn.style.color = "white";
	monthlyHours.forEach((stat) => {
		stat.style.display = null;
	});
}

function hideDaily() {
	dailyBtn.style.color = null;
	dailyHours.forEach((stat) => {
		stat.style.display = "none";
	});
}

function hideWeekly() {
	weeklyBtn.style.color = null;
	weeklyHours.forEach((stat) => {
		stat.style.display = "none";
	});
}

function hideMonthly() {
	monthlyBtn.style.color = null;
	monthlyHours.forEach((stat) => {
		stat.style.display = "none";
	});
}
