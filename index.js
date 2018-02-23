function pushspin() {
    $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top,
            bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });
}

$( window ).resize(function() {
    pushspin();
});

$( document ).ready(function() {
    pushspin();
});

var options = [
    {selector: '#blue', offset: 1500, callback: function(el) {
        Materialize.toast("Surprised!? Don't worry be happy!", 3000 );
    } },
    {selector: '#green', offset: 1000, callback: function(el) {
        Materialize.toast("Contac me!", 2000 );
    } }
  ];
Materialize.scrollFire(options);