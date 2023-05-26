import * as THREE from 
"https://cdn.skypack.dev/three@0.136.0";
import {OrbitControls} from 
"https://cdn.skypack.dev/three@0.136.0/examples/jsm.controls/OrbitControls";

console.clear();

let scene = new THREE.Scene();
scene.background = new THREE.Color(0x160016);
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(0, 4, 21);
let renderer - new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", event => {
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(innerWidth, innerHeight);
})

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
