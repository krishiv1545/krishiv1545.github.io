let targetRotationX = 0;
const maxTiltX = 0.12;
const maxTiltY = 0.08;
let targetRotationY = 0;
const initialXRotation = -Math.PI / 2.4; // Store the initial rotation

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("moonCanvas"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 5;

const light = new THREE.DirectionalLight(0xf6f1d5, 1); //0xf6f1d5 0xff00f2
light.position.set(-5, 11.495, -4.91).normalize(); //5,7.5,-10
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

//HELPERSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs
//const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper);
//const lightHelper = new THREE.DirectionalLightHelper(light, 500);
//scene.add(lightHelper);

const loader = new THREE.OBJLoader();
loader.load(
  '02.obj',
  function (object) {
    loadedObject = object;

    scene.add(loadedObject);
    loadedObject.position.y = 0;
    loadedObject.scale.set(0.18, 0.18, 0.18);
    loadedObject.rotation.x = initialXRotation; 
  },

  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error("An error occurred while loading the OBJ file:", error);
  }
);

// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.update();
// controls.enabled = false;

// Move the mousemove event listener outside the animate loop
window.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    targetRotationX = mouseX * maxTiltX;
    targetRotationY = mouseY * maxTiltY;
  });
  
  function animate() {
    requestAnimationFrame(animate);
  
    if (loadedObject) {
      // Keep the constant z-axis rotation
      loadedObject.rotation.z += 1 / 1000;
      
      // Smoothly update y-rotation based on mouse position
      loadedObject.rotation.y += (targetRotationX - loadedObject.rotation.y) * 0.05;
      
      // For x-rotation, apply the mouse tilt relative to the initial rotation
      const targetX = initialXRotation + targetRotationY;
      loadedObject.rotation.x += (targetX - loadedObject.rotation.x) * 0.05;
    }
    
    renderer.render(scene, camera);
  }
  
  animate();
