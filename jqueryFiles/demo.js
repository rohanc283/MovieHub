// $(document).ready(function () {
//     let btn = $('#btn');
//     $('#btn2').click(function () {
//         $('.img').toggle(1000);
        
//     })
//     btn.click(function () {
//         let img = $('.img');
//         let label = btn.html();
//         if (label =="Hide") {
//             img.hide(1000,function () {
//                 btn.html("Show");          
//             });
            
//         }else{
//             img.show(1000,function () {
//                 btn.html("Hide");          
//             });
//         }
//     });
// });

// $(document).ready(function () {
//     // let btn = $('#btn');
//     // $('#btn2').click(function () {
//     //     $('.img').slideToggle(1000);
        
//     // })
//     // btn.click(function () {
//     //     let img = $('.img');
//     //     let label = btn.val();
//     //     if (label =="Slide Up") {
//     //         img.slideUp(4000,function () {
//     //             btn.val("Slide Down");          
//     //         });
            
//     //     }else{
//     //         img.slideDown(2000,function () {
//     //             btn.val("Slide Up");          
//     //         });
//     //     }
//     // });


// });

$(function () {
    $('#btn').mouseover(function () {
        $('.block').css({"font-size":"30px", 'border-width':'10px', 'background-color':'pink'})
    })
    $('#btn2').mouseover(function () {
        $('.block').animate({"font-size":"30px", 'border-width':'10px', height:'100px',
         width:'500px'},2000,()=>alert("Amimation Completed"))
    })
})

