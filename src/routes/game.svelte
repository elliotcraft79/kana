<script>
	import Timer from '../components/Timer.svelte';
	import Question from '../components/Question.svelte';
    import Answer from '../components/Answer.svelte';
    import {tick} from 'svelte';
    let started = false;
    let reset = false;
</script>
<Question on:message={(event) => console.log(event.detail.target)} question='ha'/>
<Answer/>
<Timer {started} {reset}/>
<button on:click={() => {started = 1}}>
	start
</button>
<button on:click={() => {started = 0}}>
	stop
</button>
<button on:click={() => {reset = true; setTimeout(() => {reset = false}, 1000)}}>
	reset
</button>
