import { useEffect, useRef } from 'react';

const Calendly = () => {
  const isScriptLoaded = useRef(false);
  const isWidgetInitialized = useRef(false);

  useEffect(() => {
    const loadCalendlyScript = () => {
      if (!isScriptLoaded.current) {
        // Create the script element to load the Calendly widget
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          isScriptLoaded.current = true;
          if (window.Calendly && !isWidgetInitialized.current) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/drmohamed990/15min?hide_gdpr_banner=1',
              parentElement: document.getElementById('calendly-widget'),
              prefill: {},
              utm: {},
            });
            isWidgetInitialized.current = true;
          }
        };
        document.body.appendChild(script);
      } else if (window.Calendly && !isWidgetInitialized.current) {
        // Initialize the widget if the script is already loaded
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/drmohamed990/15min?hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-widget'),
          prefill: {},
          utm: {},
        });
        isWidgetInitialized.current = true;
      }
    };

    loadCalendlyScript();

    // Cleanup when the component unmounts
    return () => {};
  }, []);

  return (
    <div id="calendly-widget" style={{ minWidth: '320px', height: '500px' }} />
  );
};

export default Calendly;
