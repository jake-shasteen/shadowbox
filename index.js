$( 'document' ).ready( function() {

// TODO: Load images from img folder
// var folder = "img/";

// $.ajax({
//   url: folder,
//   success: function (data) {
//     $(data).find("a").attr("href", function (i, val) {
//       if( val.match(/\.(jpe?g|png|gif)$/) ) { 
//         $(".images").append( "<li><img src='"+ folder + val +"'></li>" );
//       } 
//     });
//   }
// });

  // TODO: Implement shadowbox on images
  // On click on the active shadowbox,
    // hide shadowbox
    // clear img src
  var $shadowbox = $( '#shadowbox' );
  $shadowbox.on( 'click', function() {
    $shadowbox.addClass( 'hidden' );
    $shadowbox.find( 'img' ).attr( 'src', '' );
  });
  // On click on an image,
    // set shadowbox img src
    // remove hidden class from shadowbox 
  $( '.images' ).on( 'click', 'li img', function() {
    $shadowbox.removeClass( 'hidden' );
    $shadowbox.find( 'img' ).attr( 'src', $( this ).attr( 'src' ) );
  })
});
