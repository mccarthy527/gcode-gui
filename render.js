var isosurface = require("isosurface")

function implicitwrapper(x,y,z)
{
	return Math.max(x*x+y*y+z*z-50,-2-z, z-4);
}


var bounds = [[-11,-11,0.2], [11,11,11]];				//NEED TO FIX BUG WHERE IF BOUND STARTS AT 0, bottom face is missing!
var resolution = [100,100,256];
var mymesh = isosurface.surfaceNets(resolution, implicitwrapper, bounds )
var shell = require("mesh-viewer")()
var mesh

shell.on("viewer-init", function() {
  mesh = shell.createMesh(mymesh)
})

shell.on("gl-render", function() {
  mesh.draw()
})