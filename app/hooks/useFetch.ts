import {useState} from "react";

export function useFetch (callback: Function) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const fetching = async () => {
        try {
            await callback()
        } catch (e: any) {
            setError(`${e.message}`)
        } finally {
            setIsLoading(false);
        }
    }

    return {res: fetching, status: isLoading, err: error};
}