import { useEffect } from 'react'
import useStore from './useStore'
import initUserId from './initUserId'

export default function useUserId() {
    const [store, setStore] = useStore()

    useEffect(() => {
        let { userId } = store
        const init = async () => {
            console.log(userId)
            if (!userId) {
                userId = await initUserId()
                setStore({ ...store, userId })
            }
        }
        init()
    }, [])

    return store.userId
}
