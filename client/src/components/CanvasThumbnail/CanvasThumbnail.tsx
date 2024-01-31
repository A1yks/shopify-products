import styles from './CanvasThumbnail.module.css';
import useCanvas from './hooks/useCanvas';

export type CanvasThumbnailProps = {
    source: string;
};

function CanvasThumbnail({ source }: CanvasThumbnailProps) {
    const { canvasRef } = useCanvas(source);

    return (
        <div className={styles.thumbnail}>
            <canvas className={styles.canvas} ref={canvasRef} width="60px" height="60px" />
        </div>
    );
}

export default CanvasThumbnail;
