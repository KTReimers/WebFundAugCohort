function captureEntry(event){
    event.preventDefault();
    var element = document.querySelector('textarea')
    console.log(element.value);
    var entries = document.querySelector('#entries')
    console.log(entries);
    entries.innerHTML += `<p>${element.value}</p>`
    element.value = ""
}