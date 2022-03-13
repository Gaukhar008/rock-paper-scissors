function computerPlay() {
    let list = ['Rock','Paper','Scissors'];
    let randomSelection = list[Math.floor(Math.random() * list.length)];
    alert(randomSelection);
    
}