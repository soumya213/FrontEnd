$(document).ready(function() {

  $(".submit").click(function() {
    let search = $('.searchMovie').val();
    let date = $(".date").val();
    let searchCriteria = '';
    let string = /^[a-zA-Z\s,:]+$/;
    let number = /^[0-9\s]+$/;
    let alphanumeric = /^[0-9a-zA-Z\s]+$/;

    //check if date mentioned is a number
    if (date % 2 == 0 || date % 2 == 1||date=='') {
      $(".date").css({"border-color": ""});
      if (search.match(string)) {
        searchCriteria = 't'
      } else if (search.match(alphanumeric)) {
        searchCriteria = 'i'
      }

      moviefinder(search, searchCriteria, date);

    } else {
      $(".date").css({"border-color": "red"});
      $(".movieDetail").html(
        `
        <p class="topPadding">Please check the date entered.Only number allowed.</p>
        `
      );
      $('p').css({"color":"red"});




    }


  })

})

let moviefinder = (search, searchCriteria, date) => {

  $.ajax({
    type: 'GET',
    dataType: 'json',
    async: true,
    url: 'https://www.omdbapi.com/?' + searchCriteria + '=' + search + '&y=' + date + '&apikey=51f2f007',
    success: (response) => {
      $("p").remove()

      if (response.Response === 'False') {
        $('.movieDetail').html(
          `<p class="topPadding" style="color:red">Please check the title/date/id of the movie you are searching for</p>`
        )
      } else {

        $('.movieDetail').html(
          `
        <p class="topPadding">Please Find the deails of movie <i> ${response.Title}</i></p>
        <div class="row">

        <div class="card col-md-4 col-sm-12 col-xs-12 poster ">
        </div>
        <div class="card col-md-8 col-12 value" style="width: 40vw;">
          <div class="card-body">
            </div>
          </div>
      </div>
        `

        )

        if (response.Poster == 'N/A') {
          $('.poster').html(
            `
            <img class="card-img-top poster" src="Photo.JPG" alt="Image not present">

            `
          )

        } else {
          $('.poster').html(
            `
            <img class="card-img-top poster" src="${response.Poster}" alt="Image not present">

            `
          )
        }

        for (let key in response) {
          if (typeof(response[key]) == typeof(response)) {
            for (let element in response[key]) {
              for (let value in response[key][element]) {
                $('.value').append(
                  `<p><strong>${value}</strong> : ${response[key][element][value]}</p>
                  `
                )
              }
            }
          } else {
            if (key != 'Response') {

              $('.value').append(

                `<p><strong>${key}</strong> : ${response[key]}</p>`
              )
            }
          }
        }
      }
    },

    error: (err) => {
      console.log(err.responseJSON.error.message);
    },
    timeout: 3000

  });

}
