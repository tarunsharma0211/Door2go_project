
		
$(function () {
	//script for popups
	
	$('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(600);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;	
	
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
	

});	



 function send_data() {
            var search_input = $("#search_text").val();
     console.log(search_input);
            $.ajax({
                type: 'GET',
                url: '/search_agent',
                data: {
                    search_string: search_input
                },
                error: function (e) {
                    console.log(e);
                },
                success: function (r) {
                    if (r.error) {
                        //$('.panel-info').show();
                        $('#result').html(r.error);
                    } else {
                        console.log(r);
                       var r_len = r.length;
                        //$('.panel-info').show();
                        var result_array = [];
                        var dom = '';
                        for (var i = 0; i < r_len; i++) {
dom += '<div class="row"><div class="col-sm-3">'+ r[i].name+'</div>'+ '<div class="col-sm-3">'+r[i].detail+'<div class="col-sm-3">'+r[i].phone+'</div>'+'</div>'+'<div class="col-sm-3">'+'<div class="col-sm-3">'+r[i].bio+'</div></div></div>';
                            result_array.push(r[i].name);
                        }
                        
                        $('#result').html(dom);
                    }
                }
            });

            return false;

        };
