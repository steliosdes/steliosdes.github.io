$(document).ready(function() {
    // mailto link for email
    var e3 = $('#myemail').contents().filter(function() {return this.nodeType == 3;}).text().trim();
    var h = $('#myemail > div').contents().filter(function() {return this.nodeType == 3;});
    var e4 = h.get(0).textContent.trim();
    var e2 = h.get(1).textContent.trim();
    var e1 = $('#myemail div div').contents().filter(function() {return this.nodeType == 3;}).text().trim();
    $("#myemail").html($('<a>').text(e1.concat(e2,e3,e4)).attr('href','mailto:'.concat(e1,e2,e3,e4)));

    // Smooth scrolling
    $('a[href^="#sec_"]').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 900, function() {
            window.location.hash = target;
        });
    });

    // Open external links in a new tab
    $('a[href^="http://"], a[href^="https://"]').attr('target','_blank');
    // Open pdfs in a new tab
    $('a[href$=".pdf"]').attr('target', '_blank');

    // Track outbound links (with a target="_blank" attribute)
    $('a[href^="http://"], a[href^="https://"]').click(function() {
        var url = $(this).attr('href');
        ga('send', 'event', 'outbound', 'click', url);
    });
});
