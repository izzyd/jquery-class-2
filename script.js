
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function(response) {
        console.log(response); 

        var firstUser = response[0];

        var $userOne = $('.user-profile').eq(0);
        
    }
})
