dict = {
    "PERSON": "Персона",
    "B-PERSON": "Персона",
    "I-PERSON": "Персона",

    "NORP": "Идентичность",
    "B-NORP": "Идентичность",
    "I-NORP": "Идентичность",

    "FACILITY": "Инфраструктура",
    "B-FACILITY": "Инфраструктура",
    "I-FACILITY": "Инфраструктура",

    "ORGANIZATION": "Организация",
    "B-ORGANIZATION": "Организация",
    "I-ORGANIZATION": "Организация",

    "GPE": "Локация",
    "B-GPE": "Локация",
    "I-GPE": "Локация",

    "LOCATION": "Географический объект",
    "B-LOCATION": "Географический объект",
    "I-LOCATION": "Географический объект",

    "PRODUCT": "Продукт",
    "B-PRODUCT": "Продукт",
    "I-PRODUCT": "Продукт",

    "EVENT": "Событие",
    "B-EVENT": "Событие",
    "I-EVENT": "Событие",

    "WORK OF ART": "Искусство",
    "B-WORK OF ART": "Искусство",
    "I-WORK OF ART": "Искусство",

    "LAW": "Закон",
    "B-LAW": "Закон",
    "I-LAW": "Закон",

    "LANGUAGE": "Язык",
    "B-LANGUAGE": "Язык",
    "I-LANGUAGE": "Язык",

    "DATE": "Дата",
    "B-DATE": "Дата",
    "I-DATE": "Дата",

    "TIME": "Время",
    "B-TIME": "Время",
    "I-TIME": "Время",

    "PERCENT": "Процент",
    "B-PERCENT": "Процент",
    "I-PERCENT": "Процент",

    "MONEY": "Деньги",
    "B-MONEY": "Деньги",
    "I-MONEY": "Деньги",

    "QUANTITY": "Количество",
    "B-QUANTITY": "Количество",
    "I-QUANTITY": "Количество",

    "ORDINAL": "Очередность",
    "B-ORDINAL": "Очередность",
    "I-ORDINAL": "Очередность",

    "CARDINAL": "Числительное",
    "B-CARDINAL": "Числительное",
    "I-CARDINAL": "Числительное"

}

colors = {
    "Персона": "#20C997",
    "Идентичность" : "#C880B7",
    "Инфраструктура" : "#C880B7",
    "Организация": "#6610F2",
    "Локация" : "#DC3545",
    "Географический объект": "#E83E8C",
    "Продукт": "#E83E8C",
    "Событие": "#6C757D",
    "Искусство": "#FFC107",
    "Закон": "#6F42C1",
    "Язык": "#6610F2",
    "Дата": "#E83E8C",
    "Время":"#007BFF",
    "Процент":"#721817",
    "Деньги":"#FD7E14",
    "Количество":"#0B6E4F",
    "Очередность": "#004BA8",
    "Числительное": "#D7B377"
}

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
            
    });

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
            let text = "";
            for (let i = 0; i < response[0][0].length; ++i) {
                if (dict.hasOwnProperty(response[1][0][i])) {
                    text += "<span style='background-color:"+colors[dict[response[1][0][i]]]+";padding:2px 4px;border-radius:5px;'>"
                        +response[0][0][i]+" "+"<span style='border:1px solid #fff;font-size:12px;'>"
                            +dict[response[1][0][i]]
                        +"</span>"
                    +"</span> ";
                } else {
                    text += response[0][0][i] + " ";
                }
            }
            $(".window__chat__inner").append(
                "<span class='window__chat__item right'>"
                + "<div style='margin-bottom:10px;' class='window__chat__item__who right'>" 
                +  "DeepPavlov" + "</div>"
                + "<div class='window__chat__item__message right'>" 
                +  text + "</div>"
                + "<div class='window__chat__item__time right'>" 
   
                + "</span>"
            )
            $(".window__chat__scroll").animate({scrollTop: $(".window__chat__scroll")[0].scrollHeight},1000);
            
            
        },
        error: function(response) {
            console.log(response);
        }
            
    });

   
    
});

