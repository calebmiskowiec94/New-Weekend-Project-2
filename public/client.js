$(document).ready(function(){
console.log('jquery works');

//var a= $('#valueOne').val()
//var b= $('#valueTwo').val()
    $('#buttons').on('click',function(){
        var a= $('#valueOne').val()
        var b= $('#valueTwo').val()
        //console.log()
        //var sum = a-b;
       
        console.log('button pushed')
.ajax({
    method: "POST",
    url:'/codeChallenge',
    data:'',
    success: '',

})
           




})
    });
////end of doc.ready




