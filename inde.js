&amp;lt;script src=&amp;quot;https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js&amp;quot;&amp;gt;&amp;lt;/script&amp;gt;
&amp;lt;script&amp;gt;
$(document).ready(function() {
 
    // Check if JavaScript is enabled
    $('body').addClass('js');
 
    // Make the checkbox checked on load
    $('.login-form span').addClass('checked').children('input').attr('checked', true);
 
    // Click function
    $('.login-form span').on('click', function() {
 
        if ($(this).children('input').attr('checked')) {
            $(this).children('input').attr('checked', false);
            $(this).removeClass('checked');
        }
 
        else {
            $(this).children('input').attr('checked', true);
            $(this).addClass('checked');
        }
 
    });
 
});
&amp;lt;/script&amp;gt;