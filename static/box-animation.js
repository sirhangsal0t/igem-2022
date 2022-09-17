const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll("animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll("animated")[1].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector("col-lg-8"))