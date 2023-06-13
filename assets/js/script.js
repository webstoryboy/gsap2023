$( ".resizable" ).resizable({
    aspectRatio: 16 / 9
});
$( ".draggable" ).draggable();

hljs.highlightAll();



$(".soFar > div").click(function(){
    $(this).parent().parent().next().fadeToggle()
})

$(".scMenu > div").click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    $(".scMenu > div").removeClass("active");
    target.addClass("active");

    $(".scCont > div").css("display", "none");
    target.parent().next().children().eq(index).css("display", "block");
});


window.addEventListener("scroll", function(){
    let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

    if(scrollTop > document.querySelector("#youtube .desc .left").offsetTop - 62){
        document.querySelector("#youtube .video").classList.add("absolute");
    } else {
        document.querySelector("#youtube .video").classList.remove("absolute");
    }

    if(scrollTop == 0){
        document.querySelector("#youtube .video").removeAttribute("style");
    }
});

const nav = document.querySelector("#aside");
const navBtn = document.querySelector(".aside-btn");

navBtn.addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    navBtn.classList.toggle("open");
});

const lesson = document.querySelector("#lesson");
const lessonBtn = document.querySelector(".lesson-btn");

// lessonBtn.addEventListener("click", function() {
//     lesson.classList.toggle("open");
// });

//tab 
const codeLink = document.querySelectorAll(".code_link .sub li");
const codeView = document.querySelectorAll(".code_view > div");

codeLink.forEach((elem, index) => {
    elem.addEventListener("click",function(){
        
        codeLink.forEach(el => {
            el.classList.remove("active");
        });
        elem.classList.add("active");
        
        codeView.forEach(el => {
            el.style.display = "none";
        })
        codeView[index].style.display = "block";

    });
})