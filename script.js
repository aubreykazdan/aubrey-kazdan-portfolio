// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

const navBarButton = document.querySelector('.navbar-toggle');

const navBarFixed = document.querySelector('.navbar-fixed-top');
console.log(navBarFixed);

navBarButton.addEventListener('click', console.log('button has been clicked'));

navBarButton.addEventListener('click', function() {
    if (navBarButton.classList === 'collapsed') {
        navBarButton.classList.remove('collapsed')
        console.log('collapsed has been removed')
    } else if (navBarButton.classList != 'collapsed') {
        navBarButton.classList.add('collapsed');
        console.log('collapsed has been added');
    }
})