document.querySelector('button').addEventListener('click', refreshPage)


const jokeElement = document.getElementById('jokeElement');
function refreshPage() {
    // window.location.reload();
    // fetch('https://icanhazdadjoke.com/slack')
    // .then(data => data.json())
    // .then(jokeData =>{
    //     const jokeText = jokeData.attachments[0].text;
    //     const jokeElement = document.getElementById('jokeElement');

    //     jokeElement.innerHTML = '"' + jokeText + '"';
    // })

    fetch("https://meme-api.herokuapp.com/gimme", {
        "method": "GET",
    })
    .then(response => response.json().then(body => {
        let img_url = body.preview.pop()
        jokeElement.innerHTML = `<img id="jokeElement" height="100%" width="100%" src="${img_url}" />`
    }))
    .catch(err => console.error(err));
}
