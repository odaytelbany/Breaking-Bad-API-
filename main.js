let api = "https://www.breakingbadapi.com/api/";

async function getData() {
    let response = await fetch(`${api}characters`);
    let data = await response.json();
    createOptions(data);
}

function createOptions(data) {
    let header = document.querySelector(".header");
    header.innerHTML += `
        <select onchange = "getCh(this.value)">
            <option>Choose character</option>
            ${data.map((e) => {
        return `<option>${e.name}</option>`
    })
        }
        </select>
    `
}
async function getCh(ch) {
    if (ch != "Choose character") {
        let response = await fetch(`${api}characters?name=${ch}`);
        let data = await response.json();
        //----------
        console.log(data)
        let content = document.querySelector(".content");
        content.innerHTML = `
            <h2 class="name">${data[0].name} (${data[0].nickname})</h2>
            <img class ="portri" src="${data[0].img}" alt="">
        `
        // content.style.background = "#0a5831";
    }
}

getData();