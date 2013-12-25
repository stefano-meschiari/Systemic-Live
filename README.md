SystemicLive
============

This is the web app version of [Systemic](http://www.github.com/stefano-meschiari/Systemic2): it is an application that lets you visualize and model exoplanetary radial velocities. A live version is available at http://www.stefanom.org/?systemic-online -- click the URL to play! 

A lot of work is still ongoing (orbital animation is the next improvement planned). I'd like this to ultimately become a "citizen science" tool to let amateurs, students and enthusiasts understand and visualize the radial velocity method for exoplanet discovery.

The core kernel library has been translated from C using [Emscripten](http://emscripten.org) (see js/libsystemic.js for the gory auto-generated file). Charts are generated interactively using [HighCharts](http://www.highcharts.com). The HTML layout uses [Twitter Bootstrap](http://getbootstrap.com). The orbital plot is drawn using [JCanvas](http://calebevans.me/projects/jcanvas/). The [GSL library](http://www.gnu.org/s/gsl) (translated by Emscripten) is used for some of the numerical algorithms.

The source is still rough and uncommented. Feel free to contact me if you're interested in hacking on this project :D

Compiling from source
=====================
The SystemicLive javascript library (js/libsystemic.js) is generated
using a special Makefile in the Systemic2 source. Compilation requires
translating parts of the GSL library into Javascript; right now this
is done manually. In the future, I will automate the process within
the Makefile.


