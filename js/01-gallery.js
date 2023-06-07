
import { galleryItems } from './gallery-items.js';

// Change code below this line
let ul = document.getElementsByClassName('gallery')[0]

let i = 0;

let boxes = []

galleryItems.forEach(element => {
    let li = document.createElement("li")
    let image = document.createElement('img')
    image.src = element.preview
    const instance = basicLightbox.create(`
        <div class="modal">
            <img src='${element.original}'>
        </div>
    `)

    image.onclick = () => {
        instance.show()
    }
    li.appendChild(image)
    li.id = i

    boxes.push(instance)
    
    i++ 
    ul.appendChild(li)
});
