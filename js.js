$(function(){
                $(".addToast, #recommendationBanner").on("click", function(){
                    $("#imToast").toast("show")
                })

                $("#darkMode").on("click", function(){
                    $("body").toggleClass("nightMode")
                    $("p, p.h1, p.h2, p.h3, p.h4, p.h5, p.h6, button").toggleClass("nightMode")
                    $("#hud, #footer").toggleClass("nightMode")
                    $(".carousel-control-next, .carousel-control-prev").toggleClass("nightMode")
                    $(".btnBanner").toggleClass("nightMode")
                    $(".card").toggleClass("nightMode")
                    $("i").toggleClass("nightMode")
                    $(".iregulars").toggleClass("nightMode")
                    $(".toast").toggleClass("nightMode")
                    $(".dropdown-item, .dropdown-menu").toggleClass("nightMode")
                })

                $("#btnRecomendation").on("click", function(){
                    let variable = Math.floor(Math.random() * 4)

                    if(variable === 0){
                        $("#toastMovie0").toast("show")
                    } else if (variable === 1){
                        $("#toastMovie1").toast("show")
                    } else if (variable === 2){
                        $("#toastMovie2").toast("show")
                    } else {
                        $("#toastMovie3").toast("show")
                    }
                })
})