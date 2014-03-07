var empresa;
var produto;

$(document).on( "pagecreate", function() {
    
    $( "#autocomplete" ).on( "filterablebeforefilter", function ( e, data ) {
        var $ul = $( this ),
            $input = $( data.input ),
            value = $input.val(),
            html = "";
        $ul.html( "" );
        if ( value && value.length > 2 ) {
            $ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
            $ul.listview( "refresh");
            $.ajax({
                url: "http://gd.geobytes.com/AutoCompleteCity",
                dataType: "jsonp",
                crossDomain: true,
                data: {
                    q: $input.val()
                }
            })
            .then( function ( response ) {
                $.each( response, function ( i, val ) {
                    html += "<li><a href='img/picture-o.png'>"  + val + "</a></li>";
                });
                $ul.html( html );
                $ul.listview( "refresh" );
                $ul.trigger( "updatelayout");
            });
        }
    });
});



$(document).on( "pagecreate", ":jqmData(role='page')", function() {
    $(document).on( "swipeleft swiperight", ":jqmData(role='page')", function( e ) {

        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#menu-right" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#menu-left" ).panel( "open" );
            }
        }
    });
});