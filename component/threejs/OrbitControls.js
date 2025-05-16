import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// Renderer
const canvas = document.querySelector('#OrbitControls');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});
const screenWidth = 384;
const screenHeight = 280;

renderer.setSize( screenWidth, screenHeight );
//renderer.setPixelRatio( window.devicePixelRatio );
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.shadowMap.enabled = true;

// Scene
const scene = new THREE.Scene();
//scene.background = new THREE.Color('white');

// Camera
const camera = new THREE.PerspectiveCamera( 45, screenWidth / screenHeight, 0.1, 1000 );
//camera.position.set(0, 2, 6);
camera.position.set(0, 4, 5.5);
camera.lookAt(0, 1.8, 0);
scene.add(camera);

// Light
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const directionalLightL = new THREE.DirectionalLight('white', 3);
directionalLightL.position.set(-3, 5, 1);
directionalLightL.castShadow = true;
scene.add(directionalLightL);

const controls = new OrbitControls(camera, renderer.domElement);


// gltf loader
const gltfLoader = new GLTFLoader();
gltfLoader.load(
  '../3dmodels/teddy_bear_join.glb',
  gltf => {
    const mesh = gltf.scene.children[0];
    mesh.position.set(0, 0, 0);
    mesh.castShadow = true;
    scene.add(mesh);
  }
);

const floorMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 5),
  new THREE.MeshLambertMaterial({
    color: 'gray',
    side: THREE.DoubleSide
  })
);
floorMesh.rotation.x = -Math.PI/2;
floorMesh.position.set(0, -2.36, 0);
floorMesh.receiveShadow = true;
scene.add(floorMesh);


// Draw
const clock = new THREE.Clock();

function draw() {
  const delta = clock.getDelta();
  renderer.render(scene, camera);
  renderer.setAnimationLoop(draw);
}

function setSize() {
  camera.aspect = screenWidth / screenHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( screenWidth, screenHeight );
  renderer.render(scene, camera);
}

// Event
//window.addEventListener('resize', setSize);

draw();

function setLayout() {
  camera.aspect = screenWidth / screenHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( screenWidth, screenHeight );
}

window.addEventListener('resize', setLayout);

