$(document).ready(function(){
console.log('jquery works');
ajaxGet();
//var a= $('#valueOne').val()
//var b= $('#valueTwo').val()
    $('.mathButtons').on('click',function(){
        ajaxGet()
        console.log('buttons been clicked')
        var apple = $('#valueOne').val()
        var banana = $('#valueTwo').val()
        var operation = $(this).attr('id')
        console.log(operation);
        var createdObject = {
            inputValueOne: apple,
            inputValueTwo: banana,
            type: operation,
 }
        console.log(createdObject)
$.ajax({
    method: "POST",
    url:'/codeChallenge',
    data: createdObject,
    success: function (response){
        console.log(response);
        ajaxGet();
}})
           




})

    });
////end of doc.ready

function ajaxGet(){
    $.ajax({
        method:"GET",
        url:"/codeChallenge",
        success:function(response){
            $('#answer').append('<p>'+response+'</p>');
        }
    })
}




