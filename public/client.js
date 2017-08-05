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

$.ajax({
           method:'POST',
           //the '/' url has to match the app.post on app.js file
           url:'/codeChallenge',
           //data has to be an object
           data:{
               valueA: a,
               valueB: b,
               type: 'ADD'
           },
            //v v v response matches to the req, res 
            //paramenters of the ajax function
            success: function(response){
                console.log(response)
           
            }
       })
    });





});//end of doc.ready





