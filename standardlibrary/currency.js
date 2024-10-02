function formatUSCurrency(amount) {
	amount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
	console.log(amount);
	return amount;
}
formatUSCurrency(1201239.12398);
