$(document).ready(function () {
  // Varaibles Dom
  const windowDom = $(window);
  const headerDom = $("header");

  // Scroll Top to Section
  $("header ul li a").click(function (e) {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
    e.preventDefault(); // Prevent default anchor behavior
    const idName = this.id;
    const sectionDom = $(`#${idName}-section`);
    const offset = sectionDom.offset().top;
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      300
    ); // 100ms animation duration
  });

  // Add or remove 'black-header' class based on scroll position
  windowDom.scroll(function () {
    if (windowDom.scrollTop() > 42) {
      headerDom.addClass("black-header");
    } else {
      headerDom.removeClass("black-header");
    }

    $("section").each(function () {
      const sectionTop = $(this).offset().top - 60; // adjust offset for header height
      const sectionBottom = sectionTop + $(this).outerHeight();
      const scrollPos = windowDom.scrollTop();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        const sectionId = $(this).attr("id");
        $("header ul li a").removeClass("active");
        $(`header ul li a[id='${sectionId.replace("-section", "")}']`).addClass(
          "active"
        );
      }
    });
  });
  
  // Owl Carousel for slider image
  $(".owl-carousel").owlCarousel({
    responsive: true,
    items: 1,
    navigationText: ["prev", "next"],
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
});
