import React from 'react';
import preloaderImg from './preloader_linear.svg';
import './RequestApi.css';

const firstTitle = '6 урок';
const firstParagraph = 'Задание: получить информацию из любого стороннего апи и отобразить в виде списка или таблицы';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <p className={preloaderImg}>
          {error.message}
          <img src={preloaderImg} alt="Loading..." />
        </p>
      );
    } if (!isLoaded) {
      return <p className={preloaderImg}><img src={preloaderImg} alt="Loading..." /></p>;
    }
    return (
      <>
        <div className="RequestItem">
          <h1>{firstTitle}</h1>
          <h3>{firstParagraph}</h3>
          <ul>
            {items.map(({ idDrink, strDrink, strDrinkThumb }) => (
              <li key={idDrink}>
                {strDrink}
                <img alt="" width="30" height="30" src={strDrinkThumb} />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Request;
