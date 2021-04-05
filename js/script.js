$(document).ready(function () {
  // // Header

  $("#content").load("content-mess.html");
  $("#tabs-list").load("mess.html");

  // User Detail
  $(".user-detail").click(function (e) {
    $("#user-detail").show(500);
    $(".overlay").show();
  });

  // Close
  $(".user__icon-close").click(function (e) {
    $("#user-detail").hide(500);
    $(".overlay").hide();
  });

  $(".user__case--item").click(function (e) {
    $("#user-detail").hide(500);
    $(".overlay").hide();
  });

  $(".overlay").click(function (e) {
    $("#user-detail").hide(500);
    $("#add-friend-content").hide(500);
    $("#setting-content").hide(500);

    $(".overlay").hide();
  });
  // Close add friend

  $(".fa-times").click(function (e) {
    $("#add-friend-content").hide(500);
    $("#setting-content").hide(500);

    $(".overlay").hide();
  });

  $(".add-friend__card--icon").click(function (e) {
    $("#add-friend-content").hide(500);
    $("#setting-content").hide(500);

    $(".overlay").hide();
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

  // Add friends
  $("#add-friend").click(function (e) {
    $("#add-friend-content").show(500);
    $(".overlay").show();
  });

  // Setting
  $("#setting").click(function (e) {
    $("#setting-content").show(500);
    $(".overlay").show();
  });

  $("#edit-user").click(function (e) {
    $(".edit-input").removeAttr("disabled");
    $("#edit-user").hide();
    $("#save-edit-user").show();
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
