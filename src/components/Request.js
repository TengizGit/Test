import React from 'react';
import '../styles/Request.css'

const firstTitle = '6 урок'
const firstParagraph = 'Задание: получить информацию из любого стороннего апи и отобразить на странице в виде списка или таблицы'

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isloaded: false,
      items: []
    };
  }
  //state = {
  //  error: null,
  //  isLoaded: false,
  //  items: []
  //}

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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <>
          <div>
            <h1>{firstTitle}</h1>
            <h3>{firstParagraph}</h3>
          </div>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.strDrink}
                <img alt='' width='30' height='30' src={item.strDrinkThumb} />
              </li>
            ))}
          </ul>
        </>
      )
    }
  }
}

export default Request