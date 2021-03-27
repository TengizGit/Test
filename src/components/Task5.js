import React, { useState } from 'react';
import { runSelectionSort } from '../components/RunSort';
import '../styles/Task5.css';

const secondTitle = '5 урок';
const thirdParagraph = 'Задание: переписать функции сортировки, добавления и удаления записей биографии из прошлого задания таким образом чтобы все необходимое приходило в качестве параметров (без использования внешних переменных), а функция возвращала новый объект (а не перезаписывала старый). После вызова функции вывести в консоль старый и новый обьекты.';
const tableHeading = 'Биография';
const tableText = 'Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы.';
const tableSecondHeading = 'Биография в таблице';
const yearButton = 'Год';
const eventButton = 'Событие';
const btnRightButton = 'Удалить';
const leftButton = 'Добавить';
const rightButton = 'Удалить';
const listNumber = '№';

const ArrTask5 = [
    { id: 1, year: 1967, name: 'Важное событие' },
    { id: 2, year: 1973, name: 'Важное событие' },
    { id: 3, year: 1980, name: 'Важное событие' },
    { id: 4, year: 1998, name: 'Самое важное событие' },
    { id: 5, year: 2019, name: 'Очередное важное событие' },
];

const Task5 = () => {

    const [task5, setTask5] = useState(ArrTask5);
    const [upYear, setUpYear] = useState(true);
    const [upName, setUpName] = useState(true);
    const [sortCriteria, setSortCriteria] = useState("");
    const [useSort,] = useState(false);
    const [yearInput, setYearInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    const ListItem = task5.map((item, index) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.year}</td>
            <td>{item.name}</td>
            <td><button className="btn" onClick={() => DeleteById(item.id)}>{btnRightButton}</button></td>
        </tr>
    ));

    const sortArrTask5 = (data, ascend, property) => {
        const sortFunction = ascend
            ? (a, b) => (a[property] >= b[property] ? -1 : 1)
            : (a, b) => (a[property] >= b[property] ? 1 : -1);
        return [...data].sort(sortFunction);
    };

    const handleYearClick = () => {
        const sortedArrTask5 = useSort
            ? runSelectionSort(task5, upYear, "year")
            : sortArrTask5(task5, upYear, "year");

        setTask5(sortedArrTask5);
        setUpYear(!upYear);
        setSortCriteria("year");
    };

    const handleNameClick = () => {
        const sortedArrTask5 = useSort
            ? runSelectionSort(task5, upName, "name")
            : sortArrTask5(task5, upName, "name");

        setTask5(sortedArrTask5);
        setUpName(!upName);
        setSortCriteria("name");
    };

    const addNameToTask5 = (task5, name) => [...task5, name];
    const handleaddNameToTask5 = (event) => {
        event.preventDefault();
        const newName = { year: +yearInput, name: +nameInput };
        const updatedTask5 = addNameToTask5(task5, newName);

        setTask5(updatedTask5);
        setYearInput("");
        setNameInput("");
    };

    const handleLastNameRemove = () => {
        setTask5(task5.slice(0, -1));
    };

    const DeleteById = (idYear) => {
        setTask5(task5.filter((item) => item.id !== idYear));
        setTask5(task5.slice(0, -1));
    }

    return (
        <>
            <div className="Item">
                <div className="Table">
                    <h2>{secondTitle}</h2>
                    <p>{thirdParagraph}</p>
                    <h3>{tableHeading}</h3>
                    <p>{tableText}</p>
                    <h2>{tableSecondHeading}</h2>
                </div>
                <table className="Table">
                    <thead>
                        <tr>
                            <th>{listNumber}</th>
                            <th ><button type="submit" onClick={handleYearClick}>{yearButton}
                                {sortCriteria !== upYear ? " " : " "}
                            </button></th>

                            <th ><button type="submit" onClick={handleNameClick}>{eventButton}
                                {sortCriteria !== upName ? " " : " "}
                            </button></th>
                            {<th ></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {ListItem}
                    </tbody>
                </table>
                <div>
                    <button type="button" onClick={handleaddNameToTask5}>{leftButton}</button>
                    <button type="button" onClick={handleLastNameRemove}>{rightButton}</button>
                </div>
            </div>
        </>
    );
}

export default Task5;