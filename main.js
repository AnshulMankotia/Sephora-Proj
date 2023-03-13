// ACCORDION FOR FOOTER SECTION
const accordion = document.getElementsByClassName('collapse');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}
// ACCORDION FOR FOOTER SECTION