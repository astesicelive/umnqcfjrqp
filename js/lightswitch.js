// DARK MODE, HIDE MTLS
window.addEventListener("DOMContentLoaded", function() {
    const light_btn = document.querySelector(".lightswitch");
    $(".lightswitch i").attr("class","ph-moon-fill");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.add("night");
        $(".lightswitch i").attr("class","ph-sun-fill");
        $(".lightswitch").attr("title","Light Mode");
    };

    light_btn.addEventListener("click", function () {
        document.body.classList.toggle("night");

        let theme = "Light";
        $(".lightswitch i").attr("class","ph-moon-fill");
        if (document.body.classList.contains("night")) {
            theme = "Dark";
            $(".lightswitch i").attr("class","ph-sun-fill");
        };
        localStorage.setItem("theme", theme.toLowerCase());
        $(".lightswitch").attr("title", theme + " Mode");
    });

    const mtl_btn = document.querySelector(".mtl_button");
    $(".mtl_button i").attr("class","ph-prohibit");
    
    const currentMtlDisplay = localStorage.getItem("mtl_display");
    if (currentMtlDisplay == "none") {
        $("a.mtl").each(function () {
            $(this).css("display", "none");
        });
        $(".mtl_button i").attr("class","ph-robot");
        $(".mtl_button").attr("title","Show MTLs");
    };
});
