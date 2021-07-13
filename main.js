const addLinkToNav = function(content){
    const parent = document.querySelector(".nav")
    const a = `<a class="p-2 text-muted" href="#">${content}</a>`
    parent.innerHTML += a
}


const changeColorOfTitle = function(){
    const title = document.querySelector(".jumbotron h1")
    title.style.color = "pink"
}


const changeJumbotronBg = function(){
    const jumbotron = document.querySelector(".jumbotron")
    jumbotron.classList.remove("bg-dark")
    jumbotron.classList.remove("text-white")
}


const removeOlElsewhere = function(){
    const ol = document.querySelector(".blog-sidebar > div:last-of-type ol ")
    ol.innerHTML = ""
}
    

const changeHeadingSize = function(){
    let target = document.querySelector('div.jumbotron.p-4.p-md-5.text-white.rounded.bg-dark > div')
    target.classList.remove('col-md-6')
    target.classList.add('col-md-12')
}


const removeSearch = function(){
    document.querySelector("a.text-muted > svg").remove()
}


const trimParagraphs = function(){
    let target = document.querySelectorAll('div.blog-post > p:not(p.blog-post-meta)')
    for (let i = 0; i < target.length; i++){
        let targetText = target[i].innerText
        let targetTextSlice = targetText.slice(0,50)
        target[i].innerText = targetTextSlice
    }
}


const addNewBlogPost = function(){
    let target = document.querySelector('main > div > div')
    let blogPostTitle = document.createElement('h2')
    let blogPostBody = document.createElement('div')
    target.insertBefore(blogPostBody, target[1])
    target.insertBefore(blogPostTitle, target[1])
}


const removeLastBlogPost = function(){
    const btn = document.querySelectorAll(".blog-pagination a")[0]
    btn.removeAttribute("href")
    btn.addEventListener("click", function () {
        const blogs = document.querySelectorAll(".blog-post")
        blogs[blogs.length - 1].remove()
    })
}


const alertAuthors = function(){
    const authors = document.querySelectorAll(" main .blog-main .blog-post > h2 + p > a")
    authors.forEach((a) => {
        a.addEventListener("mouseenter", function (e) {
        alert(e.target.innerText)
        })
    })
}
