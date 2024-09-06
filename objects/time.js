let time = {
	hour: 14,
	minute: 30,
	second: 45,
	formatTime: function () {
		console.log(`${this.hour}:${this.minute}:${this.second}`);
	},
};

console.log(time.formatTime());
