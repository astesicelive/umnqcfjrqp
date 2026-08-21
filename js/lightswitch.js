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
        let swi_obj = {
            'light': 'Dark Mode',
            'dark': 'Light Mode',
        };

        let theme = "light";
        $(".lightswitch i").attr("class","ph-moon-fill");
        if (document.body.classList.contains("night")) {
            theme = "dark";
            $(".lightswitch i").attr("class","ph-sun-fill");
        };
        localStorage.setItem("theme", theme);
        $(".lightswitch").attr("title", swi_obj[theme]);
    });

    const mtl_btn = document.querySelector(".mtl_button");
    $(".mtl_button i").attr("class","ph-prohibit");
    
    const currentMtlDisplay = localStorage.getItem("mtl_display");
    if (currentMtlDisplay == "hide") {
        $("a.mtl").each(function () {
            $(this).addClass("hide_mtl");
        });
        $(".mtl_button i").attr("class","ph-robot");
        $(".mtl_button").attr("title","Show MTLs");
    };

    mtl_btn.addEventListener("click", function () {
        $(".mtl_button").toggleClass('mtl_disabled');
        $("a.mtl").each(function () {
            $(this).toggleClass("hide_mtl");
        });

        let mtl_obj = {
            'show': 'Hide MTLs',
            'hide': 'Show MTLs',
        };
        let displ = "show";
        $(".mtl_button i").attr("class","ph-prohibit");
        if ($(".mtl_button").hasClass("mtl_disabled")) {
            theme = "hide";
            $(".mtl_button i").attr("class","ph-robot");
        };
        localStorage.setItem("mtl_display", displ);
        $(".mtl_button").attr("title", mtl_obj[displ]);
    });
});