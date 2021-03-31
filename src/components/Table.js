import React from 'react';
import '../styles/Table.css';

const secondHeading = '5 урок';
const thirdHeading = 'Задание: переписать функции сортировки, добавления и удаления записей биографии из прошлого задания таким образом чтобы все необходимое приходило в качестве параметров (без использования внешних переменных), а функция возвращала новый объект (а не перезаписывала старый). После вызова функции вывести в консоль старый и новый обьекты.';
const theadLeftButton = 'ГОД';
const theadRightButton = 'СОБЫТИЕ';
const buttonLeft = 'Добавить';
const buttonRight = 'Удалить';
const btnRightButton = 'Удалить';
const tableHeading = 'Биография';
const tableText = 'Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы.';
const tableSecondHeading = 'Биография в таблице';

let Biography = [
    [1, 1967, "Важное событие"],
    [2, 1973, "Важное событие"],
    [3, 1980, "Важное событие"],
    [4, 1998, "Самое важное событие"],
    [5, 2019, "Очередное важное событие"],
];

class TableBiography extends React.Component {
    data = Biography;
    constructor(props) {
        super(props);
        this.sortByClick = this.sortByClick.bind(this);
        this.state = { sorted: true };
    }

    sortByClick = () => {
        this.setState(() => ({
            sorted: !this.sorted,
        }));
        if (this.state.sorted) {
            return this.data.reverse();
        }
        return this.data.sort();
    };

    addByClick = () => {
        this.setState(() => ({
            added: ++this.added,
        }));
        return this.data.push(["Год", "Событие"]);
    };

    removeByClick = () => {
        this.setState(() => ({
            removed: ++this.removed,
        }));
        if (this.state.sorted) {
            return this.data.pop();
        }
        return this.data.shift();
    };

    render() {
        return (
            <>
                <div className="Table">
                    <div>
                        <h1>{secondHeading}</h1>
                        <h3>{thirdHeading}</h3>
                        <h3>{tableHeading}</h3>
                        <p>{tableText}</p>
                        <h3>{tableSecondHeading}</h3>
                    </div>
                    <table className="Table">
                        <thead>
                            <tr>
                                <th>№</th>
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
                                {<th ></th>}
                            </tr>
                        </thead>
                        <tbody>
                            {this.data.map((numList, i) => (
                                <tr key={i}>
                                    {numList.map((num, j) => (
                                        <th key={j}>{num}</th>
                                    ))}
                                    <th><button type="button" onClick={this.removeByClick}>
                                        {btnRightButton}
                                    </button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <button type="button" onClick={this.addByClick}>{buttonLeft}</button>
                        <button type="button" onClick={this.removeByClick}>{buttonRight}</button>
                    </div>
                </div>
            </>
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

const Task = () => {
    console.log(BiographyReverse);
    console.log(
        [3, 9, 1, 7, 2, 8, 4].sort()
    );
    console.log(
        [3, 9, 1, 7, 2, 8, 4].sort((a, b) => a - b)
    );

    return (
        <TableBiography />
    );
};

export default Task;
