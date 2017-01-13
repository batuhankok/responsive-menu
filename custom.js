$(function(){
    
    
    // Mobile menu
    var i = 0;
    $('#openMenu').click(function(){
    
        if( i == 0 ){
            $(this).text('Close Menu');
            i++;
        }else{
            $(this).text('Open Menu');
            i = 0;
        }

        $(this).next('ul').toggle(300);   

    });
    // #Mobile menu

    
    // Search
    $('#hideSearch').click(function(){

        $('#search').hide(400);

    });
    
    $('#openSearch').click(function(){

        $('#search').show(400);

    });
    // #Search
    

});

