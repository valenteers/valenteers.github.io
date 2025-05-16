import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#Rabbit'),
  antialias: true
});
const screenWidth = 384;
const screenHeight = 280;

renderer.setSize( screenWidth, screenHeight );
renderer.setPixelRatio( window.devicePixelRatio );

// Scene
const scene = new THREE.Scene();
//scene.background = new THREE.Color('white');

// Camera
const camera = new THREE.PerspectiveCamera( 45, screenWidth / screenHeight, 0.1, 1000 );
camera.position.set(0, 4, 6);
camera.lookAt(0, 1.8, 0);
scene.add(camera);

// Light
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const directionalLightL = new THREE.DirectionalLight('white', 1);
directionalLightL.position.x = 5;
directionalLightL.position.z = 5;
scene.add(directionalLightL);

// gltf loader
const loader = new GLTFLoader();
loader.load('../3dmodels/rabbit_join.glb', (gltf) => {
   const mesh = gltf.scene;
   mesh.position.set(0, 1.05, -1);
   scene.add(mesh);
});

// Draw animate

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera ); 
}

animate();

function setLayout() {
  camera.aspect = screenWidth / screenHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( screenWidth, screenHeight );
}

window.addEventListener('resize', setLayout);