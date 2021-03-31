import React from 'react';
import '../styles/Request.css'

const firstTitle = '6 урок'
const firstParagraph = 'Задание: получить информацию из любого стороннего апи и отобразить на странице в виде списка или таблицы'

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(res => res.json())
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
      )
  }

  render() {
    const { error,isLoaded, items } = this.state;
    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <div className='Request'>
          <h1>{firstTitle}</h1>
          <h2>{firstParagraph}</h2>
          <ul>
            {items.map(({idDrink, strDrink, strDrinkThumb}) => (
              <li key={idDrink}>
                {strDrink}
                <img alt='' width='30' height='30' src={strDrinkThumb} />
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default Request