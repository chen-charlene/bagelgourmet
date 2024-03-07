window.onscroll = function() {onScroll()};

function onScroll() {
    var header = document.querySelector('.header');
    var body = document.getElementById('page-1-body-container');
    var offset = window.pageYOffset;
    console.log(offset)

    if (offset > 0) {
        header.classList.add('header-fixed');
        body.classList.add('page-1-body-container-fixed');
    } else {
        header.classList.remove('header-fixed');
        body.classList.remove('page-1-body-container-fixed')
    }
}

// window.addEventListener('DOMContentLoaded', () => {
//     const pages = document.querySelectorAll('.page');
//     console.log(pages)
  
//     window.addEventListener('scroll', () => {
//       const scrollPosition = window.scrollY;

  
//       pages.forEach((page, index) => {
//         const pageTop = page.offsetTop;
//         const pageBottom = pageTop + page.offsetHeight;
  
//         if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
//           scrollToPage(index);
//         }
//       });
//     });
  
//     function scrollToPage(pageIndex) {
//       console.log("scrolling to page")
//       pages[pageIndex].scrollIntoView({ behavior: 'smooth' });
//     }
//   });