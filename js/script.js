$(document).ready(function () {

    // // Header

    $("#content").load("content-mess.html");
    $("#tabs-list").load("mess.html");


    // User Detail
    $(".user-detail").click(function (e) { 
        $("#user-detail").show(500);
        $(".overlay").show();
    });

    // // User Case

    // Messeger
    $("#mess").click(function (e) { 
        $(".user__case--item").removeClass("active");
        $(this).addClass("active");

        $("#content").load("content-mess.html");
        $("#tabs-list").load("mess.html");

    });

    // Contacts
    $("#contacts").click(function (e) { 
        $(".user__case--item").removeClass("active");
        $(this).addClass("active");  

        $("#content").load("content-add-friends.html");
        $("#tabs-list").load("contacts.html");
    });


    // Close
    $(".user__icon-close").click(function (e) { 
        $("#user-detail").hide(500);
        $(".overlay").hide(500);
    });

    $(".user__case--item").click(function (e) { 
        $("#user-detail").hide(500);
        $(".overlay").hide(500);
    });

    $(".overlay").click(function (e) { 
        $("#user-detail").hide(500);
        $(".overlay").hide(500);
    });

    // // Home Responsive

    $(".tabs-card__item").click(function (e) {
        $(".chat-box").show(500);
    });

    $(".chat-box__icon-close").click(function (e) { 
        $(".chat-box").hide(500);
    });


    // Login
    $("#login").click(function (e) { 
        $("#form-login").show(500);
        $("#form-register").hide(500);
        $(".form-title").removeClass("active");
        $(this).addClass("active");    
    });

    $("#register").click(function (e) { 
        $("#form-register").show(500);
        $("#form-login").hide(500);
        $(".form-title").removeClass("active");
        $(this).addClass("active");    
    });
    
});