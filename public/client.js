$(document).ready(function(){
console.log('jquery works');

//var a= $('#valueOne').val()
//var b= $('#valueTwo').val()
    $('.mathButtons').on('click',function(){
        console.log('buttons been clicked')
        var a= $('#valueOne').val()
        var b= $('#valueTwo').val()
       
        console.log('button pushed')
.ajax({
    method: "POST",
    url:'/codeChallenge',
    data:{
        inputValueOne:a,
        inputValueTwo:b,
        type: "ADD",
    },
    success: '',

})
           




})
    });
////end of doc.ready




