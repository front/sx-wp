import $ from 'jquery';

class Gallery{

  constructor(){
    this.columns = 4;
    this.width = 100;
    this.margin = 18;
  }

  init(){
    var that = this;

    $('.wp-block-gallery').each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        closeBtnInside: false,
        closeOnBgClick: false,
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        callbacks: {
          open: function () {
            var el = $(this)[0]['wrap'][0];
            var $gallery = $(this)[0]['ev'].closest('.wp-block-gallery');
            var $thumbnails = '';
            var current = $(this)[0]['index'];
            var container_width;
            var $main_slider = '';

            /**
             * Calculate thumbnails width block
             */
            if ($gallery.find('li').length < that.columns) {
              container_width = (that.width * $gallery.find('li').length) + ($gallery.find('li').length * that.margin);
            } else {
              container_width = (that.width * that.columns) + (that.columns * that.margin);
            }

            /**
             * Append thumbnails to block
             */
            if ($gallery.find('li').length > 0) {
              $thumbnails = `<div class="mfp-pager alignfull"><div class="container" style="width: ${container_width}px"><ul class="lightbox-carousel">`;
              $main_slider = `<div class="mfp-main-slider alignfull"><ul class="main-slide-carousel">`;

              for (var i = 0; i < $gallery.find('li').length; i++) {
                var $thumb = $gallery.find('li:eq(' + i + ')').find('img').attr('src');
                var $main = $gallery.find('li:eq(' + i + ')').find('a').attr('href');
                var caption = $gallery.find('li:eq(' + i + ')').find('figcaption').text();

                $thumbnails += `<div><li><button type="button" data-slide="${i}"><img src="${$thumb}"></button></li></div>`;
                $main_slider += `<div class="main-slide-carousel__item"><div class="main-slide-carousel__img" style="background-image: url(${$main})"></div><div class="mfp-caption">${caption}</div></div>`;
              }

              $thumbnails += `</ul></div></div>`;
              $main_slider += `</ul></div>`;
            }

            var toggle_button = `<div class="main-slide-carousel__toggle js-slide-toggle"><svg class="icon" width="24" height="24"><use xlink:href="build/spritemap.svg#grid"></use></svg></div>`;

            $(el).find('.mfp-container .mfp-content').html($main_slider);
            $(el).find('.mfp-container').append($thumbnails);
            $(el).find('.mfp-container').append(toggle_button);

            var thumbs = $(el).find('.lightbox-carousel');
            var main = $(el).find('.main-slide-carousel');

            thumbs.slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: main,
              focusOnSelect: true,
              arrows: false,
              variableWidth: true,
              swipeToSlide: true,
              responsive: [
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                  }
                }
              ]
            });

            main.slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              asNavFor: thumbs,
              initialSlide: current
            });

            thumbs.find('.slick-slide').removeClass('slick-current');
            thumbs.find('.slick-slide').eq(current).addClass('slick-current');

            $(el).find('.js-slide-toggle').on('click', function(){

              if(!$(el).find('.mfp-pager').hasClass('is-hidden') ) {
                $(el).find('.mfp-pager').addClass('is-hidden');
              } else{
                $(el).find('.mfp-pager').removeClass('is-hidden');
              }

              if (!$(el).find('.mfp-container').hasClass('is-hidden')) {
                $(el).find('.mfp-container').addClass('is-hidden');
              } else {
                $(el).find('.mfp-container').removeClass('is-hidden');
              }

            });

          },
        }
      });
    });
  }
}

export default Gallery;
