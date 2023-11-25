$(document).ready(function () {
    $('#rotateButton').click(function () {
        rotateNote();
    });

    function rotateNote() {
        
        $('#musicNote').css('transform', `rotate(${($('#musicNote').data('rotation') || 0) + 45}deg)`);
        $('#musicNote').data('rotation', ($('#musicNote').data('rotation') || 0) + 45);
    }
});