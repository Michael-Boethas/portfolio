import { useEffect, useRef } from "react";

interface IUseBouncingAnimationProps {
    targetRef: React.RefObject<HTMLElement | null>;
    targetSize: number;
    containerSize: { width: number; height: number };
    initialCoordinates: { x: number; y: number };
    minVel: number;
    maxVel: number;
    start: boolean;
}

/**
 * Hook to animate a DOM element bouncing inside a container.
 * Expects setting absolute positioning through the calculated CSS custom properties:
 * --> position: absolute;
 * --> left: var(--position-left); top: var(--position-top);
 * Uses requestAnimationFrame for smooth motion and refs for mutable state without re-renders 
 */
export function useBouncingAnimation({
    targetRef, // Ref of the Element to animate
    targetSize, // Size of the Element wrapper for calculations
    containerSize, // Size of the container to animate in 
    initialCoordinates, // Initial top/left coordinates of the wrapper 
    minVel, // Pixels per seconds
    maxVel, // ...
    start, // Boolean switch
}: IUseBouncingAnimationProps) {
    // Storing coordinates, velocity and previous timestamp in refs so they persist between frames without re-renders
    const coordinatesRef = useRef({ ...initialCoordinates });
    const velRef = useRef({
        x: randomVelocity(minVel, maxVel),
        y: randomVelocity(minVel, maxVel),
    });
    const prevTimeRef = useRef<number | null>(null); // for time increment calculation

    // Updating initial coordinates in case the container size changes before animation starts
    useEffect(() => {
        if (!start) {
            coordinatesRef.current = { ...initialCoordinates };
        }
    }, [initialCoordinates]);

    // useEffect handles changes in parameters and requestAnimationFrame cleanup
    useEffect(() => {
        if (!targetRef.current || !start) return;
        const target = targetRef.current;
        let rafId: number;

        // RequestAnimationFrame loop
        const animate = (time: number) => {
            // Setup delta-time for smooth motion
            if (!prevTimeRef.current) prevTimeRef.current = time;
            const delta = (time - prevTimeRef.current) / 1000; // seconds
            prevTimeRef.current = time;

            // Calculate bounds dynamically
            const maxX = containerSize.width - targetSize;
            const maxY = containerSize.height - targetSize;

            // Calulate new coordinates
            let newX = coordinatesRef.current.x + velRef.current.x * delta;
            let newY = coordinatesRef.current.y + velRef.current.y * delta;

            // Bounce if a bound is reached
            ({ pos: newX, vel: velRef.current.x } = bounceOnEdge(newX, velRef.current.x, 0, maxX));
            ({ pos: newY, vel: velRef.current.y } = bounceOnEdge(newY, velRef.current.y, 0, maxY));

            // Update coordinates and CSS custom properties for animation
            coordinatesRef.current = { x: newX, y: newY };
            target.style.setProperty("--position-left", `${newX}px`);
            target.style.setProperty("--position-top", `${newY}px`);

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        // Cleanup to avoid memory leaks from rogue animations
        return () => cancelAnimationFrame(rafId);
    }, [targetRef, targetSize, containerSize, start, initialCoordinates]);

    return coordinatesRef;
}

// Randomise velocity within [min, max], random direction
function randomVelocity(min: number, max: number) {
    return (Math.random() * (max - min) + min) * (Math.random() > 0.5 ? 1 : -1);
}

// Invert velocity if new position crosses container bounds (simulates elastic collision)
function bounceOnEdge(pos: number, vel: number, min: number, max: number) {
    if (pos <= min) {
        return { pos: min, vel: -vel };
    } else if (pos >= max) {
        return { pos: max, vel: -vel };
    }
    return { pos, vel };
}
