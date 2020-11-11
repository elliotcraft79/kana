<script context="module">
	let interval;
	let time = 0;
	export let started;
	export function startTimer() {
		if (!started) {
			started = true;
		interval = setInterval(() => {
			console.log(seconds)
			seconds++;
			if (seconds >= 60) {
				seconds = 0;
				minutes++;
				if (minutes >= 60) {
					minutes = 0;
					hours++;
				}
			}
		}, 1000)
		}
	}
	export function stopTimer() {
		if (started) {
			started = false;
			clearInterval(interval)
		}
	}
</script>

<script>
	// from https://dev.to/vintharas/learn-svelte-creating-a-pomodoro-timer-1fcn
	const padWithZeroes = (number) => number.toString().padStart(2, '0');
	
	function formatTime(time) {
		let minutes = Math.floor(time / 60);
		let seconds = time % 60;
		return `${padWithZeroes(minutes)}:${padWithZeroes(seconds)}`;
	}
</script>

<h2>{formatTime(time)}</h2>
