<?php

$elements = array("<strong>Period</strong> [days]", "<strong>Mass</strong> [Mj]", "<strong>Mean Anomaly</strong> [deg]", "<strong>Eccentricity</strong>",
                  "<strong>Long. of peri.</strong> [deg]");
$ver = '0.3';
$MAX_SETS = 7;
$MAX_PLANETS = 6;
$last_updated = date ("F d, Y", filemtime('index.php'));

$needs_benchmark = false;
if (!isset($_COOKIE['systemiclive-' . $ver])) {
  setcookie("systemiclive-" . $ver, 'checked', time() + 60*60*24 * 365.25, '/');
  $needs_benchmark = true;
};
header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + 3600));
?>
<!doctype html>
<html lang="en-us">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Systemic Live</title>
	  <link rel="stylesheet" media="all" href="bootstrap/css/bootstrap.min.css">
	  <link rel="stylesheet" media="all" href="bootstrap/css/bootstrap-theme.min.css">
	  <link rel="stylesheet" href="select2/select2.css">	
	  <link rel="stylesheet" href="css/systemic.css?v=<?= $ver ?>">
	  <link rel="stylesheet" media="print" href="css/print.css">
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47960829-1', 'stefanom.org');
  ga('send', 'pageview');

    </script>
  </head>

  <body>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/jcanvas.min.js" defer></script>
    <script src="js/underscore-min.js"></script>
    <script>
     var Module = {
       /*
       'preRun': [
         function() {
           alert("prerun");
           FS.init(null,
                   function(text) {
               alert(text);
             }, function(text) {
               alert(text);
             });
         }
       ],
       postRun: [],
       'print': function(text) {
	       alert(text);
       },
       printErr: function(text) {
         text = Array.prototype.slice.call(arguments).join(' ');
         console.log(text);
       }*/
     };
    </script>
    <script type="text/javascript" src="js/utils.js"></script>
    
    <?php
    if ($_GET['debug']) {
    ?>
    <script type="text/javascript" src="js/libsystemic.js?v=<?= $ver ?>>"></script>
    <script type="text/javascript" src="js/systemic.js?v=<?= $ver ?>"></script>
    <script type="text/javascript" src="js/help.js?v=<?= $ver ?>"></script>
    <?php
    } else {
    ?>
    <script type="text/javascript" src="js/libsystemic.min.js?v=<?= $ver ?>"></script>
    <script type="text/javascript" src="js/systemic.min.js?v=<?= $ver ?>"></script>
    <script type="text/javascript" src="js/help.min.js?v=<?= $ver ?>"></script>
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
		      <?php
          $systems = file('systems.txt');
          foreach ($systems as $sys)
            echo "<option>" . trim($sys) . "</option>\n";
          ?>			
		    </select>
		  </div>
		  <div class="btn-group pull-right">
			  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			    Systemic Live <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" role="menu">
			    <li><a href="http://www.stefanom.org" target="_new">(c) 2013-2014, Stefano Meschiari</a></li>
          <li class="divider"></li>
          <li><a href="http://www.stefanom.org/category/systemic-online" target="_new">Tutorials</a></li>
          <li><a href="#">Last updated: <strong><?= $last_updated ?></strong></a></li>
          <li class="divider"></li>
			      <li><a href="http://stefanom.org/?systemic" target="_new">Full version of Systemic</a></li>
			      <li><a href="http://goo.gl/ZDcj9F" target="_new">Papers about Systemic</a></li>
            <li><a href="https://github.com/stefano-meschiari/Systemic-Live">Fork me on Github!</a></li>
            <li><a href="https://github.com/stefano-meschiari/Systemic-Live/issues">Report a bug</a></li>
			  </ul>			  
		  </div>
		  
	  	<button type="button" class="btn btn-primary" id="optimize">
	  		<span class="glyphicon glyphicon-resize-small"></span> Optimize fit
	  	</button>
			
	  	<button type="button" class="btn btn-info" id="help_top">
	  		<span class="glyphicon .glyphicon glyphicon-question-sign"></span>
	  	</button>
						
		</div>
    </div>
    <div class="container">
      <div id="output_panel" class="panel panel-default" style="display:none">
        <div class="panel-heading">Message output <a href="#" onClick="$('#output_panel').hide();">[close]</a></div>
        <div class="panel-body">
          <textarea id="output"></textarea>
        </div>  
      </div>
      <div id="busy" class="alert alert-danger">
        Computing... <button class="btn btn-danger" id="stop">Stop</button>
      </div>
      <div class="row">
	      <div class="col-md-7">
		      <ul class="nav nav-pills nav-pills-xs" id="rvtabs">
			      <li class="active"><a href="#rv" id="rv">RADIAL VELOCITY</a></li>
			      <li><a href="#res">RESIDUALS</a></li>
            <li><a href="#phased">PHASED RADIAL VELOCITY</a></li>
            <li><a href="#dynamical">DYNAMICS</a></li>

		      </ul>
          <div class="box" id="top-plot">
            
		        <div id="rvplot" class="plot">
		        </div>

            <form id="phased-toolbox" class="navbar-form navbar-left">
              <div class="navbar-group">
              <label for="phased-planet">Radial velocity curve for planet:</label>
              <select id="phased-planet" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              </div>
            </form>

            <form id="dynamical-toolbox" class="navbar-form navbar-left">
               <div class="navbar-group">
                 Evolve for:
                 <input type="text" id="dynamical-years" placeholder="years" value="1000"> years into the future.
                 <button type="button" class="btn btn-default navbar-btn pull-right" id="dynamical-integrate">Integrate</button>
                 
               </div>
               <div class="navbar-group">
                 Show:
                 <select id="dynamical-plot">
                   <option>Semi-major axes</option>
                   <option>Eccentricities</option>
                 </select>
               </div>
            </form>

            <div class="alert alert-warning" id="alert-short-period">
              One of the planets has a very short period compared to the time span of the data.
              The radial velocity curve may be distorted or unreadable. Switch to the Phased Radial Velocity panel to see
              a more useful radial velocity curve.
            </div>
		        <div class="btn-group" style="float:right">
		          <button type="button" class="btn btn-info btn-xs" id="help_rvplot"><span class="glyphicon glyphicon-question-sign"></span></button>
		        </div>
          </div>
		      <div class="clearseparator"></div>
		      
		      <ul class="nav nav-pills nav-pills-xs" id="pstabs">
			      <li class="active"><a href="#ps">POWER SPECTRUM</a></li>
		      </ul>
		      
			    <div class="box" id="bottom-plot">

		        <div id="psplot" class="plot">
		        </div>

            <form id="ps-toolbox" class="navbar-form navbar-left">
               <div class="navbar-group">
                 Show power between:
                 <input type="text" id="ps-from" placeholder="days" value="1" size=6>
                 and
                 <input type="text" id="ps-to" placeholder="days" value="20000" size=6>
                 days.

                 <button type="button" class="btn btn-default navbar-btn" id="ps-set">Set</button>
                 <button type="button" class="btn btn-default navbar-btn" id="ps-reset">Reset</button>
               </div>
            </form>
            
            <table class="table table-condensed" id="pstable">
              <tr>
                <th>Period [d]</th><th>Power</th><th>False alarm probability</th>
              </tr>
              <?php for ($i = 0; $i < 10; $i++): ?>
                <tr><td id="pstable_p<?=$i ?>"></td><td id="pstable_power<?=$i ?>"></td><td  id="pstable_fap<?=$i ?>"></td></tr>
              <?php endfor; ?>
            </table>            
		      </div>

	      </div>
	      <div class="col-md-5">
		      <div id="statistics" class="panel panel-info">
            <div class="panel-heading">
		          STATISTICS
			        <div class="btn-group btn-group-xs pull-right">
			          <button type="button" class="btn btn-info btn-xs" id="help_statistics"><span class="glyphicon glyphicon-question-sign"></span></button>
		            
			        </div>
		        </h5>
            </div>
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
            <div class="panel-footer">
              
		          <input type="checkbox" id="integrated"> <label for="integrated">Dynamical integration</label>
            </div>
		      </div>

		      <div class="panel panel-default">
            <div class="panel-heading">
		          TELESCOPE OFFSETS 
		          <div class="btn-group pull-right">
		            <button type="button" class="btn btn-info btn-xs" id="help_offsets"><span class="glyphicon glyphicon-question-sign"></span></button>
		            
		          </div>
		        </div>
		        <div id="offsets" class="panel-body">
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

		      <div class="panel panel-default">
		        
			      <div class="panel-heading">
			        PLANETS
			        <div class="btn-group pull-right">
			          <button type="button" class="btn btn-default btn-xs" id="addPlanet"><span class="glyphicon glyphicon-tasks"></span> Add planet</button>
			          <button type="button" class="btn btn-danger btn-xs" id="removePlanet"><span class="glyphicon glyphicon-minus-sign"></span> Remove planet</button>
			          
			          
			          <button type="button" class="btn btn-info btn-xs" id="help_planets"><span class="glyphicon glyphicon-question-sign"></span></button>
			          
			        </div>
			        
		        </div>
		        <div id="planets" class="panel-body">
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
          </div>

            <div class="panel panel-default">
              <div class="panel-heading">
		            ORBITAL PLOT

		            <div class="btn-group pull-right">
		              <button type="button" class="btn btn-default btn-xs" id="zoomIn"><span class="glyphicon glyphicon-zoom-in"></span></button>
		              <button type="button" class="btn btn-default btn-xs" id="zoomOut"><span class="glyphicon glyphicon-zoom-out"></span></button>
                  <button type="button" class="btn btn-default btn-xs" id="orbit-download">Download plot</button>
		              <button type="button" class="btn btn-info btn-xs" id="help_orbit"><span class="glyphicon glyphicon-question-sign"></span></button>
		              
		            </div>
		          </div>
		          
		          <div id="orbit" class="panel-body">
		            <canvas id="orbitalplot" width="200px" height="200px">
		              Sorry, your browser does not support the canvas element. Time to update? 
		            </canvas>
		          </div>
		          <div id="zoomLegend">
			          <div id="zoomLine"></div>
			          <div id="zoomText">1 AU</div>			
		          </div>			
	          </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                SHARE THIS FIT
              </div>
              <div class="panel-body" id="share-panel">
                <em class="hint">Copy and paste this URL to save/retrieve the current fit.</em><br>
                <input class="share" id="share" readonly>
                <p>
                <button class="btn btn-default btn-sm" title="Click to bookmark this fit, so you can retrieve it later." id="share-bookmark">Bookmark</button>
                <button class="btn btn-default btn-sm" title="Email a link to this fit" id="share-email">Email</button>

                </p>
              </div>
            </div>

            <div class="clearseparator"></div>
		      <div class="panel panel-default">
            <div class="panel-heading">
		          ABOUT THIS STAR
            </div>
            <div class="panel-body" id="about-star">
            </div>
          </div>

          </div>

          <?php
          if ($needs_benchmark)
            echo '<script type="text/javascript" src="js/benchmark.js"></script>';
          
          ?>

          <script type="text/javascript" src="js/ui<?= ($_GET['debug'] ? '' : '.min') ?>.js?v=<?=$ver ?>"></script>
  </body>
</html>
