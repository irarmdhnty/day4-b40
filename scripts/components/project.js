let dataAll = []

function addData(event) {
    event.preventDefault();

    let name = document.getElementById('input-name').value;
    let start = document.getElementById('start-date').value;
    let end = document.getElementById('end-date').value;
    let desc = document.getElementById('desc').value;
    let img = document.getElementById('img').files;
    let techIds = [];
    let techs = document.querySelectorAll('.tech-input:checked').forEach(item => (
        techIds.push(item.value)
        ));

    techs = techIds.map(item => (
        TechnologyData[item]
    ));

    img = URL.createObjectURL(img[0])

    let data = {
        name,
        start,
        end,
        desc,
        img,
        techs,
    }

    dataAll.push(data);
    renderCard()
}

function renderCard() {
    document.getElementById("card").innerHTML = ''

    for (let i = 0; i < dataAll.length; i++) {
        document.getElementById("card").innerHTML += `
            <div class="card">
                <div>
                    <img style="
                        width: 100%;
                        border-radius: 10px;
                        " src="${dataAll[i].img}" alt="code">
                    <div class="card-text">
                        <h3>${dataAll[i].name}</h3>
                        <p>Durasi: 3 bln</p>
                    </div>
                </div>
                <div class="card-desc">
                    <p>${dataAll[i].desc}</p>
                    <div>
                        ${dataAll[i].techs.map(src => (
                            Technology({ src })
                        )).join('')}
                    </div>
                </div>
                <div style="display: flex; justify-content:center">
                    <button class="button-edit">Edit</button>
                    <button class="button-delete">Delete</button>
                </div>
            </div>
        `
    }
}

