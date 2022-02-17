const body = document.querySelector('#bg-container');

// NOTE: Could use an array of objects to describe the collection of issues.
const issue5Link = document.querySelector('#issue5-link');
const issue4Link = document.querySelector('#issue4-link');
const issue3Link = document.querySelector('#issue3-link');
const issue2Link = document.querySelector('#issue2-link');
const issue1Link = document.querySelector('#issue1-link');

const issueBackgroundColors = {
    issue5: '#00c1b5',
    issue4: '#ff651a',
    issue3: '#ffbe00',
    issue2: '#1d3fbb',
    issue1: '#e30512'
}

let currentBoldIssue = ''
let windowLocation = 0

// Uses the position of the window to determine what the next background color should be.
// The background color will change when the next/previous issue is more than half way onto the screen (window.innerHeight / 2).
// RETURNS: The background color hex as a string and a reference to the issue that should be bold.
// TODO:  Refactor to use the size of issueBackgroundColors.keys instead of hardcoding.
const getCurrentBackgroundData = () => {
    let windowHeight = window.innerHeight;

    if (windowLocation >= 0 && windowLocation <= ((windowHeight * 1) - (windowHeight / 2))) {
        return [issueBackgroundColors.issue5, issue5Link]
    } else if (windowLocation > ((windowHeight * 1) - (windowHeight / 2)) && windowLocation <= ((windowHeight * 2) - (windowHeight / 2))) {
        return [issueBackgroundColors.issue4, issue4Link]
    } else if (windowLocation > ((windowHeight * 2) - (windowHeight / 2)) && windowLocation <= ((windowHeight * 3) - (windowHeight / 2))) {
        return [issueBackgroundColors.issue3, issue3Link]
    } else if (windowLocation > ((windowHeight * 3) - (windowHeight / 2)) && windowLocation <= ((windowHeight * 4) - (windowHeight / 2))) {
        return [issueBackgroundColors.issue2, issue2Link]
    } else if (windowLocation > ((windowHeight * 4) - (windowHeight / 2)) && windowLocation <= ((windowHeight * 5) - (windowHeight / 2))) {
        return [issueBackgroundColors.issue1, issue1Link]
    }
}

// Responsible for changing the body's background color and the bolded text in the list of issues.
const setBackground = backgroundInfo => {
    body.style.backgroundColor = backgroundInfo[0]
    if (backgroundInfo[1] !== currentBoldIssue) {
        if (currentBoldIssue) currentBoldIssue.style.fontWeight = 'normal'
        backgroundInfo[1].style.fontWeight = 'bold'
        currentBoldIssue = backgroundInfo[1];
    }
}

// Main function that is called every scroll event.
const handleScroll = () => {
    windowLocation = window.pageYOffset;
    setBackground(getCurrentBackgroundData())

}

document.addEventListener('scroll', handleScroll)
document.onload = handleScroll()
