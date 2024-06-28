document.addEventListener('DOMContentLoaded', function () {
    var screenWidth = window.innerWidth;
    var companyLink = document.getElementById('company-link');
    var afishaLink = document.getElementById('afisha-link');

    if (screenWidth <= 768) {
        companyLink.href = "mobile-company.html";
        afishaLink.href = "mobile-afisha.html";
    } else {
        companyLink.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This feature is only available on mobile devices.');
        });

        afishaLink.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This feature is only available on mobile devices.');
        });
    }
});
