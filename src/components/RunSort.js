export function runSelectionSort(arr, ascend, property) {

    if (arr.length <= 1) {
        return arr;
    }

    const traverse = (n) => {
        let smallest = n;

        for (let i = n; i < arr.length; i += 1) {
            if (arr[i][property] < arr[smallest][property]) {
                smallest = i;
            }
        }

        if (smallest !== n) {
            const swap = arr[n];
            arr[n] = arr[smallest];
            arr[smallest] = swap;
        }

        if (n < arr.length - 1) {
            traverse(n + 1);
        }
    };

    traverse(0);
    return ascend ? arr : arr.reverse();
}