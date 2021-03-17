import React from 'react';
import '../styles/Article.css';

const firstHeading = 'React internship';
const secondHeading = '5 урок';
const thirdHeading = 'Задание: переписать функции сортировки, добавления и удаления записей биографии из прошлого задания таким образом чтобы все необходимое приходило в качестве параметров (без использования внешних переменных), а функция возвращала новый объект (а не перезаписывала старый). После вызова функции вывести в консоль старый и новый обьекты.';

function Article() {   
  return (
    <div className="article">
      <h1>{firstHeading}</h1>
      <h2>{secondHeading}</h2>
      <p>{thirdHeading}</p>
    </div>
    )
  }
export default Article