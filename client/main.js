function fetchData () {
    $.ajax({
        url : 'http://localhost:3000/photo',
        method : 'GET'
    })
        .done(data=>{
            for(let i = 0; i < data.length; i++) {
                $('#photo').prepend(`
                <img src="${data[i].url}">
                `)
            }
        })
        .fail(err =>{
            console.log(err)
        })
  }

  $(document).ready(function () {
    fetchData()
  })