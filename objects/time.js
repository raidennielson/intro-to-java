let time = {
	hour: 14,
	minute: 30,
	second: 45,
	formatTime: function () {
		console.log(`Current time: ${this.hour}:${this.minute}:${this.second}`);
	},
};

time.formatTime();
