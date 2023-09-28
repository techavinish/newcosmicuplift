import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  /* Add your styling here */
`;

// const Loader = () => (
//   <div className="loader">
//     Loading... {/* You can customize this loader */}
//   </div>
// );

const CalendlyWidget = () => {
  const [, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Preload the Calendly script
    const preloadScript = document.createElement('link');
    preloadScript.rel = 'preload';
    preloadScript.as = 'script';
    preloadScript.href = 'https://assets.calendly.com/assets/external/widget.js';
    preloadScript.onload = () => {
      // When the preload is complete, add the script asynchronously
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setCalendlyLoaded(true); // Set calendlyLoaded to true when the script is loaded
      };
      document.body.appendChild(script);
    };
    document.head.appendChild(preloadScript);
  }, []);

  useEffect(() => {
    // On component unmount, remove the Calendly script
    return () => {
      const script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Styles>
      <Head>
        <title>Online Booking</title>
      </Head>
      {/* Rest of your page content */}
      <div>
        {/* Always render the Calendly widget */}
        <div className="calendly-inline-widget" data-url="https://calendly.com/cosmicuplift?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
      </div>
    </Styles>
  );
};

export default CalendlyWidget;
