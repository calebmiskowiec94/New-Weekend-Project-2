$(document).ready(function(){
console.log('jquery works');

//var a= $('#valueOne').val()
//var b= $('#valueTwo').val()
    $('#subtraction').on('click',function(){
        var a= $('#valueOne').val()
        var b= $('#valueTwo').val()
        //console.log()
        var sum = a-b;
       
        console.log(sum)

    });


});//end of doc.ready





