const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=test&formatversion=2`;

const outputElement = document.getElementById('apiReturn');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            outputElement.innerHTML = `ERROR`;
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        outputElement.innerHTML = `SUCCESS`;
    })
    .catch(error => {
        outputElement.innerHTML = `ERROR: ${error}`;
        console.error('Error:', error);
    });