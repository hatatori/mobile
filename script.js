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
                    // buttonsEventSwitchOptionWindow()
                    ButtonsGreen()
                }

            })
    })
}

let totalItems2 = 0
function renderPostSimple() {
    const mainpage = Array.from(document.querySelectorAll(".postSimple"))

    mainpage.map(el => {
        // const tg = document.querySelector("#tg")
        const url = el.getAttribute('src')
        if (url == undefined) return

        if(el.children.length > 0) return

        fetch(url)
            .then(e => e.text())
            .then(e => {
                const d = document.createElement('div')
                d.innerHTML = e
                // d.classList.add('bg1')
                const content = d.outerHTML
                el.appendChild(d)
                // renderCodes()
                // renderPostCode()
                // renderPostCode()

                ++totalItems2
                if (mainpage.length == totalItems2) {
                    renderPostCode()
                    // buttonsEventSwitchOptionWindow()
                    
                    
                    RenderQuotes()
                    ButtonsGreen()
                    
                    // aqui 1
                    // renderPostSimple()
                    renderPostSimple()
                    renderCodeTag()
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
renderPostSimple()


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

// render codes <code class=...
function renderCodeTag() {
    const mainpage = Array.from(document.querySelectorAll("code"))

    mainpage.map(el => {

        if (el.parentElement.tagName == "PRE") return

        el.tagName = "outro"

        const className = el.className

        const pre = document.createElement("pre")
        const code = document.createElement("code")

        code.innerHTML = el.innerHTML.trim()
        pre.classList.add('language-' + className)
        // pre.classList.add('bg1')

        // if(el.classList.contains('nobg')){
        // pre.classList.parentElement.remove('bg1')
        // el.parentElement.classList.remove('post')
        // }

        // console.log('el')
        // console.log(el.parentElement.classList.remove('bg1'))

        pre.appendChild(code)



        el.replaceWith(pre)

        Prism.highlightAll()



        // const tg = document.querySelector("#tg")
        // const url = el.getAttribute('src')
        // const lang = el.getAttribute('lang')
        // if (url == undefined) return
        // fetch(url)
        //     .then(e => e.text())
        //     .then(e => {

        //         const d = document.createElement('div')
        //         // d.innerHTML = e
        //         d.classList.add('bg1')
        //         d.classList.add('post')
        //         // const content = d.outerHTML 
        //         // el.appendChild(d) 
        //         // renderCodes()


        //         const pre = document.createElement('pre')
        //         const code = document.createElement('code')

        //         code.className = "language-" + lang
        //         // el.innerHTML = e.replace(/</g, "&lt")
        //         code.innerHTML = e.replace(/</g, "&lt")
        //         // code.innerHTML = e

        //         pre.appendChild(code)
        //         d.appendChild(pre)

        //         // console.log('pre')
        //         // console.log(pre)

        //         el.appendChild(d)



        // })
    })
}

// setTimeout(() => {
// renderCodeTag()
// RenderQuotes()
// }, 500)

// document.addEventListener('onload', ()=>{
// renderCodeTag()
// RenderQuotes()
// })

// SUBSTITUIR ASPAS ( ` )
function RenderQuotes() {
    ps = Array.from(document.querySelectorAll('p'))

    ps.map(p => {
        texto = p.innerHTML
        const resultado = texto.replace(/`([^`]*)`/g, "<span class='highlight'>$1</span>");
        // console.log(resultado) 
        p.innerHTML = resultado
    })
}

function ButtonsGreen() {
    /*
        <section>
            <button class="choice-btn btn-selected">JAVA</button>
            <button class="choice-btn">KOTLIN</button>
            <section class="choice choice-0">
                <div>choice a</div>
                <div>choice b</div>
            </section>
        </section>
    */
    choiceBtn = Array.from(document.querySelectorAll(".choice-btn"))

    choiceBtn.map((btn, index) => {

        btn.onclick = e => {

            const choiceDiv = e.target.parentElement.querySelector('.choice')
            const tagParent = btn.parentElement
            const position = Array.from(btn.parentElement.children).indexOf(e.target)

            btn.parentElement.querySelector('.btn-selected').classList?.remove('btn-selected')
            btn.classList.add('btn-selected')
 
            if (choiceDiv.classList.value.includes("choice-")) {
                choiceDiv.classList.value = choiceDiv.classList.value.replace(/choice-.+/g, "choice-" + position)
            } else {
                choiceDiv.classList.add("choice-" + index)
            }
        }
    })
}


renderCodeTag()
ButtonsGreen()
renderCodeTag()