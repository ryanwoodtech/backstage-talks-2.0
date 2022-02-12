const body = document.querySelector('#bg-container');

console.log(body);
document.addEventListener('scroll', () => {
    body.style.backgroundColor = 'red';
} )