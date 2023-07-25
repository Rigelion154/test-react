import {useMemo} from "react";

export const usePagination = (totalPages: number) => {
    const totalPagesArray = useMemo(()=> {
        const result = [];
        for (let i = 1; i <= totalPages; i++) {
            result.push(i);
        }
        return result;
    }, [totalPages])

    return totalPagesArray;
}