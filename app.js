let sum = 0;

xknap1.addEventListener("click", function () {
	bestillinger.innerHTML += for1.innerHTML;
	bestillinger.innerHTML += sessionStorage.getItem("xknap1") + parseInt(sessionStorage.getItem("xknap1"));
	sum = sum + 79;
	ialt.innerHTML = sum;
});

xknap2.addEventListener("click", function () {
	bestillinger.innerHTML += for2.innerHTML;
	bestillinger.innerHTML += sessionStorage.getItem("xknap2") + parseInt(sessionStorage.getItem("xknap2"));
	sum = sum + 73;
	ialt.innerHTML = sum;
});

xknap3.addEventListener("click", function () {
	bestillinger.innerHTML += for3.innerHTML;
	bestillinger.innerHTML += sessionStorage.getItem("xknap3") + parseInt(sessionStorage.getItem("xknap3"));
	sum = sum + 85;
	ialt.innerHTML = sum;
});

function visSum(kr) {
	sum -= kr;
	ialt.innerHTML = sum;
}




//Betal knap
køkkenknap.addEventListener("click", function () {
	localStorage.setItem("liste", bestillinger.innerHTML);
});


 