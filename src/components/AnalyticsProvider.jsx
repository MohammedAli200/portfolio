import React, { createContext, useContext, useEffect } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => useContext(AnalyticsContext);

export const AnalyticsProvider = ({ children }) => {
  const trackEvent = (name) => {
    const data = JSON.parse(localStorage.getItem('portfolio-analytics') || '{"visits": [], "clicks": {}}');
    
    if (name === 'visit') {
      data.visits.push({ timestamp: new Date().toISOString() });
    } else {
      data.clicks[name] = (data.clicks[name] || 0) + 1;
    }
    
    localStorage.setItem('portfolio-analytics', JSON.stringify(data));
  };

  useEffect(() => {
    // Track page visit on mount
    trackEvent('visit');

    // Global click listener for generic tracking
    const handleGlobalClick = (e) => {
      const target = e.target.closest('button, a');
      if (target) {
        const name = target.innerText || target.getAttribute('aria-label') || 'unnamed-action';
        trackEvent(name.trim().toLowerCase().substring(0, 20));
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
