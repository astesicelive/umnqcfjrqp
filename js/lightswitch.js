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

    let obj = {
        'show': {
            'text': 'Hide MTLs',
            'icon': 'ph-prohibit',
        },
        'hide': {
            'text': 'Show MTLs',
            'icon': 'ph-robot',
        },
    };
    
    const current = localStorage.getItem("mtl_display");
    if (current == "hide") {
        $("a.mtl").each(function () {
            $(this).addClass("hide_mtl");
        });
        $(".mtl_button i").attr("class", obj[current]['icon']);
        $(".mtl_button").attr("title", obj[current]['text']);
        $(".mtl_button").addClass("mtl_disabled");
    };

    btn.addEventListener("click", function () {
        $(".mtl_button").toggleClass('mtl_disabled');
        $("a.mtl").each(function () {
            $(this).toggleClass("hide_mtl");
        });

        let mtl_display = "show";
        if ($(".mtl_button").hasClass("mtl_disabled")) {
            mtl_display = "hide";
        };
        localStorage.setItem("mtl_display", mtl_display);
        $(".mtl_button i").attr("class",obj[mtl_display]['icon']);
        $(".mtl_button").attr("title", obj[mtl_display]['text']);
    });
});