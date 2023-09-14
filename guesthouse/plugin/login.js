
$('li.loginnpanel').click(function () {

    $('#LoginBlog').toggleClass('hidden');

});

$('.loginButton').click(function () {
    $('.ErrorMessage').empty();
    var FormData = $('#LoginForm').serializeArray();
    setTimeout(function () {
        $.ajax({
            url: "/",
            data: FormData,
            type: 'POST',
            async: true,
            success: function (response) {

                $('.ErrorMessage').html(response.message)

                if (response.Username) {

                    location.reload();

                } else {


                }
            }
        });
    }, 500);

});

$('.logoutButton').click(function () {
    $('.ErrorMessage').empty();
    setTimeout(function () {
        $.ajax({
            url: "/",
            data: {rpc: 'Logout'},
            type: 'POST',
            async: true,
            success: function (response) {
                
                location.reload();
                
            }
        });
    }, 500);

});