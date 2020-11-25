<script>
    import {onDestroy} from 'svelte';

    export let started = false;
    export let reset = false;

    let time = 0;

    const interval = setInterval(() => {
        if (started) time++;
        if (reset) {
            console.log('reset')
            time = 0;
        }
    }, 1000)

    onDestroy(() => clearInterval(interval))

	// from https://dev.to/vintharas/learn-svelte-creating-a-pomodoro-timer-1fcn
	const padWithZeroes = (number) => number.toString().padStart(2, '0');

    let minutes = 0
    let seconds = 0;
	
	$: {
		minutes = Math.floor(time / 60);
        seconds = time % 60;
	}
</script>
<style>

.timer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    position: relative;
    top: 50px;
    left: 0%;
    font-family: 'Roboto';
    font-size: 35px;
    user-select: none;
}
</style>

<h2 class="timer">{padWithZeroes(minutes)}:{padWithZeroes(seconds)}</h2>
