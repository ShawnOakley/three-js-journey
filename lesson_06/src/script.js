import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
scene.add(mesh)

/**
 * Objects
 */
 const group = new THREE.Group()
 group.scale.y = 2
 group.rotation.y = 0.2
 scene.add(group)
 
 const cube1 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xff0000 })
 )
 cube1.position.x = - 1.5
 group.add(cube1)
 
 const cube2 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xff0000 })
 )
 cube2.position.x = 0
 group.add(cube2)
 
 const cube3 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xff0000 })
 )
 cube3.position.x = 1.5
 group.add(cube3)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.lookAt(new THREE.Vector3(0, - 1, 0))

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

/**
 * Animate
 */
 const clock = new THREE.Clock()
 gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
 
const tick =  () => {
    // Time
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.y = Math.sin(elapsedTime)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next 
    window.requestAnimationFrame(tick)
}

tick()
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)