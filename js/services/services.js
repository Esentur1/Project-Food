const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
            },
        body: data
    });

    return await res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

function getDataForCards (url, classForCard) {
    axios.get(url)
    .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new classForCard(img, altimg, title, descr, price, ".menu .container", 'menu__item', 'big').render();
            });
        });
}

export {postData};
export {getResource};
export {getDataForCards};