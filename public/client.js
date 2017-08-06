$(document).ready(function(){
console.log('jquery works');

//var a= $('#valueOne').val()
//var b= $('#valueTwo').val()
    $('.mathButtons').on('click',function(){
        console.log('buttons been clicked')
        var a= $('#valueOne').val()
        var b= $('#valueTwo').val()
        var operation = $(this).attr('id')
        console.log(operation);
        var createdObject = {
            inputValueOne:a,
            inputValueTwo:b,
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




