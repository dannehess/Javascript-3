let heading = document.querySelector('.heading');
heading.innerHTML = heading.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.heading .letter',
    scale: [1,1],
    opacity: [0,1],
    translateZ: 100,
    easing: "easeInExpo",
	duration: 1500,
	translateX: -150
  }).add({
    targets: '.heading',
    duration: 1000,
	easing: "linear",
	scale: [1, 1 , 2, 1, 1, 100],
	scale: [1, 100],
	opacity: 0,
	translateX: 0,
	delay: 1500,
	duration: 2000,
	rotate: 300,
  });