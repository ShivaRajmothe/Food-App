import React from 'react';

import { ReactNode } from 'react';

export default function MealsLayout ({children}: {children: ReactNode}) {
    return (
        <div className="meals-layout">
        <p>Meals Layout</p>
            {children}
        </div>
    );
};