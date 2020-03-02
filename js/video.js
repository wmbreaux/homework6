var video;

function getVid(){

	video = document.querySelector("#myVideo"); 
	play = document.querySelector('.play');
	pause = document.querySelector('.pause');

}

function playVid() { 

	video.play();
	console.log("Play Video");

} 

function pauseVid() { 

	video.pause();
	console.log("Pause Video");

}

function decreaseSpeed() { 

	video.playbackRate = video.playbackRate * .8;
	console.log("Speed is "+ video.playbackRate);
	  
}

function increaseSpeed() {

	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);

}

function skipAhead() {

	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
	} else {
		video.currentTime = video.currentTime + 60;
	}

	console.log("Current location is "+ Math.round(video.currentTime) + " seconds");

}

function mute() { 

		video.muted = !video.muted;
		if (document.querySelector("#mute").innerHTML === 'Mute'){
			document.querySelector("#mute").innerHTML = 'Unmute';
			console.log("Muted");
		}
		else{
			document.querySelector("#mute").innerHTML = 'Mute';
			console.log("Unmuted");
		}

}

function changeVolume() {

	video.volume = document.querySelector("#volumeSlider").value * 0.01;
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%' ;
	console.log("Volume is " + (video.volume * 100) + "%");

}
       

function gray() { 

	video.setAttribute('class','grayscale');
	console.log("In grayscale");

}

function color() {

	video.setAttribute('class','color');
	console.log("In color"); 

}

