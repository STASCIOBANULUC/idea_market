import React from 'react';
import classNames from 'classnames'
import Menu from '../../components/menu';
import CardProject from '../../components/RecipeReviewCard'
import style from './Home.module.scss';
import bg from '../../assets/img/temp/5.jpeg'

const menuItems = [
  {
    id: 0,
    value: 'Все проекты',
    link: '#'
  },
  {
    id: 1,
    value: 'Технологии',
    isDropdown: false,
    link: '#'
  },
  {
    id: 2,
    value: 'Бизнес',
    link: '#'
  },
  {
    id: 3,
    value: 'Oбщество',
    link: '#'
  },
  {
    id: 4,
    value: 'Еда',
    link: '#'
  },
  {
    id: 5,
    value: 'Издания',
    link: '#'
  },
  {
    id: 6,
    value: 'Фильмы и Видео',
    link: '#'
  },
  {
    id: 7,
    value: 'Здоровье',
    link: '#'
  },
  {
    id: 8,
    value: 'Игры',
    link: '#'
  },
  {
    id: 9,
    value: 'Еще...',
    isDropdown: false,
    link: '#'
  }
];

const cards = [
  {
    id: 0,
    category: "Бизнес Рестораны",
    name: 'Кафе',
    description: 'Заведение общественного типа создано с целью предоставить качественный продукт узконаправленного типа',
    img: 'https://objor.com/uploads/posts/editor/8e45e5de-5f63-4435-8f15-78a9608e9532-bcd45aaaa4f2ec192d257be94b17a83f4f5c14a9.jpeg',
    file: '',
    money: 1000000,
    money_now: 212,
    date: ''
  },
  {
    id: 1,
    category: "Бизнес Рестораны",
    name: 'Кафе',
    description: 'Заведение общественного типа создано с целью предоставить качественный продукт узконаправленного типа',
    img: 'https://objor.com/uploads/posts/editor/8e45e5de-5f63-4435-8f15-78a9608e9532-bcd45aaaa4f2ec192d257be94b17a83f4f5c14a9.jpeg',
    file: '',
    money: 1000000,
    money_now: 212,
    date: ''
  },
  {
    id: 2,
    category: "Бизнес Рестораны",
    name: 'Кафе',
    description: 'Заведение общественного типа создано с целью предоставить качественный продукт узконаправленного типа',
    img: 'https://objor.com/uploads/posts/editor/8e45e5de-5f63-4435-8f15-78a9608e9532-bcd45aaaa4f2ec192d257be94b17a83f4f5c14a9.jpeg',
    file: '',
    money: 1000000,
    money_now: 212,
    date: ''
  },
  {
    id: 3,
    category: "Бизнес Рестораны",
    name: 'Кафе',
    description: 'Заведение общественного типа создано с целью предоставить качественный продукт узконаправленного типа',
    img: 'https://objor.com/uploads/posts/editor/8e45e5de-5f63-4435-8f15-78a9608e9532-bcd45aaaa4f2ec192d257be94b17a83f4f5c14a9.jpeg',
    file: '',
    money: 1000000,
    money_now: 212,
    date: ''
  },
  {
    id: 4,
    category: "Бизнес Рестораны",
    name: 'Кафе',
    description: 'Заведение общественного типа создано с целью предоставить качественный продукт узконаправленного типа',
    img: 'https://objor.com/uploads/posts/editor/8e45e5de-5f63-4435-8f15-78a9608e9532-bcd45aaaa4f2ec192d257be94b17a83f4f5c14a9.jpeg',
    file: '',
    money: 1000000,
    money_now: 212,
    date: ''
  },
  {
    id: 5,
    category: "Бизнес Рестораны",
    name: 'Кафе',
    description: 'Заведение общественного типа создано с целью предоставить качественный продукт узконаправленного типа',
    img: 'https://objor.com/uploads/posts/editor/8e45e5de-5f63-4435-8f15-78a9608e9532-bcd45aaaa4f2ec192d257be94b17a83f4f5c14a9.jpeg',
    file: '',
    money: 1000000,
    money_now: 212,
    date: ''
  }
]



export default function Home() {
  const [activeId, setActiveId] = React.useState(null);
  const [activePopup, setActivePopup] = React.useState(false);



  return (
    <>
      <section className={classNames("top", style.top)}>
        <Menu 
        activePopup={activePopup} 
        menuItems={menuItems} 
        activeId={activeId} 
        setActiveId={setActiveId} 
        />
      </section>

      <section className={classNames("products", style.products)}>
        <img className={style.img} src={bg} alt="" />
        <div className="container-big">
          <div className={classNames("products__inner", style.productsInner)}>

            {cards && cards.map((item, index) => (

              <CardProject 
              key = {index}
              variant="outlined"
              {...item}
              >{cards}</CardProject>)
            )
            }
          </div>
        </div>
      </section>
    </>
  );
}
