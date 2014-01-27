<?php
$elements = array("<strong>Period</strong> [days]", "<strong>Mass</strong> [Mj]", "<strong>Mean Anomaly</strong> [deg]", "<strong>Eccentricity</strong>",
                  "<strong>Long. of peri.</strong> [deg]");

$MAX_SETS = 7;
$MAX_PLANETS = 6;
$last_updated = date ("F d Y", filemtime('index.php'));
?>
<!doctype html>
<!-- manifest="cache.manifest.php"  -->
<html lang="en-us">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Systemic Live</title>
	  <link rel="stylesheet" media="all" href="bootstrap/css/bootstrap.min.css">
	  <link rel="stylesheet" media="all" href="bootstrap/css/bootstrap-theme.min.css">
	  <link rel="stylesheet" href="select2/select2.css">	
	  <link rel="stylesheet" href="css/systemic.css">
	  <link rel="stylesheet" media="print" href="css/print.css">
  </head>

  <body>
    <script src="https://code.jquery.com/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/jcanvas.min.js"></script>

    <script>
     var Module = {
       preRun: [],
       postRun: [],
       print: function(text) {
	       console.log(text);
       },
       printErr: function(text) {
         text = Array.prototype.slice.call(arguments).join(' ');
         if (0) { // XXX disabled for safety typeof dump == 'function') {
                 dump(text + '\n'); // fast, straight to the real console
                 } else {
           console.log(text);
         }
       }
     };
    </script>

    <?php
    if ($_GET['debug']) {
    ?>
    <script type="text/javascript" src="js/libsystemic.js?v=0.2"></script>
    <script type="text/javascript" src="js/systemic.js?v=0.2"></script>
    <script type="text/javascript" src="js/help.js?v=0.2"></script>
    <?php
    } else {
    ?>
    <script type="text/javascript" src="js/libsystemic.min.js?v=0.2"></script>
    <script type="text/javascript" src="js/systemic.min.js?v=0.2"></script>
    <script type="text/javascript" src="js/help.min.js?v=0.2"></script>
    <?php
    }
    ?>

    <script src="select2/select2.min.js"></script>
    <script src="highcharts/js/highcharts.js"></script>
    <script src="highcharts/js/highcharts-more.js"></script>
    <script src="highcharts/js/modules/exporting.js"></script>

    <div class="btn-toolbar topbar fill" id="toolbar_top">
		  <div class="btn-group pull-left" style="margin-top:4px">
	  	  &nbsp;&nbsp;&nbsp;SYSTEM:&nbsp;
		    <select class="combobox" id="systems">
		      <?php include('systems.html'); ?>			
		    </select>
		  </div>
		  <div class="btn-group pull-right">
			  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			    Systemic Live <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" role="menu">
			    <li><a href="http://www.stefanom.org" target="_new">(c) 2013-2014, Stefano Meschiari</a></li>
          <li class="divider"></li>          
          <li><a href="https://github.com/stefano-meschiari/Systemic-Live">Fork me on Github!</a></li>
          <li><a href="#">Last updated: <strong><?= $last_updated ?></strong></a></li>
          <li class="divider"></li>
          <li><a href="#" onClick="K.benchmark();">Benchmark</a><li>
			      <li class="divider"></li>
			      <li><a href="http://stefanom.org/?systemic" target="_new">Full version of Systemic</a></li>
			      <li><a href="http://goo.gl/ZDcj9F" target="_new">Papers about Systemic</a></li>
			  </ul>			  
		  </div>
		  
	  	<button type="button" class="btn btn-primary" id="optimize">
	  		<span class="glyphicon glyphicon-resize-small"></span> Optimize fit
	  	</button>
			
	  	<button type="button" class="btn btn-info" id="help_top">
	  		<span class="glyphicon .glyphicon glyphicon-question-sign"></span>
	  	</button>
			&nbsp;
			<div id="busy"><img src="img/busy.gif"> Working...</div>

		</div>
    </div>
    <div class="container">
      <div id="output_panel" class="panel panel-default" style="display:none">
        <div class="panel-heading">Message output <a href="#" onClick="$('#output_panel').hide();">[close]</a></div>
        <div class="panel-body">
          <textarea id="output"></textarea>
        </div>  
      </div>
      <div class="row">
	      <div class="col-md-7">
		      <ul class="nav nav-tabs nav-tabs-xs" id="rvtabs">
			      <li class="active"><a href="#rv">RADIAL VELOCITY</a></li>
			      <li><a href="#res">RESIDUALS</a></li>
		      </ul>
		      <div id="rvplot" class="plot">
		      </div>
		      <div class="btn-group" style="float:right">
		        <button type="button" class="btn btn-info btn-xs" id="help_rvplot"><span class="glyphicon glyphicon-question-sign"></span></button>
		        
		      </div>
		      <div class="clearseparator"></div>
		      
		      <ul class="nav nav-tabs nav-tabs-xs" id="pstabs">
			      <li class="active"><a href="#">POWER SPECTRUM</a></li>
		      </ul>
		      
			    
		      <div id="psplot" class="plot">
		      </div>	
		      <div class="btn-group" style="float:right">
		        <button type="button" class="btn btn-info btn-xs" id="help_psplot"><span class="glyphicon glyphicon-question-sign"></span></button>
		        
		      </div>
	      </div>
	      <div class="col-md-5">
		      <div id="statistics">
		        <h5>STATISTICS
			        <div class="btn-group" style="float:right">
			          <button type="button" class="btn btn-info btn-xs" id="help_statistics"><span class="glyphicon glyphicon-question-sign"></span></button>
		            
			        </div>
		        </h5>
		        <table class="table table-striped" id="stats">
			        <tr>
				        <th>Chi<sup>2</sup><sub>red</sub></th>
				        <td id="chi2"></td>
				        <th>RMS [m/s]</sub></th>
				        <td id="rms"></td>
			        </tr>
			        <tr>
				        <th>Jitter [m/s]</th>
				        <td id="jitter"></td>
				        <th>Data</sub></th>
				        <td id="data"></td>
			        </tr>
			        <tr>
				        <th>Star mass [M<sub>sun</sub>]</th>
				        <td id="mstar"></td>
				        <th>Epoch [JD]</sub></th>
				        <td id="epoch"></td>
			        </tr>					
		        </table>
		        
		      </div>
		      <div class="separator"></div>
		      <div>
		        <h5>TELESCOPE OFFSETS 
		          <div class="btn-group" style="float:right">
		            <button type="button" class="btn btn-info btn-xs" id="help_offsets"><span class="glyphicon glyphicon-question-sign"></span></button>
		            
		          </div>
		        </h5>
		        <div id="offsets">
			        <?php
			        for ($i = 0; $i < $MAX_SETS; $i++) {
			        ?>
			        <div id="offsetPanel_<?=$i?>" class="offsetPanel row">
				        <div class="col-md-5">
					        <label>
					          <input type="checkbox" id="offsetSel_<?= $i ?>"> 
					          <span id="offsetLabel_<?= $i ?>" class="h6"></span></label>
				        </div>
				        <div class="col-md-7">
					        <input type="text" style="width:45%" class="element" id="offset_<?= $i ?>"><input type="range" style="width:45%" id="offsetSlider_<?= $i ?>" class="slider">			
				        </div>
			        </div>
			        <?php
			        };
			        ?>
		        </div>
		      </div>
		      <div class="separator"></div>
		      <div>
		        <h5>PLANETS 
			        
			        <div style="float:right">
			          <div class="btn-group">
			            <button type="button" class="btn btn-default btn-xs" id="addPlanet"><span class="glyphicon glyphicon-tasks"></span> Add planet</button>
			            <button type="button" class="btn btn-danger btn-xs" id="removePlanet"><span class="glyphicon glyphicon-minus-sign"></span> Remove planet</button>
			          </div>
			          <div class="btn-group">
			            <button type="button" class="btn btn-info btn-xs" id="help_planets"><span class="glyphicon glyphicon-question-sign"></span></button>
			            
			          </div>
			        </div>
		        </h5>
		        <div id="planets">
			        <?php
			        for ($i = 1; $i <= 6; $i++) {
			        ?>
			        <div id="planet_<?=$i?>" class="planetPanel">
			          <div class="clearseparator"></div>
				        <span class="label label-default planetLabel">Planet <?= $i ?></span>

				        <span id="extra_<?= $i ?>" class="label label-info">
				        </span>
				        <?php
				        foreach ($elements as $j => $el) {
				        ?>
				        <div class="row">
					        <div class="col-md-5 h6">
						        <label><input type="checkbox" id="elementSel_<?= $i ?>_<?= $j ?>"> <?= $el ?></label>
					        </div>
					        <div class="col-md-7">
						        <input type="text" style="width:45%" class="element" id="element_<?= $i ?>_<?= $j ?>"><input type="range" id="elementSlider_<?= $i ?>_<?= $j ?>" class="slider" style="width:45%">			
					        </div>
				        </div>
				        <?php } ?>
			        </div>
			        <?php
			        }
			        ?>
		        </div>
		        <div class="clearseparator"></div>		
		        <div class="separator"></div>		
		        <h5>ORBITAL PLOT
		          <div style="float:right">
		            <div class="btn-group">
		              <button type="button" class="btn btn-default btn-xs" id="zoomIn"><span class="glyphicon glyphicon-zoom-in"></span></button>
		              <button type="button" class="btn btn-default btn-xs" id="zoomOut"><span class="glyphicon glyphicon-zoom-out"></span></button>
		            </div>
		            <div class="btn-group">
		              <button type="button" class="btn btn-info btn-xs" id="help_orbit"><span class="glyphicon glyphicon-question-sign"></span></button>
		              
		            </div>
		          </div>
		        </h5>
		        <div id="orbit">
		          <canvas id="orbitalplot" width="200px" height="200px">
		            Sorry, your browser does not support the canvas element. Time to update? 
		          </canvas>
		        </div>
		        <div id="zoomLegend">
			        <div id="zoomLine"></div>
			        <div id="zoomText">1 AU</div>			
		        </div>			
	        </div>
          <div class="clearseparator"></div>
          <div class="separator"></div>
          <h5>SHARE</h5>
          <input class="share" id="share">
        </div>
      </div>
      <div class="clearseparator"></div>
      <script type="text/javascript" src="js/ui<?= ($_GET['debug'] ? '' : '.min') ?>.js"></script>
  </body>
</html>
