<script>
    import { createEventDispatcher } from 'svelte';

    export let question = 'a';

    const dispatch = createEventDispatcher();

    function handleDrop(event) {
        event.preventDefault();
        let target = event.dataTransfer.getData("target");
        let questionElement = event.dataTransfer.getData("questionElement");

        if (question == target) {
            event.target.style.backgroundColor = "white";
            event.target.style.borderColor = "white";
            event.target.appendChild(document.getElementById(questionElement));
            dispatch('message', {correct: true});
        }
        else dispatch('message', {correct: false});
    }
</script>

<style>
    .box {
        float: right;
        width: 30px;
        height: 25px;
        margin: 5px;
        padding: 5px;
        border: 3px solid yellow;
        background-color: yellow;
    }
.question {
    float: left;
    font-size: 35px;
    font-family: 'Source Sans Pro';
    user-select: none;
    color: white;
}
.container {
    width: 110px;
    height: 50px;
    overflow: hidden;
}
</style>
{#if question != 'spacer'}
<div class="container">
    <div class="question">{question}</div>
    <div on:drop={handleDrop} on:dragover={event => event.preventDefault()} class="box"></div>
</div>
{:else}
    <div style="height:50px"></div>
{/if}
