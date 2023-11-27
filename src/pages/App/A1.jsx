import useUserId from './userUserId';

export default function A1() {
    const userId = useUserId();
  
    return (
      <div>
        userId：
        {userId || 'null'}
      </div>
    );
  }
