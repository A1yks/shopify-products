import calcRatio from '@/utils/calcRatio';
import { useRef, useEffect } from 'react';

function useCanvas(imageSrc: string) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            const image = new Image();
            image.src = imageSrc;

            image.onload = () => {
                const { width, height, xCenter, yCenter } = calcRatio(image.width, image.height, canvas.width, canvas.height);

                ctx.drawImage(image, 0, 0, image.width, image.height, xCenter, yCenter, width, height);
            };
        }
    }, [imageSrc]);

    return { canvasRef };
}

export default useCanvas;
