// const tg = document.querySelector("#tg")
// const url = "./xml/linearlayout.html"
// fetch(url)
//     .then(e => e.text())
//     .then(e => {
//         // tg.innerText = e
//         tg.innerHTML = e.replace(/</g, "&lt")
//         // Prism.highlight();
//         Prism.highlightAll()
//     })


// function renderCodes() {
//     const page = Array.from(document.querySelectorAll("[src]"))

//     page.map(el => {
//         console.log()
//         // const tg = document.querySelector("#tg")
//         const url = el.getAttribute('src')
//         fetch(url)
//             .then(e => e.text())
//             .then(e => {
//                 // tg.innerText = e
//                 el.innerHTML = e.replace(/</g, "&lt")
//                 // Prism.highlight();
//                 Prism.highlightAll()
//             })
//     })

// }

// function renderCodes() {
//     const page = Array.from(document.querySelectorAll("code"))

//     page.map(el => {
//         console.log()
//         // const tg = document.querySelector("#tg")
//         const url = el.getAttribute('src')
//         fetch(url)
//             .then(e => e.text())
//             .then(e => {
//                 // tg.innerText = e
//                 el.innerHTML = e.replace(/</g, "&lt")
//                 // Prism.highlight();
//                 Prism.highlightAll()
//             })
//     })

// }


function renderPages() {
    const mainpage = Array.from(document.querySelectorAll("[mainpage]"))
    mainpage.map(el => {
        // const tg = document.querySelector("#tg")
        const url = el.getAttribute('mainpage')
        fetch(url)
            .then(e => e.text())
            .then(e => {
                const d = document.createElement('div')
                d.innerHTML = e
                // const content = d.querySelector('.container').innerHTML
                const content = d.innerHTML
                // console.log(d)
                // console.log(content)
                // tg.innerText = e
                // el.innerHTML = e.replace(/</g, "&lt")
                // el.innerHTML = content.replace(/</g, "&lt")
                el.innerHTML = content
                // Prism.highlight();
                // Prism.highlightAll()
                renderCodes()
            })
    })

}


function renderComponents() {
    const mainpage = Array.from(document.querySelectorAll(".components"))

    mainpage.map(el => {
        // const tg = document.querySelector("#tg")
        const url = el.getAttribute('src')

        fetch(url)
            .then(e => e.text())
            .then(e => {
                const d = document.createElement('div')
                d.innerHTML = e
                // const content = d.querySelector('.container').innerHTML
                const content = d.innerHTML
                // console.log(d)
                // console.log(content)
                // tg.innerText = e
                // el.innerHTML = e.replace(/</g, "&lt")
                // el.innerHTML = content.replace(/</g, "&lt")
                el.innerHTML = content
                // Prism.highlight();
                // Prism.highlightAll()
                // renderCodes()
            })
    })
}



let totalItems = 0
function renderPost() {
    const mainpage = Array.from(document.querySelectorAll(".post"))



    mainpage.map(el => {
        // const tg = document.querySelector("#tg")
        const url = el.getAttribute('src')
        if (url == undefined) return
        fetch(url)
            .then(e => e.text())
            .then(e => {
                const d = document.createElement('div')
                d.innerHTML = e
                d.classList.add('bg1')
                const content = d.outerHTML
                el.appendChild(d)
                // renderCodes()
                // renderPostCode()
                // renderPostCode()

                ++totalItems
                if (mainpage.length == totalItems) {
                    renderPostCode()
                    buttonsEventSwitchOptionWindow()
                }

            })
    })
}

function renderPostCode() {
    const mainpage = Array.from(document.querySelectorAll(".code"))

    mainpage.map(el => {
        // const tg = document.querySelector("#tg")
        const url = el.getAttribute('src')
        const lang = el.getAttribute('lang')
        if (url == undefined) return
        fetch(url)
            .then(e => e.text())
            .then(e => {

                const d = document.createElement('div')
                // d.innerHTML = e
                d.classList.add('bg1')
                d.classList.add('post')
                // const content = d.outerHTML 
                // el.appendChild(d) 
                // renderCodes()


                const pre = document.createElement('pre')
                const code = document.createElement('code')

                code.className = "language-" + lang
                // el.innerHTML = e.replace(/</g, "&lt")
                code.innerHTML = e.replace(/</g, "&lt")
                // code.innerHTML = e

                pre.appendChild(code)
                d.appendChild(pre)

                // console.log('pre')
                // console.log(pre)

                el.appendChild(d)

                Prism.highlightAll()

            })
    })
}

renderComponents()
renderPost()
// renderPostCode()



function buttonsEventSwitchOptionWindow() {
 
    const btnOptions = Array.from(document.querySelectorAll(".btnOption"))

    function resetStyleButtons(btn) { 
        const buttons = Array.from(btn.parentElement.querySelectorAll(".btn"))

        buttons.map(e => {
            e.classList.remove('btn-selected')
        }) 
    }

    btnOptions.map((btn, i) => {

        resetStyleButtons(btn)

        btn.parentElement.querySelector('button').classList.add('btn-selected')
 
        btn.addEventListener('click', (e) => {

            resetStyleButtons(btn)

            btn.classList.add('btn-selected')
            // btn.click()

            const optionItems = Array.from(btn.parentElement.querySelectorAll(".optionItem"))
            optionItems.map(e => e.style.display = "none")

            const optionItem = btn.parentElement.querySelector(".optionItem." + btn.value)
            optionItem.style.display = 'block'

        })

        // if (i == 0)
        //     btn.click()

    })

    // btnOptions[0].click()
}
