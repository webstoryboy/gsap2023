hljs.highlightAll();

const nav = document.querySelector(".blog__aside");
const navBtn = document.querySelector("#header .header__inner .left .star");

navBtn.addEventListener("click", function(e) {
    e.preventDefault();
    nav.classList.toggle("open");
    // navBtn.classList.toggle("open");
});

$(".scMenu > div").click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    $(".scMenu > div").removeClass("active");
    target.addClass("active");

    $(".scCont > div").css("display", "none");
    target.parent().next().children().eq(index).css("display", "block");
});

console.log()

if($("#blog").find("youtube")){
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
    $( ".draggable" ).draggable();
}



