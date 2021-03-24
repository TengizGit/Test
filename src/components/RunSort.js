export function runSelectionSort(arr, ascend, property) {
<<<<<<< HEAD
  //  console.log("Selection sort is running");
=======
>>>>>>> 629f37adc2389dfe74eb8e08442d9efbb93bacef

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