$(function(){
                $(".addToast").on("click", function(){
                    $("#imToast").toast("show")
                })

                $("#darkMode").on("click", function(){
                    $("body").addClass("nightMode")
                    $("p, p.h1, p.h2, p.h3, p.h4, p.h5, p.h6, button").addClass("nightMode")
                    $("#hud, #footer").addClass("nightMode")
                    $(".carousel-control-next, .carousel-control-prev").addClass("nightMode")
                    $(".btnBanner").addClass("nightMode")
                    $(".card").addClass("nightMode")
                    $("i").addClass("nightMode")
                    $(".irregulars").addClass("nightMode")
                    $(".toast").addClass("nightMode")
                })

                $("#lightMode").on("click", function(){
                    $("body").removeClass("nightMode")
                    $("p, p.h1, p.h2, p.h3, p.h4, p.h5, p.h6, button").removeClass("nightMode")
                    $("#hud, #footer").removeClass("nightMode")
                    $(".carousel-control-next, .carousel-control-prev").removeClass("nightMode")
                    $(".btnBanner").removeClass("nightMode")
                    $(".card").removeClass("nightMode")
                    $("i").removeClass("nightMode")
                    $(".irregulars").removeClass("nightMode")
                    $(".toast").removeClass("nightMode")
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