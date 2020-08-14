import React from 'react';

const ae = (emoji, label) => (
    <span className="emoji" role="img" aria-label={label}>{emoji}</span>
);

export default ae;
