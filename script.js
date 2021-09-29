const dailyHours = document.querySelectorAll(".daily");
const weeklyHours = document.querySelectorAll(".weekly");
const monthlyHours = document.querySelectorAll(".monthly");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

console.log("Hello World!");
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
