
//Scene
console.log("hello Three.js");
const scene = new THREE.Scene();

//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//sizes
const sizes = {
    width:800,
    height:600
}

//camera
const camera = new THREE.perpectivecamera(75, sizes.width / sizes.height)
scene.add(camera)

// renderer
const renderer = new THREE.webGLRenderer ({
console.log(canvas)
    const canvas = document.querySelector('.webgl')   
canvas: canvas

})