export function runSelectionSort(arr, ascend, property) {
    
const newArr = [...arr]
    if (newArr.length <= 1) {
        return newArr;
    }

    const traverse = (n) => {
        let smallest = n;

        for (let i = n; i < newArr.length; i += 1) {
            if (newArr[i][property] < newArr[smallest][property]) {
                smallest = i;
            }
        }

        if (smallest !== n) {
            const swap = newArr[n];
            newArr[n] = newArr[smallest];
            newArr[smallest] = swap;
        }

        if (n < newArr.length - 1) {
            traverse(n + 1);
        }
    };

    traverse(0);
    return ascend ? newArr : newArr.reverse();
}