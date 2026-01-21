
'use client';

import { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

// 1. Improved Helper: Robustly extract ID from any YouTube URL
function getYouTubeId(url: string) {
  if (!url) return null;
  // Handles standard, short, embed, and weird formats better than the previous regex
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function YouTubePlayer({ src }: { src: string }) {
    const videoId = getYouTubeId(src);

    // If no ID found, we can't render the iframe effectively
    if (!videoId) return <div className="p-4 text-red-500">Invalid Video URL</div>;

    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

    return (
        <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
}

function NativeVideoPlayer({ src, className }: { src: string, className?: string }) {
    return (
        <video controls preload="metadata" className={`w-full h-full object-cover ${className}`}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export const LazyVideo = ({ src }: { src: string }) => {
    const [load, setLoad] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLoad(true);
                observer.disconnect();
            }
        }, {
            rootMargin: '200px',
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const isYoutube = src.includes('youtube.com') || src.includes('youtu.be');

    return (
        // Remove fixed aspect-ratio, allow parent to control it.
        <div 
            ref={ref} 
            className="relative w-full h-full min-h-[200px] rounded-lg overflow-hidden bg-muted"
        >
            {load ? (
                isYoutube ? <YouTubePlayer src={src} /> : <NativeVideoPlayer src={src} />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                </div>
            )}
        </div>
    );
};
