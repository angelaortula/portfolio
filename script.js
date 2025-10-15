$(document).ready(function () {
    $("#menu-icon").click(function () {
        $(".navbar").toggleClass("active");
    });

    $(".navbar a").click(function () {
        $(".navbar").removeClass("active");
    });

    $(window).on("scroll", function () {
        let top = $(window).scrollTop();

        $("section").each(function () {
            let offset = $(this).offset().top - 150;
            let height = $(this).outerHeight();
            let id = $(this).attr("id");

            if (top >= offset && top < offset + height) {
                $(".navbar a").removeClass("active");
                $('.navbar a[href*="' + id + '"]').addClass("active");
            }
        });

        $(".header").toggleClass("sticky", top > 100);
    });

    $(".contact form").submit(function (e) {
        e.preventDefault(); 

        let name = $("input[placeholder='Full Name']").val().trim();
        let email = $("input[placeholder='Email']").val().trim();
        let phone = $("input[placeholder='Phone Number']").val().trim();
        let message = $("textarea").val().trim();

        if (name && email && phone && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            $(this)[0].reset(); 
        } else {
            alert("Please fill out all fields.");
        }
    });
});
