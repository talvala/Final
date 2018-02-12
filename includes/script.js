

$(function () {

  $('a.showreranks').click(function () {

    var clickedElement = $(this).parent();

    //If it's already visible, hide it
    if($("#rerank_details").is(":visible")) {

      $('#rerank_details').slideToggle(300, function() {

        //Now that the animation is finished, show it
        $("#rerank_details").appendTo(clickedElement);

      });

    } else {

      $("#rerank_details").appendTo(clickedElement);
      //Just show it
      $('#rerank_details').slideToggle(300);
    }

    return false;
  });


  $('a.showreranks_high').click(function () {

    var clickedElement = $(this).parent();

    //If it's already visible, hide it
    if($("#rerank_details_high").is(":visible")) {

      $('#rerank_details_high').slideToggle(300, function() {

        //Now that the animation is finished, show it
        $("#rerank_details_high").appendTo(clickedElement);

      });

    } else {

      $("#rerank_details_high").appendTo(clickedElement);
      //Just show it
      $('#rerank_details_high').slideToggle(300);
    }

    return false;
  });

  $('a.showreranks_fp').click(function () {

    var clickedElement = $(this).parent();

    //If it's already visible, hide it
    if($("#rerank_details_fp").is(":visible")) {

      $('#rerank_details_fp').slideToggle(300, function() {

        //Now that the animation is finished, show it
        $("#rerank_details_fp").appendTo(clickedElement);

      });

    } else {

      $("#rerank_details_fp").appendTo(clickedElement);
      //Just show it
      $('#rerank_details_fp').slideToggle(300);
    }

    return false;
  });



});

(function (a) {

  jQuery.fn.screencenter = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
  }

})(jQuery);

$(document).ready(function () {
  function doit() {
    var p=[];
    $('input.cb').each( function() {
      if($(this).attr('checked')) {
        p.push($(this).attr('rel'));
      }
    } );
    $.ajax( {
      url:'/process.php',
      type:'POST',
      data: {list:p},
      success: function(res) {
        alert(res);
      }
    });
  }

  jQuery(document).ready(function() {

    var back = jQuery(".prev");
    var next = jQuery(".next");
    var steps = jQuery(".step");

    next.bind("click", function() {
    next.bind("click", function() {
      jQuery.each(steps, function(i) {
        if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
          jQuery(steps[i]).addClass('current');
          jQuery(steps[i - 1]).removeClass('current').addClass('done');
          return false;
        }
      })
    });
    back.bind("click", function() {
      jQuery.each(steps, function(i) {
        if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
          jQuery(steps[i + 1]).removeClass('current');
          jQuery(steps[i]).removeClass('done').addClass('current');
          return false;
        }
      })
    });

  })

});


function showPlay() {
  document.getElementById('showplay').style.display = "block";
}
