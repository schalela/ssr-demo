import React, { useState, useEffect } from 'react';
import { LeagueList } from '@sam/ssr-demo-app';

export default () => {
  const [initialLeague, setInitialLeague] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialLeague]);

  function handleScroll () {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setInitialLeague(initialLeague + 15);
  }

  return <LeagueList initialLeague={initialLeague} />;
};
