$(document).ready(function() {

  $(".searchMovie").keypress(function() {
    let search = event.target.value;
    let searchCriteria = ''
    let string = /^[a-zA-Z]+$/;
    let number = /^[0-9]+$/;
    let alphanumeric = /^[0-9a-zA-Z]+$/;

    if (search.match(string)) {
      searchCriteria = 't'
    } else if (search.match(number)) {
      searchCriteria = 'y'
    } else if (search.match(alphanumeric)) {
      searchCriteria = 'i'
    }

    $.ajax({
      type: 'GET',
      dataType: 'json',
      async: true,
      url: 'http://www.omdbapi.com/?' + searchCriteria + '=' + search + '&apikey=51f2f007',
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

          for (var key in response) {
            if (typeof(response[key]) == typeof(response)) {
              for (var element in response[key]) {
                for (var value in response[key][element]) {
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
        alert(err.responseJSON.error.message)
      }

    });
  })

})
