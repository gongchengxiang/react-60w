async function initUserId() {
    const userId = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(999);
        }, 3000);
    });
    return userId;
}

export default initUserId;
