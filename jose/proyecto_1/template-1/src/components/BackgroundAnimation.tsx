import { useEffect, useRef } from 'react';
import * as THREE from 'three'

export const BackgroundAnimation = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);

        mountRef.current.appendChild(renderer.domElement);

        // =====================================
        // PARTICLES
        // =====================================

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            const radius = 15 + Math.random() * 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);

            posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
            posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            posArray[i + 2] = radius * Math.cos(phi);
        }

        particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(posArray, 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.08,
            color: 0xffffff,
            transparent: true,
            opacity: 0.7,
        });

        const particlesMesh = new THREE.Points(
            particlesGeometry,
            particlesMaterial
        );

        scene.add(particlesMesh);

        // =====================================
        // WIREFRAME SPHERE
        // =====================================

        const sphereGeometry = new THREE.IcosahedronGeometry(15, 1);

        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x4f46e5,
            wireframe: true,
            transparent: true,
            opacity: 0.2,
        });

        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        scene.add(sphere);

        // =====================================
        // FLOATING CUBES
        // =====================================

        const cubesGroup = new THREE.Group();

        for (let i = 0; i < 20; i++) {
            const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

            const cubeMaterial = new THREE.MeshBasicMaterial({
                color: 0x6366f1,
                wireframe: true,
            });

            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

            const radius = 20 + Math.random() * 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            cube.position.set(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            );

            cubesGroup.add(cube);
        }

        scene.add(cubesGroup);

        // =====================================
        // MOUSE INTERACTION
        // =====================================

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // =====================================
        // ANIMATION LOOP
        // =====================================

        const animate = () => {
            requestAnimationFrame(animate);

            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += mouseY * 0.0003;

            sphere.rotation.y -= 0.0015;
            sphere.rotation.x += 0.0005;

            cubesGroup.rotation.y += 0.002;
            cubesGroup.rotation.z += 0.001;

            renderer.render(scene, camera);
        };

        animate();

        // =====================================
        // RESIZE
        // =====================================

        const handleResize = () => {
            if (!mountRef.current) return;

            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);

            renderer.dispose();

            if (mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40"
        />
    );
};