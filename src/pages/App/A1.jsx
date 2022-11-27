import useUserId from './userUserId';

function A1() {
  const userId = useUserId();

  return (
    <div>
      userId：
      {userId || 'null'}
    </div>
  );
}

export default A1;
