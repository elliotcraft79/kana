<script>
    // import the components
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

    // starts the timer when a answer is dragged
    function handleAnswerMessage(event) {
        started = true;
    }

    // runs whenever a answer is dragged into a question
    // checks if it is right or wrong and stops the game when all of them are correct
    function handleQuestionMessage(event) {
        if (event.detail.correct) correct++; else wrong++;
        if (correct == 46) {
            started = false;
        }
    }

    // shuffles all of the answers
    function shuffle() {
        // get all of the answer elements
        let answerElements = document.getElementsByClassName("japanese");
        // get the answer container
        let answerContainer = document.getElementById('answers');
        // move all the answers into the answer container
        for (let answer of answerElements) {
            answerContainer.appendChild(answer);
        }
        // shuffle them around
        for (let i = answerElements.length; i >= 0; i--) {
            var elem = answerElements[Math.random() * i | 0];
            answerContainer.appendChild(elem);
        }
    }

    onMount(async () => shuffle());

    // resets the game
    function resetGame() {
        started = false;
        reset = true;
        correct = 0;
        wrong = 0;
        setTimeout(() => {reset = false}, 1000);
        shuffle();
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

<!-- create all of the answers -->
<div id="answers">
    {#each questions.flat() as {question, answer}}
        <Answer {question} {answer} on:message={handleAnswerMessage}/>
    {/each}
</div>

<!-- create all of the questions -->
<div id="questions">
    {#each questions.reverse() as row}
        <div class="row">
            {#each row as question}
                <Question on:message={handleQuestionMessage} question={question.question}/>
            {/each}
        </div>
    {/each}
</div>

<Timer {started} {reset} {correct} {wrong} on:click={resetGame}/>

<!-- display congratulatory message if game complete -->
{#if correct == 46}
    <div id="finished">よくできました!</div>
{/if}
