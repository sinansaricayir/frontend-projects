const panels = document.querySelectorAll('.panel'); //select all div which class name is active

panels.forEach((panel) => {
    panel.addEventListener('click', () => { 
        removeActiveClass() //removes active class from others
        panel.classList.add('active') //if it is clicked , add active class
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
