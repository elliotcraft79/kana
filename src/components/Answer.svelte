<script>
    import { createEventDispatcher } from 'svelte';
    import {dndzone} from "svelte-dnd-action";

    export let answer = 'は';
    export let question = 'ha';

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
    cursor: grab;
}
</style>
<div use:dndzone={{items:[{id:1}], type:question, dropFromOthersDisabled:true}}>
    <div class="japanese">{answer}</div>
</div>
