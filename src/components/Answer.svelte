<script>
    import { createEventDispatcher } from 'svelte';

    export let answer = 'は';
    export let target = 'ha_target';

    const dispatch = createEventDispatcher();

    function onDragStart(event) {
        event.preventDefault();
        event.dataTransfer.setData('target', target)
        console.log('drag')
        dispatch('message', {event:event})
    }
</script>

<style>

.japanese {
    position: relative;
    bottom: 20px;
    font-family: 'Kosugi Maru';
    font-size: 27px;
    line-height: 10px;
    user-select: none;
    text-align: center;
}
</style>

<div draggable="true" on:dragstart={onDragStart} class="japanese">{answer}</div>
