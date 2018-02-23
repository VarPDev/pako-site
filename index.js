$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});

var options = [
    {selector: '#blue', offset: 300, callback: function(el) {
        Materialize.toast("Surprised!? Don't worry be happy!", 3000 );
    } },
    {selector: '#green', offset: 500, callback: function(el) {
        Materialize.toast("Contac me!", 2000 );
    } }
  ];
Materialize.scrollFire(options);