const a = 1;
if (a > 0) {
  const getM = async () => {
    const M = await import('./esModuleTest');
    console.log(M);
  };
  setTimeout(() => {
    getM();
  }, 3000);
}
