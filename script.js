//IronHack Miami
//Author: Jorge Sirias
//2/12/2021

// 1: Get the node with the  main title
const h1Tag = document.querySelector("h1");
console.log(h1Tag);
///=><h1>Fruits and veggies</h1>
// ----------------------------------------------
// 2: Get the main title text
const mainText = h1Tag.innerText;
console.log(mainText);
// => Fruits and veggies
// ----------------------------------------------
// 3: Get all the nodes with the fruit items
const fruitItems = document.getElementsByClassName('fruit-item');
console.log(fruitItems);
// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------
// 4: Get all the veggie items - the text
const veggieItems = document.getElementsByClassName('veggie-item');
for(let i=0; i<veggieItems.length; i++){
    console.log(veggieItems[i].innerText);
}
// Broccoli Celery Potato Spinach
// ----------------------------------------------
// 5: Get the subtitle in the veggies section
 const veggieSub = document.querySelector('.list-veggies h2');
 console.log(veggieSub.innerText);
// => Veggies
// ----------------------------------------------
// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)
const fruitTitle = document.querySelector('h2');
fruitTitle.setAttribute('id','fruit-title');
//console.log(fruitTitle);
// => fruit-title
// ----------------------------------------------
// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit
fruitList = document.querySelectorAll('.fruit-item');
//console.log(fruitList);

[...fruitItems].forEach((fruit,index)=>{
    if(index == 0 || index == 2){
        fruit.setAttribute("class","best-fruit");
    }
});

//console.log(fruitItems);
// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------
// 8: Remove class 'veggies' from the unordered list of veggies
const ulVeggie = document.querySelector('.veggies');
ulVeggie.removeAttribute('class');
console.log(ulVeggie);
// => <ul>...</ul>
// ----------------------------------------------
// 9: Add a class 'veggie-love' to all the veggies
const veggieLove = document.querySelectorAll('.veggie-item');
[...veggieLove].forEach( (eachVeggie)=>{

    eachVeggie.classList.add('veggie-love')
    //console.log(eachVeggie);

} );
// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------
// 10: Remove class 'veggie-item' from 'spinach'
const veggieItem = document.querySelectorAll('.veggie-item');
[...veggieItem].forEach( (eachVeggie)=>{
    if(eachVeggie.innerHTML == 'Spinach'){
        eachVeggie.classList.remove('veggie-item');
    }
});
console.log(veggieItem);
// => ... <li class="veggie-love">Spinach</li>

//Bonus
//Add Paragraph in body tag
let parent = document.getElementsByTagName('body')[0];
let pTag = document.createElement('p');
//console.log(pTag);
let strData = document.createTextNode("This is a list of fruits & veggies");
pTag.appendChild(strData);
fruitDiv = document.querySelector('.container');
parent.insertBefore(pTag,fruitDiv);
//console.log(parent);