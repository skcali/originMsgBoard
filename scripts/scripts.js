$(document).ready(function () {


  $('#sendMsg').click(function () {
    var userName = $('#username').val();
    var msg =  $('#message').val();
    var message = {
      username: userName,
      message: msg
    };

    $.ajax({
      method: "POST",
      url: "https://originmessages.herokuapp.com/messages",
      contentType: "application/json",
      data: JSON.stringify(message),
      dataType: "json"
    });
  });
});
