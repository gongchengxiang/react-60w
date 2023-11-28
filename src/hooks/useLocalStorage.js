import { useEffect, useState } from 'react'

export default function useLocalStorage(defalut = {}) {
    const [obj, setObj] = useState(defalut)

    useEffect(() => {
        const localMap = {}
        Object.keys(localStorage).forEach((key) => {
            localMap[key] = localStorage.getItem(key)
        })
        const newMap = {
            ...localMap,
            ...obj,
            _init: true,
        }
        Object.keys(newMap).forEach((key) => {
            if (key !== '_init')
                localStorage.setItem(key, newMap[key] || '')
        })
    // setObj(newMap);
    }, [obj])

    const setItem = (key, value) => {
        localStorage.setItem(key, value)
        setObj({
            ...obj,
            ...{ [key]: value },
        })
    }
    return [obj, setItem]
}

// const [obj, setValue] = useLocalStorage(defalut);
