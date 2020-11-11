<script>
	import Timer, {startTimer, stopTimer} from '../components/Timer.svelte';
</script>
<Timer/>
<button on:click={startTimer}>
	start
</button>
<button on:click={stopTimer}>
	stop
</button>
