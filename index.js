const body = document.querySelector('#bg-container');

const issueBackgroundColors = {
    issue5: '#00c1b5',
    issue4: '#ff651a',
    issue3: '#ffbe00',
    issue2: '#1d3fbb',
    issue1: '#e30512'
}

// document.onload = getCurrentIssue()

let currentIssue = 5
let oldValue = 0;
let newValue = 0;
let waitingForAnimation = false;

// TODO: hijack scrolling to scroll one page at a time.

// The document can still be scrolled even if the background color doesn't change.
// Creates issues at the first and last background color
const determineScrollDirection = () => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
        oldValue = newValue;
        return 'down'
    }
    else if (oldValue > newValue) {
        oldValue = newValue;
        return 'up'
    }
}

const displayIssue = (scrollDirection) => {
    if (scrollDirection === 'up') {
        if(currentIssue === Object.keys(issueBackgroundColors).length){
            return
        }
        body.style.backgroundColor = issueBackgroundColors[`issue${currentIssue + 1}`];
        currentIssue++;
        return;
    }
    else if (scrollDirection === 'down'){
        if (currentIssue === 1){
            return
        }
        body.style.backgroundColor = issueBackgroundColors[`issue${currentIssue - 1}`];
        currentIssue--;
    }
}

const changeIssue = () => {
    if(!waitingForAnimation){
        let scrollDirection = determineScrollDirection()
        console.log(scrollDirection)
        displayIssue(scrollDirection)
        waitingForAnimation = true;
        setTimeout(() => {
            waitingForAnimation = false
            console.log('Finished waiting!')
        }, 500)
    }
}

document.addEventListener('scroll', changeIssue)
