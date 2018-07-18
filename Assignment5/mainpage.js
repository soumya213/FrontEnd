$(document).ready(function() {


  $('.genre').hover(
    () => {
      $("#genre_list").removeClass("dissapear");
    },
    () => {
      $("#genre_list").addClass("dissapear");
    },
  )

  $(".Login").click(
    function() {
      $(this).parent().parent().children(".content").fadeTo("fast", 0.5);
      $(this).parent().parent().children(".login").removeClass("dissapear")
    }
  )

  //close the login form when pressed
  $(".close").click(
    function() {
      $(this).parent().addClass("dissapear");
      $(this).parent().siblings(".content").fadeTo("fast", 1);
    }
  )

  // Movies

  $(".knowmore").click(
    function() {
      $(this).parent().parent().siblings().removeClass("dissapear");
      $(this).parent().parent(".image").fadeTo("fast", 0.7);
    }
  )

  $(".close-description").click(
    function() {
      $(this).parent(".movie-description").addClass("dissapear");
      $(this).parent(".movie-description").parent().children(".image").fadeTo("fast", 1);
    }
  )

  setInterval(() => {
    var x = Math.floor((Math.random() * 3) + 1);
    x = x.toString();
    $('#my_image').attr('src', x + '.jpg');
  }, 1500);
});
