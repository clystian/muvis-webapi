export function orderBy(selector: (x: any) => any) {
    return (a: string, b: string): number => {
        let result = 0;
        if (selector(a) > selector(b)) {
            result = 1;
        }
        else if (selector(a) < selector(b)) {
            result = -1;
        }
        return result;
    }
}