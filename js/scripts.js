window.onload = () => {
    document.querySelector('[type="button"]').addEventListener('click', () => {
    const ipt = document.querySelectorAll('[type="text"]');
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(ipt[i].value);
    }

    for (const elem of arr) {
        let li = document.createElement('li');
        li.append(document.createTextNode(elem));
        document.querySelector('ul').appendChild(li);
    }
})
}
