let json = {"Price" : 20};

fetch("CharactersList.json")
.then(res => res.json())
.then(data =>{
    data.push(json);
    console.log(data);
})