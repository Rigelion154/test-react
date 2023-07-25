export function getPagesCount(total: number, limit: number) {
    return Math.ceil(total / limit);
}