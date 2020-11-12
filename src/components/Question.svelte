<script>
    import { createEventDispatcher } from 'svelte';
    import {dndzone} from "svelte-dnd-action";

    export let question = 'a';

    const dispatch = createEventDispatcher();

    function handleDrop(event) {
        event.preventDefault();
        let target = event.dataTransfer.getData("target");
        dispatch('message', {target: target});

        if (question == target) {
            event.target.style.backgroundColor = "white";
            event.target.style.borderColor = "white";
            event.target.appendChild(document.getElementById(data));
        }
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
    <div use:dndzone={{items: [], dragDisabled: true, type: question}} class="box"></div>
</div>
