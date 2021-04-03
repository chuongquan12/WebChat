$(document).ready(function () {
    $(".user-detail").click(function (e) { 
        $("#user-detail").show(500);
        $(".overlay").show();
    });
    $(".user__icon-close").click(function (e) { 
        $("#user-detail").hide(500);
        $(".overlay").hide(500);
    });

    $(".overlay").click(function (e) { 
        $("#user-detail").hide(500);
        $(".overlay").hide(500);
    });

    $(".tabs-card__item").click(function (e) {
        $(".chat-box").show(500);
    });

    $(".chat-box__icon-close").click(function (e) { 
        $(".chat-box").hide(500);
    });

    // Contacts

    $("#content").load("list-add-friends.html");

    $("#add-friends").click(function (e) { 
        $(".tabs-contact__item").removeClass("active");
        $(this).addClass("active");   
        $("#content").load("list-add-friends.html");
        $("#content").show(500);
    });

    $("#friends").click(function (e) { 
        $(".tabs-contact__item").removeClass("active");
        $(this).addClass("active");    
        $("#content").load("list-friends.html"); 
        $("#content").show(500);
    });

    $("#group").click(function (e) { 
        $(".tabs-contact__item").removeClass("active");
        $(this).addClass("active");    
        $("#content").load("list-group.html"); 
        $("#content").show(500);
    });
    
});