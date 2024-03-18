let liElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${liElements.length}`);


liElements.forEach(element => {
    const title = element.querySelector('h2').textContent;
    const elemCategory = element.querySelectorAll('li').length;
   

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elemCategory}`);
});


