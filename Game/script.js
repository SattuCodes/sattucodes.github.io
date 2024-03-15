const storyDiv = document.getElementById('story');
const choicesDiv = document.getElementById('choices');
const choiceList = document.getElementById('choice-list');

function beginStory() {
  // Clear existing content
  storyDiv.innerHTML = '';
  
  // Show choices
  choicesDiv.style.display = 'block';
  
  // Display initial choices
  displayChoices(['Save water by fixing leaks', 'Educate the community about water conservation']);
}

function displayChoices(choices) {
  // Clear existing choices
  choiceList.innerHTML = '';

  // Display new choices
  choices.forEach(choice => {
    const listItem = document.createElement('li');
    listItem.className = 'choice-item';
    listItem.textContent = choice;
    listItem.addEventListener('click', () => makeChoice(choice));
    choiceList.appendChild(listItem);
  });
}

function makeChoice(choice){
    // Clear existing content
    choicesDiv.style.display = 'none';
    // Display outcome based on choice
    switch(choice) {
        case 'Save water by fixing leaks':
            displayOutcome('You successfully fixed the leaks and saved a significant amount of water!');
            break;
        case 'Educate the community about water conservation':
            displayOutcome('You organized a community event to raise awareness about water conservation. Well done!');
            break;
        default:
            displayOutcome('Something went wrong...');
        }
}

function displayOutcome(outcome) {
  const outcomePara = document.createElement('p');
  outcomePara.textContent = outcome;
  storyDiv.appendChild(outcomePara);

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart';
  restartButton.addEventListener('click', () => window.location.reload());
  storyDiv.appendChild(restartButton);
}
