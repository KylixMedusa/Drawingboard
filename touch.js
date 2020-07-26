// Touch Events
	draw = {
		started: false,
		start: function(evt) {

			context.beginPath();
			context.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function(evt) {

			if (this.started) {
				context.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				context.strokeStyle = color;
				context.lineWidth = size.value;
				context.stroke();
			}

		},
		end: function(evt) {
			this.started = false;
		}
	};
	
	// Touch Events
	myPics.addEventListener('touchstart', draw.start, false);
	myPics.addEventListener('touchend', draw.end, false);
	myPics.addEventListener('touchmove', draw.move, false);
	
	// Disable Page Move
	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},{ capture: false, passive: false });
