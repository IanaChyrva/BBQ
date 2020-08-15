import React from 'react';
import './App.css';

import NavBar from './components/NavBar/index';

import Recommended from './components/Recommended/index';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import image1 from './images/nav-bar/01.png';
import image2 from './images/nav-bar/02.png';
import image3 from './images/nav-bar/03.png';
import image4 from './images/nav-bar/04.png';
import image5 from './images/nav-bar/05.png';
import image6 from './images/nav-bar/06.png';
import image7 from './images/nav-bar/07.png';

import dish1 from './images/recommended/photo1.jpg';
import dish2 from './images/recommended/photo2.jpg';
import dish3 from './images/recommended/photo3.jpg';
import dish4 from './images/recommended/photo4.jpg';
import dish5 from './images/recommended/photo5.jpg';
import dish6 from './images/recommended/photo6.jpg';
import dish7 from './images/recommended/photo7.jpg';
import dish8 from './images/recommended/photo8.jpg';

const navBarData = [
  {
    id: 1,
    title: 'Бургеры',
    image: {
      src: image1,
      alt: '',
      width: 119,
      height: 75
    }
  },
  {
    id: 2,
    title: 'Бизнес меню',
    image: {
      src: image2,
      alt: '',
      width: 120,
      height: 120
    }
  },
  {
    id: 3,
    title: 'Кухня',
    image: {
      src: image3,
      alt: '',
      width: 116,
      height: 116
    }
  },
  {
    id: 4,
    title: 'Первые блюда',
    image: {
      src: image4,
      alt: '',
      width: 94,
      height: 94
    }
  },
  {
    id: 5,
    title: 'Мангал',
    image: {
      src: image5,
      alt: '',
      width: 135,
      height: 90
    }
  },
  {
    id: 6,
    title: 'Десерты',
    image: {
      src: image6,
      alt: '',
      width: 79,
      height: 85
    }
  },
  {
    id: 7,
    title: 'Напитки',
    image: {
      src: image7,
      alt: '',
      width: 113,
      height: 103
    }
  },
];

const recommendedData = [
  {
    menuTitle: 'мангал',
    dishTitle: 'Сыр на мангале с лимонно-медовой заправкой',
    price: '29 грн',
    image: {
      src: dish1,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'бургеры',
    dishTitle: 'Куриный бургер-сет',
    price: '60 грн',
    image: {
      src: dish2,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'мангал',
    dishTitle: 'Большой денер',
    price: '',
    image: {
      src: dish3,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'мангал',
    dishTitle: 'Большое мясо в лаваше',
    price: '37 грн',
    image: {
      src: dish4,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'мангал',
    dishTitle: 'Картофель с костра',
    price: '25 грн',
    image: {
      src: dish5,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'шашлык',
    dishTitle: 'Шашлык из свинины «BBQ»',
    price: '54 грн',
    image: {
      src: dish6,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'бургер',
    dishTitle: 'Бургер с мясом и сыром «Чеддер»',
    price: 'от 80 грн',
    image: {
      src: dish7,
      alt: '',
      width: 275,
      height: 180
    }
  },

  {
    menuTitle: 'бургер',
    dishTitle: 'Сет «Z-Бургер»',
    price: 'от 110 грн',
    image: {
      src: dish8,
      alt: '',
      width: 275,
      height: 180
    }
  }
];

class App extends React.Component {
  render = () => (
    <Container>
      <Row>
        <Col xs={12}>
          <NavBar items={navBarData} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="RecommendedTitle">Рекомендуемые блюда</div>
        </Col>
        <Col xs={12}>
          <Recommended dishes={recommendedData} />
        </Col>
      </Row>
    </Container>
  )
}


export default App;
