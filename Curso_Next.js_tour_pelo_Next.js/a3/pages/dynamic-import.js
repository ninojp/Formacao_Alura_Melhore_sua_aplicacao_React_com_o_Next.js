import dynamic from 'next/dynamic';
import { useState } from 'react';
import YouTubeVideo from '../components/DynamicVideo';

// const YouTubeVideo = dynamic(() => import('../components/DynamicVideo'));

export default function DynamicImportPage() {
    const [isVisible, setVideoStatus] = useState(false);
    return (
        <div>
            <p>
                Mostrar Vídeo
                <input
                    type="checkbox"
                    onChange={() => {
                        setVideoStatus(!isVisible);
                    }}
                />
            </p>
            <div>
                {isVisible && <YouTubeVideo />}
            </div>
            <div>
                <button type='button'
                    onClick={() => {
                        setVideoStatus(!isVisible);
                    }}>Mostrar Video
                </button>
            </div>
        </div>
    )
}
