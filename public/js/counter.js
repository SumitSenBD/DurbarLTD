$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({countNum: $this.text()}).delay(4500).animate({
            countNum: countTo
        },

        {

            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });

});