<script>
    import {onDestroy, tick} from 'svelte';

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

<h2>{padWithZeroes(minutes)}:{padWithZeroes(seconds)}</h2>
