//import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.min.js";
import * as THREE from 'three';

const scene = new THREE.Scene();
const screenWidth = 384;
const screenHeight = 280;


const camera = new THREE.PerspectiveCamera( 75, screenWidth / screenHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#Polyhedron'),
});

renderer.setPixelRatio( window.devicePixelRatio );
//renderer.setSize( window.innerWidth / 3, window.innerHeight / 3 );
renderer.setSize( screenWidth, screenHeight );
camera.position.setZ(15);

renderer.render( scene, camera );

const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0x00FF00, wireframe: true } );
const polyhedron = new THREE.Mesh( geometry, material );

scene.add(polyhedron)

renderer.render( scene, camera );

function animate() {
  requestAnimationFrame( animate );
  polyhedron.rotation.x += 0.01;
  polyhedron.rotation.y += 0.005;
  polyhedron.rotation.z += 0.01;
  renderer.render( scene, camera ); 
}

animate()