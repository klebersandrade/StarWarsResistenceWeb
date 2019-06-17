import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'star-wars-resistence-web';

  sendToTop() {
    $('html, body').stop().animate({
      scrollTop: (0)
    }, 1000, 'easeInOutExpo');
  }

  ngOnInit() {
    $(window).click((e) => {
      if ($('.left_menu').hasClass('show')) {
        $('.left_menu').removeClass('show');
        e.preventDefault();
      }
    });

    $('.collapse-item').click((event) => {
      if ($('.left_menu').hasClass('show') && $(window).width() < 768) {
        $('.left_menu').removeClass('show');
      }
      event.stopPropagation();
    });

    $('.left_menu').click((event) => {
      event.stopPropagation();
    });

    $(document).ready(() => {
      $('#sidebarToggle, #sidebarToggleTop').on('click', (e) => {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
        if ($('.sidebar').hasClass('toggled')) {
          $('.sidebar .collapse').collapse('hide');
        }
      });

      $(window).resize(() => {
        if ($(window).width() < 768) {
          $('.sidebar .collapse').collapse('hide');
        }
      });

      $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', (e) => {
        if ($(window).width() > 768) {
          const e0 = e.originalEvent;
          const delta = e0.wheelDelta || -e0.detail;
          $(window).scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      });

      // Scroll to top button appear
      $(document).on('scroll', () => {
        const scrollDistance = $(document).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    });
  }
}
