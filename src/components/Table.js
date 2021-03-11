import React from 'react';
import '../styles/Table.css';

const theadLeftButton = 'ГОД';
const theadRightButton = 'СОБЫТИЕ';
const buttonLeft = 'Добавить';
const buttonRight = 'Удалить';
const tableHeading = 'Биография';
const tableText = 'Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы.';
const tableSecondHeading = 'Таблица с биографией';

const Biography = [
    [1967, "Важное событие"],
    [1973, "Важное событие"],
    [1980, "Важное событие"],
    [1998, "Самое важное событие"],
    [2019, "Очередное важное событие"],
];

class TableBiography extends React.Component {
    data = Biography;
    constructor(props) {
        super(props);
        this.sortByClick = this.sortByClick.bind(this);
        this.state = { sorted: true };
    }

    sortByClick = () => {
        this.setState((state) => ({
            sorted: !this.sorted,
        }));
        if (this.state.sorted) {
            return this.data.reverse();
        }
        return this.data.sort();
    };

    addByClick = () => {
        this.setState((state) => ({
            added: ++this.added,
        }));
        return this.data.push(["Год", "Событие"]);
    };

    removeByClick = () => {
        this.setState((state) => ({
            removed: ++this.removed,
        }));
        if (this.state.sorted) {
            return this.data.pop();
        }
        return this.data.shift();
    };
    render() {
        return (
            <div>
                <table className="Table">
                    <thead>
                        <tr>
                            <th>
                                <button type="button" onClick={this.sortByClick}>
                                    {theadLeftButton}
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={this.sortByClick}>
                                    {theadRightButton}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.data.map((numList, i) => (
                            <tr key={i}>
                                {numList.map((num, j) => (
                                    <td key={j}>{num}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                    <button type="button" onClick={this.addByClick}>
                        {buttonLeft}
                    </button>
                    <button type="button" onClick={this.removeByClick}>
                        {buttonRight}
                    </button>
            </div>
        );
    }
}

let BiographyReverse = Biography.reverse();

function GnomeSort(A) {
    var n = A.length, i = 1, j = 2;
    while (i < n) {
        if (A[i - 1] < A[i]) { i = j; j++; }
        else {
            var t = A[i - 1]; A[i - 1] = A[i]; A[i] = t;
            i--;
            if (i === 0) { i = j; j++; }
        }
    }
    return A;
}
GnomeSort(BiographyReverse);

const Task3 = () => {
    console.log(BiographyReverse);
    console.log(
        [3, 9, 1, 7, 2, 8, 4].sort()
    );
    console.log(
        [3, 9, 1, 7, 2, 8, 4].sort((a, b) => a - b)
    );
    return (
        <div className="Table">
            <h3>{tableHeading}</h3>
            <p>{tableText}</p>
            <h2>{tableSecondHeading}</h2>
            <TableBiography />
        </div>
    );
};

export default Task3;
