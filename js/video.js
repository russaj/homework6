var video;

function getVid(){
	video = document.querySelector("#myVideo");
	//video.controls = true;
	//console.log("Video Control On")
}

function playVid() { 
	console.log("Play Video");
video.play();
	console.log(video)
//video.loop = true;
	//console.log("Video Looping Active")
let vol = document.querySelector("#volumeSlider").value;
vol.volume = video.volume*100+"%";
		console.log("Volume starts at "+vol+"%");
document.getElementById("volume").innerHTML = vol;
} 

function pauseVid() { 
		console.log("Pause Video");
	video.pause();
} 



function decreaseSpeed() { 
//console.log("Speed is "+ video.playbackRate);
vid = document.getElementById("myVideo");
vid.playbackRate *= 0.8;
console.log("Speed is "+ (video.playbackRate*100) + "%");
} 

function increaseSpeed() {
//console.log("Speed is "+ video.playbackRate);
vid = document.getElementById("myVideo");
vid.playbackRate *= 1.25;
console.log("Speed is "+ (video.playbackRate*100) + "%");
} 

function skipAhead() {
	if (video.currentTime > 596.458){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	else {
	video.currentTime+= 60;
	}
		console.log("Current location is "+ video.currentTime);
} 

function mute() {
	var mute = document.getElementById("mute");
	if (video.muted){
		console.log("Change to Unmuted");
		video.muted = false;
		mute.innerHTML = "Mute";
	}
	else {
		console.log("Change to Muted");
		video.muted = true;
		mute.innerHTML = "UnMute";
	}
	
}

function changeVolume() {
let vol = document.querySelector("#volumeSlider").value;
	console.log(vol+"%");
video.volume = vol/100;
	console.log(video.volume);
vol.volume = video.volume;
document.getElementById("volume").innerHTML = vol;
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
		console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
		console.log("In color");
}
