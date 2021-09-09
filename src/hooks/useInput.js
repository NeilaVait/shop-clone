import { useState } from 'react';
export default function useInput() {
  const [inputVal, setInputVal] = useState('');

  function changeHandler(e) {
    // console.log('e', e);
    // if (e.target?.value) {
    setInputVal(e.target.value);
    // }
  }
  return [inputVal, changeHandler];
}
