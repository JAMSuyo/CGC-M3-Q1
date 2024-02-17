import * as THREE from './three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 18;
camera.position.y = 10;
scene.background = new THREE.Color( 0x727272 );

//ambient light
const ambientLight = new THREE.AmbientLight( 0x404040 ); 
scene.add( ambientLight );

//hemisphere light
const light = new THREE.HemisphereLight( 0xfbfbf9, 0x080820, 1 );
scene.add( light );

//lightbulb
const pointLight = new THREE.PointLight( 0xf5ebd1, 200, 100 );
pointLight.position.set( 0, 30, 0 );
scene.add( pointLight );

pointLight.position.y = 23;



//floor plane
const floorTexture = new THREE.TextureLoader().load( 'assets/textures/floor.jpg' );
const floorGeometry = new THREE.PlaneGeometry( 45, 25 );
const floorMaterial = new THREE.MeshLambertMaterial( {map: floorTexture, side: THREE.DoubleSide} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );

floor.rotation.x = 90;


//back wall
const wallTexture = new THREE.TextureLoader().load( 'assets/textures/wallpaper.jpg' );
const backWallGeometry = new THREE.PlaneGeometry( 45, 25 );
const backWallMaterial = new THREE.MeshPhongMaterial( {map: wallTexture, side: THREE.DoubleSide} );
const backWall = new THREE.Mesh( backWallGeometry, backWallMaterial );
scene.add( backWall );

backWall.position.z = -11;
backWall.position.y = 18;


//countertop
const countertopTexture = new THREE.TextureLoader().load( 'assets/textures/countertop.jpg' );
const tableTopGeometry = new THREE.BoxGeometry( 30, 1, 4 );
const tableTopMaterial = new THREE.MeshLambertMaterial( {map: countertopTexture} );
const tableTop = new THREE.Mesh( tableTopGeometry, tableTopMaterial );
scene.add( tableTop );

tableTop.position.set( -7, 10, -9 );
tableTop.rotation.x = 60;

const countertopGeometry = new THREE.BoxGeometry( 4, 1, 20 );
const countertopMaterial = new THREE.MeshLambertMaterial( {map: countertopTexture} );
const countertop = new THREE.Mesh( countertopGeometry, countertopMaterial );
scene.add( countertop );

countertop.position.set( -20, 8.7, -5 );
countertop.rotation.x = 60;

//cabinet
const cabinetGeometry = new THREE.BoxGeometry( 30, 5, 4 );
const cabinetMaterial = new THREE.MeshLambertMaterial( {color: 0x3e3e3e} );
const cabinet = new THREE.Mesh( cabinetGeometry, cabinetMaterial );
scene.add( cabinet );

cabinet.rotation.x = 60;
cabinet.position.set( -7.3, 7, -9 );

const cabinet1Geometry = new THREE.BoxGeometry( 4, 6, 19 );
const cabinet1Material = new THREE.MeshLambertMaterial( {color: 0x3e3e3e} );
const cabinet1 = new THREE.Mesh( cabinet1Geometry, cabinet1Material );
scene.add( cabinet1 );

cabinet1.rotation.x = 60;
cabinet1.position.set( -19.5, 5, -5 );

//handles
const handle1Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle1Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle1 = new THREE.Mesh( handle1Geometry, handle1Material );
scene.add( handle1 );

handle1.position.set( -17, 3, 2 );

const handle2Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle2Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle2 = new THREE.Mesh( handle2Geometry, handle2Material );
scene.add( handle2 );

handle2.position.set( -17, 3.5, 0.5 );

const handle3Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle3Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle3 = new THREE.Mesh( handle3Geometry, handle3Material );
scene.add( handle3 );

handle3.position.set( -17, 4.8, -3 );

const handle4Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle4Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle4 = new THREE.Mesh( handle4Geometry, handle4Material );
scene.add( handle4 );

handle4.position.set( -17, 5.3, -4 );

const handle5Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle5Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle5 = new THREE.Mesh( handle5Geometry, handle5Material );
scene.add( handle5 );

handle5.position.set( -12, 7, -5 );

const handle6Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle6Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle6 = new THREE.Mesh( handle6Geometry, handle6Material );
scene.add( handle6 );

handle6.position.set( -11, 7, -5 );

const handle7Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle7Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle7 = new THREE.Mesh( handle7Geometry, handle7Material );
scene.add( handle7 );

handle7.position.set( -4, 7, -5 );

const handle8Geometry = new THREE.CapsuleGeometry( 0.2, 0.2 );
const handle8Material = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const handle8 = new THREE.Mesh( handle8Geometry, handle8Material );
scene.add( handle8 );

handle8.position.set( -3, 7, -5 );



//table
const tableGeometry = new THREE.BoxGeometry( 22, 1, 6 );
const tableMaterial = new THREE.MeshLambertMaterial( {color: 0xf3f2ee} );
const table = new THREE.Mesh( tableGeometry, tableMaterial );
scene.add( table );

table.rotation.x = 60;
table.position.y = 5;

const tableLegGeometry = new THREE.CylinderGeometry( 1, 0.5, 6 );
const tableLegMaterial = new THREE.MeshLambertMaterial( {color: 0xf3f2ee} );
const tableLeg = new THREE.Mesh( tableLegGeometry, tableLegMaterial );
scene.add( tableLeg );

const tableBaseGeometry = new THREE.CylinderGeometry( 2, 3, 0.5, 32 );
const tableBaseMaterial = new THREE.MeshBasicMaterial( {color: 0x525252} );
const tableBase = new THREE.Mesh( tableBaseGeometry, tableBaseMaterial );
scene.add( tableBase );

tableBase.rotation.y = 60;



//lightbulb
const coneGeometry = new THREE.ConeGeometry( 5, 1 );
const coneMaterial = new THREE.MeshLambertMaterial( {color: 0xd6d6d6} );
const cone = new THREE.Mesh( coneGeometry, coneMaterial );
scene.add( cone );

cone.rotation.x = 60;
cone.position.y = 23;

const lightbulbGeometry = new THREE.SphereGeometry();
const lightbulbMaterial = new THREE.MeshBasicMaterial( {color: 0xf3f2ee} );
const lightbulb = new THREE.Mesh( lightbulbGeometry, lightbulbMaterial );
scene.add( lightbulb );

lightbulb.position.y = 23;



//window
const frameGeometry = new THREE.BoxGeometry( 8, 15, 1 );
const frameMaterial = new THREE.MeshLambertMaterial( {color: 0xefefef} );
const frame = new THREE.Mesh( frameGeometry, frameMaterial );
scene.add( frame );

frame.position.set( 13, 13, -7 );

const doorknobGeometry = new THREE.SphereGeometry( 0.5, 0.5 ); 
const doorknobMaterial = new THREE.MeshPhongMaterial( {color: 0xcaa952} );
const doorknob = new THREE.Mesh( doorknobGeometry, doorknobMaterial );
scene.add( doorknob )

doorknob.position.set( 10, 13, -6 );


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    //cube.rotation.x += 0.5;
    //cube.rotation.y += 0.5;

    
}

animate();