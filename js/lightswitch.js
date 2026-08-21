// DARK MODE
window.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".lightswitch");
    $(".lightswitch i").attr("class","ph-moon-fill");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.add("night");
        $(".lightswitch i").attr("class","ph-sun-fill");
        $(".lightswitch").attr("title","Light Mode");
    };

    btn.addEventListener("click", function () {
        document.body.classList.toggle("night");
        let obj = {
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
        $(".lightswitch").attr("title", obj[theme]);
    });
});

// HIDE MTLS
window.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".mtl_button");
    $(".mtl_button i").attr("class","ph-prohibit");
    
    const currentMtlDisplay = localStorage.getItem("mtl_display");
    if (currentMtlDisplay == "hide") {
        $("a.mtl").each(function () {
            $(this).addClass("hide_mtl");
        });
        $(".mtl_button i").attr("class","ph-robot");
        $(".mtl_button").attr("title","Show MTLs");
    };

    btn.addEventListener("click", function () {
        $(".mtl_button").toggleClass('mtl_disabled');
        $("a.mtl").each(function () {
            $(this).toggleClass("hide_mtl");
        });

        let obj = {
            'show': 'Hide MTLs',
            'hide': 'Show MTLs',
        };
        let mtl_display = "show";
        $(".mtl_button i").attr("class","ph-prohibit");
        if ($(".mtl_button").hasClass("mtl_disabled")) {
            mtl_display = "hide";
            $(".mtl_button i").attr("class","ph-robot");
        };
        localStorage.setItem("mtl_display", mtl_display);
        $(".mtl_button").attr("title", obj[mtl_display]);
    });
});