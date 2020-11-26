<script>
    import { createEventDispatcher } from 'svelte';
    // from https://attacomsian.com/blog/javascript-generate-random-string
    // generates a random string
    const randomString = (length = 8) => {
        return Math.random().toString(16).substr(2, length);
    };

    export let answer = 'は';
    export let question = 'ha';
    let id = randomString();

    const dispatch = createEventDispatcher();

    function onDragStart(event) {
        event.dataTransfer.setData('target', question);
        event.dataTransfer.setData('questionElement', id);
        dispatch('message', {event:event});
    }
</script>

<style>

.japanese {
    position: relative;
    /*bottom: 20px;*/
    font-family: 'Kosugi Maru';
    font-size: 27px;
    line-height: 20px;
    user-select: none;
    text-align: center;
    cursor: grab;
}
</style>
{#if question != 'spacer'}
<div id={id} draggable=true on:dragstart={onDragStart} class="japanese">{answer}</div>
{/if}
