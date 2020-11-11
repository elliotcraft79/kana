<script>
    // todo: replace dom events with svelte-dnd-action (use types to restrict items)
    import { createEventDispatcher } from 'svelte';

    export let question = 'a';

    const dispatch = createEventDispatcher();

    function handleDrop(event) {
        event.preventDefault();
        let target = event.dataTransfer.getData("target");
        dispatch('message', {target: target});
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
    /*color: white;*/
}
.container {
    width: 110px;
    height: 50px;
    overflow: hidden;
}
</style>

<div class = "container">
    <div class="question">{question}</div>
    <div on:drop={handleDrop} on:dragover={(event) => {event.preventDefault()}} class="box"></div>
</div>
