$(document).ready(function(){
console.log('jquery works');

//var a= $('#valueOne').val()
//var b= $('#valueTwo').val()
    $('.mathButtons').on('click',function(){
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
}})
           




})
    });
////end of doc.ready




