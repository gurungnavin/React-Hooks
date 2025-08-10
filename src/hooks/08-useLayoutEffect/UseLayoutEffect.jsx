import React, { useEffect, useLayoutEffect } from 'react';

const LayoutEffectExample = () => {
  useLayoutEffect(() => {
    console.log('✅ useLayoutEffect runs first (before paint)');
  }, []);

  useEffect(() => {
    console.log('🕒 useEffect runs after paint');
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>Open the console and check the order of messages.</p>
    </div>
  );
};

export default LayoutEffectExample;



/*
Example of UseLayoutEffect as restaurant
1. Customer places order → You trigger a React update.
2. Chef receives and confirms order → React builds the virtual DOM (the plan for this update).
3. Chef cooks the food → React updates the real DOM (the actual page elements).
4. Waiter checks the plates and fixes any issues → useLayoutEffect runs (final DOM tweaks before showing).

No.5 is Dom painting:
5. Waiter serves the food → Browser paints the screen (user sees the page: UI).
6. Manager asks for feedback → useEffect runs (side effects after render: UX).

*/