import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

function scaleToFit (container) {
    var rect = container.getBoundingClientRect();
    const node = document.querySelector('canvas')
    node.width = rect.width;
    node.height = rect.height;
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const renderer = new THREE.WebGLRenderer({alpha: true, preserveDrawingBuffer: true});
renderer.setSize( window.innerWidth, window.innerHeight );
const container = document.querySelector('#boat_spin')
document.getElementById("boat_spin").appendChild( renderer.domElement );

setTimeout(() => {
    scaleToFit(container)
}, 100)

const loader = new STLLoader();
loader.load(
    "assets/barco_cyberpank.stl",
    function(geom){
        const wireframe = new THREE.WireframeGeometry(geom);
        const line = new THREE.LineSegments( wireframe )
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparency = true;
        scene.add(line)
        function animate() {
            requestAnimationFrame( animate );

            line.rotation.x += 0.01;
            line.rotation.y += 0.01;

            renderer.render( scene, camera );
        }

        animate();

    }
)


camera.position.z = 5;


