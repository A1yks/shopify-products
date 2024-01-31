function calcRatio(imgWidth: number, imgHeight: number, canvasWidth: number, canvasHeight: number) {
    const ratio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const width = imgWidth * ratio;
    const height = imgHeight * ratio;
    const xCenter = (canvasWidth - width) / 2;
    const yCenter = (canvasHeight - height) / 2;

    return { width, height, xCenter, yCenter };
}

export default calcRatio;
