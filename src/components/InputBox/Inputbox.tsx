import React, { FC } from 'react';

type InputBoxProps = { name: string };

const InputBox: FC<InputBoxProps> = ({ name }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label> : <input type="text" id={name} placeholder={name}/>
    </div>
  );
};

export default InputBox;
