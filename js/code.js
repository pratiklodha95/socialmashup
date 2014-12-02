
var camera;
var scene;
var renderer;
var mesh;
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
	var light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 0, 1, 1 ).normalize();
	scene.add(light);
	var geometry = new THREE.CubeGeometry(20, 10, 10);
	var material = new THREE.MeshPhongMaterial( {  map: THREE.ImageUtils.loadTexture('images/crate.jpg') } );
	mesh =createbricks(20,geometry,material);
	createwall(20,mesh)
	renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    render();
}
function animate() {
	// mesh.position.z += .05;
	render();
	requestAnimationFrame( animate );
}
function render() {
	renderer.render( scene, camera );
}
function createbricks(number,geometry,material){
	var tmesh=[];
	for(var i=0;i<number;i++)
	{
		tmesh[i] = new THREE.Mesh(geometry, material);
	}
	return tmesh;
}
function createwall(number,mesh){
	for(var i=0;i<number;i++){
		var x=((i%5)*20)-50;
		var y=(Math.floor(i/5)*10)-15;
		if(Math.floor(i/5)%2==0)x=x+10;
		mesh[i].position.z = -50;
		mesh[i].position.x =x; 
		mesh[i].position.y =y;
		scene.add( mesh[i] );
	}
}

init();
animate();