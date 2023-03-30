$(document).ready(function(){
    $('#btn').click(function(){
        const fname = $('#fname').val();
         const phone = $('#phone').val();
        const email=$('#email').val()
        rbt('err', fname,'alert alert-warning p-1');
        alert();
    });
    function rbt(elt,txt,cls){
        elt=$('#'+elt);
        elt.text(txt);
        elt.addClass(cls);
      }
});