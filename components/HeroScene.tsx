'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const { width, height } = useMemo(() => ({ width: 1280, height: 900 }), []);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.4, 0.3, 220, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#38bdf8'),
      emissive: new THREE.Color('#0f172a'),
      roughness: 0.2,
      metalness: 0.7,
      transmission: 0.25,
      thickness: 0.7,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const ambient = new THREE.AmbientLight(0x88ccff, 0.8);
    const point = new THREE.PointLight(0xffffff, 24, 100);
    point.position.set(3, 3, 5);
    scene.add(ambient, point);

    const mouse = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const time = clock.getElapsedTime();
      torus.rotation.x = time * 0.35;
      torus.rotation.y = time * 0.5 + mouse.x * 0.2;
      torus.position.y = Math.sin(time * 0.8) * 0.18 + mouse.y * 0.15;
      camera.position.x = mouse.x * 0.35;
      camera.position.y = mouse.y * 0.2;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
      mountRef.current?.replaceChildren();
    };
  }, [width, height]);

  return <div ref={mountRef} className="h-full w-full opacity-90" />;
}
