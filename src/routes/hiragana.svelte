<script>
	import Timer from '../components/Timer.svelte';
	import Question from '../components/Question.svelte';
    import Answer from '../components/Answer.svelte';
    import {onMount} from 'svelte';
    let started = false;
    let reset = false;
    let correct = 0;
    let wrong = 0;
    let questions = [
        [{question: 'a', answer:'あ'},
        {question: 'i', answer:'い'},
        {question: 'u', answer:'う'},
        {question: 'e', answer:'え'},
        {question: 'o', answer:'お'}],
        [{question: 'ka', answer:'か'},
        {question: 'ki', answer:'き'},
        {question: 'ku', answer:'く'},
        {question: 'ke', answer:'け'},
        {question: 'ko', answer:'こ'}],
        [{question: 'sa', answer:'さ'},
        {question: 'shi', answer:'し'},
        {question: 'su', answer:'す'},
        {question: 'se', answer:'せ'},
        {question: 'so', answer:'そ'}],
        [{question: 'ta', answer:'た'},
        {question: 'chi', answer:'ち'},
        {question: 'tsu', answer:'つ'},
        {question: 'te', answer:'て'},
        {question: 'to', answer:'と'}],
        [{question: 'na', answer:'な'},
        {question: 'ni', answer:'に'},
        {question: 'nu', answer:'ぬ'},
        {question: 'ne', answer:'ね'},
        {question: 'no', answer:'の'}],
        [{question: 'ha', answer:'は'},
        {question: 'hi', answer:'ひ'},
        {question: 'fu', answer:'ふ'},
        {question: 'he', answer:'へ'},
        {question: 'ho', answer:'ほ'}],
        [{question: 'ma', answer:'ま'},
        {question: 'mi', answer:'み'},
        {question: 'mu', answer:'む'},
        {question: 'me', answer:'め'},
        {question: 'mo', answer:'も'}],
        [{question: 'ya', answer:'や'},
        {question:'spacer', answer:'spacer'},
        {question: 'yu', answer:'ゆ'},
        {question:'spacer', answer:'spacer'},
        {question: 'yo', answer:'よ'}],
        [{question: 'ra', answer:'ら'},
        {question: 'ri', answer:'り'},
        {question: 'ru', answer:'る'},
        {question: 're', answer:'れ'},
        {question: 'ro', answer:'ろ'}],
        [{question: 'wa', answer:'わ'},
        {question:'spacer', answer:'spacer'},
        {question: 'wo', answer:'を'},
        {question:'spacer', answer:'spacer'},
        {question: 'n', answer:'ん'},]
    ];

    function handleAnswerMessage(event) {
        started = true;
    }

    function handleQuestionMessage(event) {
        if (event.detail.correct) correct++;
        if (correct == 46) {
            started = false;
        }
    }

    function shuffle() {
        let answerElements = document.getElementsByClassName("japanese");
        let answersElement = document.getElementById("answers");
        for (let i = answerElements.length; i >= 0; i--) {
            let element = answerElements[Math.random() * i | 0];
            answersElement.appendChild(element);
        }
    }

    onMount(async () => shuffle());

    function resetGame() {
        started = false;
        reset = true;
        setTimeout(() => {reset = false}, 1000);
        shuffle()
    }
</script>
<style>
#answers {
    display: inline-grid;
    grid-template-columns: 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px;
    grid-template-rows: 30px 30px 30px 30px;
    row-gap: 5px;
    column-gap: 5px;
    align-content: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    margin: auto;
    padding-top: 30px;
}

.row {
    height: 10%;
    overflow: hidden;
    float: left;
    margin-left: 15px;
    background-color: darkblue;
}

#finished {
    font-family: 'Kosugi Maru';
    font-size: 50px;
    background-image: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red, violet);
    text-align: center;
    background-size: 800% 800%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow 8s ease infinite;
}

@keyframes rainbow {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 25%
    }

    100% {
        background-position: 0% 50%
    }
}
</style>
<div id="answers">
    {#each questions.flat() as {question, answer}}
        <Answer {question} {answer} on:message={handleAnswerMessage}/>
    {/each}
</div>
<div id="questions">
    {#each questions.reverse() as row}
        <div class="row">
            {#each row as question}
                <Question on:message={handleQuestionMessage} question={question.question}/>
            {/each}
        </div>
    {/each}
</div>
<Timer {started} {reset}/>
{#if correct == 46}
    <div id="finished">よくできました!</div>
{/if}
