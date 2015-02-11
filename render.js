var isosurface = require("isosurface")
var gc = require('gcode-parser')
var sl = require("gcode-lines")
var lines2layers = require("gcode-layers")
var pmc = require("gcode-pmc")
var imroad = require("gcode-implicit")
var render = require("gcode-render")

function implicitwrapper(x,y,z)
{
	var model = pmc(x,y,z,lines, imroad, layers);
	return model;
}

//get values entered into form
var box = JSON.parse(localStorage.box)
var center = JSON.parse(localStorage.cent)
var resolution = JSON.parse(localStorage.res)
var fileContents = localStorage.fileContents


var states = gc(fileContents)
var lines = sl(states)
var layers = lines2layers(lines)

var mymesh = render(implicitwrapper, resolution, box, center)

//display the mesh
var shell = require("mesh-viewer")()
var mesh
shell.on("viewer-init", function() {
  mesh = shell.createMesh(mymesh)
})

shell.on("gl-render", function() {
  mesh.draw()
})