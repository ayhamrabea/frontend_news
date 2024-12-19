async function sliderfetch() {
    let resbons = await fetch("http://127.0.0.1:4010/slider");
    let data = await resbons.json();
    console.log(data)
}

sliderfetch()