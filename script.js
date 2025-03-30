$(document).ready(function() {
    // modal functionality
    const datenschutzModal = $('#datenschutz-modal');
    const impressumModal = $('#impressum-modal');
    const datenschutzLink = $('#datenschutz-link');
    const impressumLink = $('#impressum-link');
    const closeButtons = $('.close');

    // open datenschutz modal
    datenschutzLink.click(function(e) {
        e.preventDefault();
        datenschutzModal.fadeIn(300);
    });

    // open impressum modal
    impressumLink.click(function(e) {
        e.preventDefault();
        impressumModal.fadeIn(300);
    });

    // close modals
    closeButtons.click(function() {
        $('.modal').fadeOut(300);
    });

    // close modal when clicking outside
    $(window).click(function(e) {
        if ($(e.target).hasClass('modal')) {
            $('.modal').fadeOut(300);
        }
    });

    // close modal with escape key
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.modal').fadeOut(300);
        }
    });
}); 