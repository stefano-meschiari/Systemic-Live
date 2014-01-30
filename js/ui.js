function uialert(text, container, delay) {
    var alertDiv = $('<div class="alert alert-warning alert-dismissable">' +
                           _.escape(text) + '<button type="button" class="close" data-dismiss="alert">&times;</button>');
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

$(document).ready(function(){
    // Initialize top systems combobox
    $('.combobox').select2({width:"300"});
    
    $("#systems").click(function() {
        $("#rv").click();
	      _.defer(function() { K.loadSys($("#systems").val()); });
    });
    
    // Buttons
    $("#optimize").click(function() {
	      K.optimize();
    });
    
    // Initialize charts
    $('#rvplot').highcharts({
	      chart: {
	          type:'scatter',
	          zoomType: 'xy'
	      },
	      tooltip: {
	          enabled:false
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
		            visible:false
	          },
	          {
		            color:COLORS[1],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false			  
	          },
	          {
		            color:COLORS[2],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false			  
	          },
	          {
		            color:COLORS[3],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false			  
	          },
	          {
		            color:COLORS[4],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false			  
	          },
	          {
		            color:COLORS[5],
		            name:"",
		            marker:{symbol:"circle"},			  
		            visible:false			  
	          },
	          {
		            color:"black",
		            type:"line",
		            name:"RV signal",
		            marker:{enabled:false}
	          },
            {
		            color:COLORS[0],
		            name:"Planet 1",
                type:"line",
		            visible:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[1],
		            name:"Planet 2",
                type:"line",
		            visible:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[2],
		            name:"Planet 3",
                type:"line",
		            visible:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[3],
		            name:"Planet 4",
                type:"line",
		            visible:false,
                marker:{enabled:false}
	          },
            {
		            color:COLORS[4],
		            name:"Planet 5",
                type:"line",
		            visible:false,
                marker:{enabled:false}
	          }
	      ]
    });
    
    
    
    $('#psplot').highcharts({
	      chart: {
	          type:'line',
	          zoomType: 'xy'
	      },
	      tooltip: {
	          enabled:true,
	          formatter: function() {
		            return 'Period: ' + Math.pow(10, this.x).toFixed(2) + ", power: " + this.y.toFixed(2) + "<br>Estimated false alarm probability: " + K.getFAPforPeriod(this.x).toPrecision(5);
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
		            marker:{enabled:false}
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
        } else if (option == "#dynamical" && K.getNplanets() == 0) {
            uialert("Add a planet first.", "#top-plot");
            return;
        }

	      $(this).tab('show');
        
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

    // Select all when clicking on share box
    $("#share").click(function() { this.select(); });

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
    
    K.init();
    
    if (_.parameter("sys")) {
        $("#systems").select2("val", _.parameter("sys"));
        _.defer(function() { K.loadFromURL(); });
    } else {
        K.loadSys("14Her.sys");
    }

    _.defer(function() {
       uialert("Welcome to Systemic Live!"); 
    });
});

// Activate offset sliders
