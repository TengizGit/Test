import React from 'react';
import '../styles/Article.css';

const firstTitle = 'React internship';
const secondTitle = '5 урок';
const thirdParagraph = 'Задание: переписать функции сортировки, добавления и удаления записей биографии из прошлого задания таким образом чтобы все необходимое приходило в качестве параметров (без использования внешних переменных), а функция возвращала новый объект (а не перезаписывала старый). После вызова функции вывести в консоль старый и новый обьекты.';

function Article() {
  return (
    <div className="article">
      <h1>{firstTitle}</h1>
      <h2>{secondTitle}</h2>
      <p>{thirdParagraph}</p>
    </div>
  )
}

export default Article