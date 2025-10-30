$(function(){
  // Theme toggle: toggles a light theme for printing or preference
  function setTheme(light){
    if(light) $('body').addClass('light-theme'); else $('body').removeClass('light-theme');
    localStorage.setItem('lightTheme', light? '1' : '0');
  }

  // initialize from storage
  var saved = localStorage.getItem('lightTheme');
  if(saved === '1') setTheme(true);

  $('#themeToggle, #themeToggle2, #themeToggle3').on('click', function(){
    setTheme(!$('body').hasClass('light-theme'));
  });

  // Smooth scrolling for anchors (if any)
  $('a[href^="#"]').on('click', function(e){
    var target = $(this.getAttribute('href'));
    if(target.length){
      e.preventDefault();
      $('html,body').animate({scrollTop: target.offset().top - 20}, 450);
    }
  });

  // Print resume
  $('#printResume').on('click', function(){
    window.print();
  });

  // Small UI nicety: fade in cards
  $('.card').css({opacity:0, transform:'translateY(8px)'}).each(function(i,el){
    setTimeout(function(){ $(el).animate({opacity:1, top:0, transform:'translateY(0)'} , 350); }, 80*i);
  });
});
