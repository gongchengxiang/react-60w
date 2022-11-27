import {useState} from 'react';

export default function useStore() {
  const [store, setStore] = useState({userId: null});
  return [store, setStore];
}
