import { useEffect, useRef, useState } from 'react';

const MeetingVideo = () => {
  const videoRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWistiaScripts = async () => {
      try {
        const playerScriptSrc = 'https://fast.wistia.com/player.js';
        const embedScriptSrc = 'https://fast.wistia.com/embed/v8g9mwx7d6.js';

        // Check if the Wistia player script is already loaded
        const existingPlayerScript = document.querySelector(
          `script[src="${playerScriptSrc}"]`
        );
        if (!existingPlayerScript) {
          const playerScript = document.createElement('script');
          playerScript.src = playerScriptSrc;
          playerScript.async = true;
          playerScript.onload = () => {
            console.log('Player script loaded successfully');
          };
          playerScript.onerror = (err) => {
            console.error('Failed to load player script:', err);
            setError('Failed to load Wistia player script');
          };
          document.body.appendChild(playerScript);
        }

        // Check if the Wistia embed script is already loaded
        const existingEmbedScript = document.querySelector(
          `script[src="${embedScriptSrc}"]`
        );
        if (!existingEmbedScript) {
          const embedScript = document.createElement('script');
          embedScript.src = embedScriptSrc;
          embedScript.async = true;
          embedScript.type = 'module'; // Explicitly set as a module for ES syntax
          embedScript.onload = () => {
            console.log('Embed script loaded successfully');
            setScriptsLoaded(true); // Scripts loaded, safe to render player
          };
          embedScript.onerror = (err) => {
            console.error('Failed to load embed script:', err);
            setError('Failed to load Wistia embed script');
          };
          document.body.appendChild(embedScript);
        }
      } catch (err) {
        console.error('Error loading Wistia scripts:', err);
        setError('Error loading Wistia scripts');
      }
    };

    loadWistiaScripts();

    return () => {
      // Clean up scripts and styles on unmount
      const scripts = document.querySelectorAll(
        'script[src^="https://fast.wistia.com"]'
      );
      scripts.forEach((script) => script.remove());
      const style = document.querySelector('style');
      if (style) style.remove();
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Wistia player will be rendered only when scripts are loaded */}
      {scriptsLoaded ? (
        <wistia-player
          media-id="v8g9mwx7d6"
          ref={videoRef}
          autoPlay={false} // Disable auto-play
        ></wistia-player>
      ) : (
        <div>Loading video...</div>
      )}
    </div>
  );
};

export default MeetingVideo;
