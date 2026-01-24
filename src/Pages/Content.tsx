import { useState } from 'react';

interface ContentProps {
  name: string;
  text: string;
}

function Content(props:ContentProps) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </>
    );
}

export default Content;
