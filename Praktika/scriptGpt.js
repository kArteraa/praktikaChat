$(".window__sent").submit(function(event) {
    event.preventDefault();
    
    $.ajax({
        type: 'post',
        url: 'time.php',
        success: function(response){
            $(".window__chat__inner").append(
                "<span class='window__chat__item left'>"
                + "<div class='window__chat__item__who left'>" 
                +  "Ваше сообщение" + "</div>"
                + "<div class='window__chat__item__message left'>" 
                +  $(".window__sent__input").val() + "</div>"
                + "<div class='window__chat__item__time left'>" 
                +  response + "</div>"
                + "</span>"
            )
            $(".window__chat__scroll").animate({scrollTop: $(".window__chat__scroll")[0].scrollHeight},1000);
            $('form')[0].reset();
        }
            
    })

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
            
            $(".window__chat__inner").append(
                "<span class='window__chat__item " + response[1] + "'>"
                + "<div class='window__chat__item__who " + response[1] + "'>" 
                +  response[3] + "</div>"
                + "<div class='window__chat__item__message " + response[1] + "'>" 
                +  response[0] + "</div>"
                + "<div class='window__chat__item__time " + response[1] + "'>" 
                +  response[2] + "</div>"
                + "</span>"
            )
            $(".window__chat__scroll").animate({scrollTop: $(".window__chat__scroll")[0].scrollHeight},1000);
            
            
        },
        error: function(response) {
            console.log(response);
        }
            
    })

   
    
});

