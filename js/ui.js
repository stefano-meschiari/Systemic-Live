
function uialert(text, container, delay) {
    var alertDiv = $('<div class="alert alert-warning alert-dismissable">' +
                           text + '<button type="button" class="close" data-dismiss="alert">&times;</button>');
    container = container || ".container";
    delay = delay || 400;
    $(container).prepend(alertDiv);

    _.delay(function() {
        if (delay > 0)
            $(alertDiv).hide(400, function() {
                $(alertDiv).remove();
            });
    }, 3000);
}

function about(sys) {
    $("#about-star").html("Loading information...");
    $.get('star.php?star=' + encodeURIComponent(sys),
         function(data) {
            $("#about-star").html(data); 
         });
}

SYSTEMIC_PARAMETERS = location.search;


$(document).ready(function(){
    // Initialize top systems combobox
    $('.combobox').select2({width:"300"});
    
    $("#systems").click(function() {
        $("#rv").click();
	      _.defer(function() { K.loadSys($("#systems").val()); about($("#systems").val()); });
    });
    
    // Buttons
    $("#optimize").click(function() {
	      K.optimize();
    });

    var rvtooltip = function() {
        var pt = K.getRVPlot();
        if (pt == "#rv" || pt == "#res") {
            var d = JDtoDateArray(this.x);
            return '<span style="color:' + this.series.color + '">' + this.series.name.replace('datafiles/', "") + '</span><br>' +
            'Date: <strong>' + d[0] + '/' + d[1] + '/' + d[2] + '</strong><br>' +
            'Julian Date: <strong>' + this.x.toFixed(2) + '</strong><br>' + 
            'RV Value: <strong>' + this.y.toFixed(2) + ' m/s</strong>';
        } else if (pt == "#dynamical"){
            return '<span style="color:' + this.series.color + '">' + this.series.name + "</span><br>" +
                'Time: <strong>' + this.x.toFixed(2) + '</strong> years<br>' +
                'Value: <strong>' + this.y.toFixed(4) + "</strong>";
        } else
            return false;
    };
    
    // Initialize charts
    $('#rvplot').highcharts({
	      chart: {
	          type:'scatter',
	          zoomType: 'xy'
	      },
	      tooltip: {
	          enabled:true,
            formatter:rvtooltip
	      },
	      legend: {
	          //enabled:false
            useHTML:true
	      },
	      title: {
	          enabled:false,
	          text: ''
	      },
	      xAxis: {
	          title: {
		            enabled: true,
		            text: 'Time [Julian Days]'
	          }
	      },
	      yAxis: {
	          title: {
		            enabled:true,
		            text: 'Radial velocity [m/s]'
	          }
	      }, 
	      series: [
	          {
		            color:COLORS[0],
		            name:"",
		            marker:{symbol:"circle"},
		            visible:false, 
                showInLegend:false
                
	          },
	          {
		            color:COLORS[1],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false, showInLegend:false
                
	          },
	          {
		            color:COLORS[2],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false, showInLegend:false
                
	          },
	          {
		            color:COLORS[3],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false, showInLegend:false
                
	          },
	          {
		            color:COLORS[4],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false, showInLegend:false
			          
	          },
	          {
		            color:COLORS[5],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false, showInLegend:false
                
	          },
	          {
		            color:"black",
		            type:"line",
		            name:"RV signal",
                showInLegend:false,
		            marker:{enabled:false},
                turboThreshold:1,
                shadow:false,
                stickyTracking:false,
                tooltip:null,
                enableMouseTracking:false
	          },
            {
		            color:COLORS[0],
		            name:"Planet 1",
                type:"line",
		            visible:false, showInLegend:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[1],
		            name:"Planet 2",
                type:"line",
		            visible:false, showInLegend:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[2],
		            name:"Planet 3",
                type:"line",
		            visible:false, showInLegend:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[3],
		            name:"Planet 4",
                type:"line",
		            visible:false, showInLegend:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[4],
		            name:"Planet 5",
                type:"line",
		            visible:false, showInLegend:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[5],
		            name:"Planet 6",
                type:"line",
		            visible:false, showInLegend:false,
                marker:{enabled:false}
	          }
	      ]
    });
    
    
    
    $('#psplot').highcharts({
	      chart: {
	          type:'line'
	      },
	      tooltip: {
	          enabled:true,
	          formatter: function() {
		            return 'Period: ' + Math.pow(10, this.x).toFixed(4) + ", power: " + this.y.toFixed(2) + "<br>Estimated false alarm probability: " + K.getFAPforPeriod(this.x).toPrecision(5);
	          }
	      },
	      legend: {
	          enabled:false
	      },
	      title: {
	          enabled:false,
	          text: ''
	      },
	      xAxis: {
	          title: {
		            enabled: true,
		            text: 'Period [d]'
	          },
	          labels: {
		            formatter: function() {
		                return Math.pow(10, this.value).toFixed(2);
		            }
	          }
	      },
	      yAxis: {
	          title: {
		            enabled:true,
		            text: 'Power'
	          },
	          min:0
	      }, 
	      series: [
	          {
		            color:"black",
		            type:"line",
		            name:"Power",
		            marker:{enabled:false},
                turboThreshold:1
	          },
	          {
		            color:"black",
		            type:"line",
		            lineWidth:1, dashStyle:'Dot',			  
		            name:"black",
		            marker:{enabled:false, states:{hover:false}},
  		          enableMouseTracking:false
	          },
	          {
		            color:"black",
		            type:"line",
		            lineWidth:1, dashStyle:'Dot',			  
		            name:"FAP (10^-2)",		  
		            marker:{enabled:false, states:{hover:false}},
		            enableMouseTracking:false			  
	          },
	          {
		            color:"black",
		            type:"line",
		            lineWidth:1, dashStyle:'Dot',
		            name:"FAP (10^-3)",			  
		            marker:{enabled:false, states:{hover:false}},
		            enableMouseTracking:false
	          }
	      ]
    });
    
    // Activate tabs
    $("#rvtabs a").click(function (e) {
	      e.preventDefault();
        var option = $(e.target).attr('href');
        if (option == "#phased" && K.getNplanets() == 0) {
            uialert("Add a planet first.", "#top-plot");
            return;
        } else if (option == "#dynamical" && K.getNplanets() < 2) {
            uialert("You need to have at least two planets in the fit to see some dynamical interaction.", "#top-plot");
            return;
        }

	      $(this).tab('show');
        $("#alert-short-period").hide();
        $("#phased-toolbox").css("display", (option == "#phased" ? "block" : "none"));
        $("#dynamical-toolbox").css("display", (option == "#dynamical" ? "block" : "none"));

	      K.setRVPlot($(e.target).attr('href'));
    });


    // Planet add/remove
    $("#addPlanet").click(function(e) {
	      K.addPlanet();
    });
    $("#removePlanet").click(function(e) {
	      K.removePlanet();
    });
    $("#integrated").click(function(e) {
	      $("#rv").click();
        $("#phased").attr("enabled", !($(this).is(":checked")));
        K.setIntegrated($(this).is(":checked"));        
    });

    $("#stop").click(function(e) {
       K.stop(); 
    });
    
    
    // Activate element sliders
    
    // Only redraw power spectrum every second
    for (var i = 1; i <= MAX_PLANETS; i++)
	      for (var j = 0; j < MAX_ELEMENTS; j++) {
	          var s = $("#elementSlider_" + i + "_" + j);
	          s.attr('min', EL_MIN_MAX[j][0]);
	          s.attr('max', EL_MIN_MAX[j][1]);
	          s.attr('step', 0.05);			  
	          
	          (function(slider, timeout, i, j) {
		            var timer, trig = function() { K.refresh(['psplot']); };
		            slider.bind("change", function() {
		                if (timer) {
			                  clearTimeout(timer);
		                }
		                timer = setTimeout(trig, timeout);
		                var v = parseFloat(this.value);
		                if (j == 0 || j == 1) 
			                  v = Math.pow(10, v);
		                K.setElement(i, j, v, false);
		            });
	          })(s, 1000, i, j);
	          
	          
	          var t = $("#element_" + i + "_" + j);
	          t.keyup(function(i, j) {
		            return function(e) {
		                if (e.keyCode == 13) {
			                  e.preventDefault();
			                  K.setElement(i, j, parseFloat(this.value));
		                }
		            };
	          } (i, j));
	          t.blur(function() {
		            K.refresh('elements');
	          });
	      }
    
    // Activate offset sliders
    for (var i = 0; i < MAX_SETS; i++) {
	      var l = $("#offsetLabel_" + i);
	      l.css("color", COLORS[i]);
	      
	      var s = $("#offsetSlider_" + i);
	      s.attr('min', -VOMAX);
	      s.attr('max', VOMAX);
	      s.attr('step', 0.05);	
	      
	      (function(slider, timeout, i, j) {
	          var timer, trig = function() { K.refresh(['psplot']); };
	          slider.bind("change", function() {
		            if (timer) {
		                clearTimeout(timer);
		            }
		            timer = setTimeout(trig, timeout);
		            var v = parseFloat(this.value);
		            K.setParam(i, v, false);
	          });
	      })(s, 2000, i);		  
	      
	      
	      var t = $("#offset_" + i);
	      t.keyup(function(i) {
	          return function(e) {
		            if (e.keyCode == 13) {
		                e.preventDefault();
		                K.setParam(i, parseFloat(this.value), true);
		            }
	          };
	      } (i));
	      
	      t.blur(function() {
	          K.refresh('params');
	      });
    }	  
    
    // Activate help
    var help_ids = ['help_top', 'help_rvplot', 'help_psplot', 'help_statistics', 'help_offsets', 'help_planets', 'help_orbit'];
    
    for (var i = 0; i < help_ids.length; i++)
	      $("#" + help_ids[i]).popover({
	          title:"Help",
	          html:true,
	          placement:"auto top",
	          content:helpdoc[help_ids[i]]
	      });
    
    
    // Orbital zoom
    $("#zoomIn").click(function() { K.zoomInOut(+1); });
    $("#zoomOut").click(function() { K.zoomInOut(-1); });

    $("#orbit-download").click(function() {
        var img = document.getElementById("orbitalplot").toDataURL("image/png");
        window.open(img, "_blank");
    });
    
    // Select all when clicking on share box
    $("#share").click(function() { this.select(); });

    $("#share-bookmark").click(function() {
        if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
                window.sidebar.addPanel(document.title,window.location.href,'');
            } else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
                window.external.AddFavorite(location.href,document.title); 
            } else if(window.opera && window.print) { // Opera Hotlist
                this.title=document.title;
                return true;
            } else { 
                var na = navigator.userAgent.toLowerCase();
                
                if (na.indexOf('chrome') != -1)
                    uialert("Use 'Bookmark This Page...' from the menu to bookmark this fit.", "#share-panel", -1);
                else if (na.indexOf('mobile') != -1)
                    uialert("Use the Bookmark button to bookmark this fit.", "#share-panel", -1);
                else
                    uialert("Use 'Add Bookmark...' from the menu to bookmark this fit.", "#share-panel", -1);
            };
        return true;
    });

    $("#share-email").click(function() {
        var url = $("#share").val();
        var star = _.parameter("sys").replace(".sys", "");
        var mailurl = "mailto:someone@email.com?subject=" +
                       encodeURIComponent("My fit for " + star) +
                       "&body=" + encodeURIComponent("Here's the link:\n\n" + url);
        window.location = mailurl;
        console.log(mailurl);
    });

    
    $("#phased-planet").change(function() {
        var p = +$("#phased-planet").val();
        console.log("Phased planet: " + p);
        
        if (K.getNplanets() < p) {
            uialert("There is no planet " + p + " in the current fit.", "#top-plot");
            $("#phased-planet").val(1);
        } else {
            K.setPhasedPlanet(p);
        }
    });


    // Dynamical integration
    $("#dynamical-integrate").click(function() {
        if (K.getNplanets() < 2) {
            uialert("There will be no dynamical interaction with fewer than two planets!", "#top-plot");
            return;
        }
        var nyears = parseFloat($("#dynamical-years").val());
        K.integrateForward(nyears);
    });
    $("#dynamical-plot").change(function() {
        K.setIntegratePlot($(this).prop('selectedIndex'));
    });

    $("#ps-set").click(function() {
        var min = (+$("#ps-from").val()) | 0;
        var max = (+$("#ps-to").val()) | 0;
        if (max < min || min < 0.01 || max < 0.01 || min > 1e5 || max > 1e5) {
            uialert("Invalid range for periodogram.", "#bottom-plot");
            return;
        }
        if (min == max) {
            max = min + 1;
            $("#ps-to").val(max);
        };
        K.setPSRange(min, max);
    });
    $("#ps-reset").click(function() {
        K.setPSRange(1, 2e4);
    });
    
    K.init();
    
    if (_.parameter("sys")) {
        $("#systems").select2("val", _.parameter("sys"));
        
        _.defer(function() { K.loadFromURL(); });
        about(_.parameter('sys'));
    } else {
        K.resetSeries();
        K.loadSys("14Her.sys");
        about('14Her.sys');
    }

    $(window).resize(_.debounce(function() {
        $("#rvplot").highcharts().setSize($("#top-plot").width() - 20, 400);
        $("#psplot").highcharts().setSize($("#bottom-plot").width() - 20, 400);
    }, 300));
    
    _.defer(function() {
       uialert("Welcome to Systemic Live!"); 
    });

    
});

// Activate offset sliders
