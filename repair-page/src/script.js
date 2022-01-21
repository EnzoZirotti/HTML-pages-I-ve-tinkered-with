<script type="text/javascript">

$("#SelectAll1").change(function(){
    if($(this).is(':checked')){
        //$(".MemberSelectcheckBox1").attr('checked','checked');
    }else{
        $(".MemberSelectcheckBox1").removeAttr('checked');
    }
});

</script>