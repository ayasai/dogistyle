import React, { useState } from 'react';
import Header from "./components/Header";
import Cards from './components/Cards';
import BreedComparison from './components/BreedComparison';
import FeedbackForm from './components/FeedbackForm';


const App = () => {
  const dogBreeds = [
    {
      name: 'Лабрадор ретривер',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Argos_with_duck.jpg/411px-Argos_with_duck.jpg',
      description: 'Лабрадоры дружелюбные, общительные и энергичные компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Лабрадор-ретривер'
    },
    {
      name: 'Немецкая овчарка',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Pastor_aleman_a.jpg/411px-Pastor_aleman_a.jpg',
      description: 'Немецкие овчарки умные и универсальные рабочие собаки.',
      link: 'https://ru.wikipedia.org/wiki/Немецкая_овчарка'
    },
    {
      name: 'Золотистый ретривер',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/411px-Golden_retriever_stehfoto.jpg',
      description: 'Золотистые ретриверы умные, дружелюбные и преданные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Золотистый_ретривер'
    },
    {
      name: 'Бульдог',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/411px-Bulldog_inglese.jpg',
      description: 'Бульдоги кроткие, упрямые и дружелюбные компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Бульдог'
    },
    {
      name: 'Бигль',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Shemsu_Sotis_Perun.jpg/411px-Shemsu_Sotis_Perun.jpg',
      description: 'Бигли любопытные, дружелюбные и веселые собаки.',
      link: 'https://ru.wikipedia.org/wiki/Бигль'
    },
    {
      name: 'Пудель',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Poodle_Grand_2_Moletai_May_2014.jpg/450px-Poodle_Grand_2_Moletai_May_2014.jpg',
      description: 'Пудели активные, гордые и очень умные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Пудель'
    },
    {
      name: 'Ротвейлер',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/02_I_Exposici%C3%B3n_Monogr%C3%A1fica_Club_Rottweiler_de_Espa%C3%B1a_-_Santa_Brigida_-_Gran_Canaria.jpg/411px-02_I_Exposici%C3%B3n_Monogr%C3%A1fica_Club_Rottweiler_de_Espa%C3%B1a_-_Santa_Brigida_-_Gran_Canaria.jpg',
      description: 'Ротвейлеры уверенные, бесстрашные и добродушные компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Ротвейлер'
    },
    {
      name: 'Йоркширский терьер',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/%D0%99%D0%BE%D1%80%D0%BA%D1%88%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80_%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9.jpg/411px-%D0%99%D0%BE%D1%80%D0%BA%D1%88%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80_%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9.jpgier.jpg',
      description: 'Йоркширские терьеры нежные, игривые и активные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Йоркширский_терьер'
    },
    {
      name: 'Боксер',
      image: 'https://avatars.mds.yandex.net/i?id=dfb04383a870c322b4da4f194f2f5d3e152f206f-12473993-images-thumbs&n=13m/boxer.jpg',
      description: 'Боксеры яркие, любящие веселье и активные компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Боксер_(собака)'
    },
    {
      name: 'Такса',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/MiniDachshund1_wb.jpg/411px-MiniDachshund1_wb.jpg',
      description: 'Таксы любопытные, дружелюбные и игривые собаки.',
      link: 'https://ru.wikipedia.org/wiki/Такса'
    },
    {
      name: 'Сибирский хаски',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Siberian-husky.jpg/411px-Siberian-husky.jpg',
      description: 'Сибирские хаски общительные, дружелюбные и игривые собаки.',
      link: 'https://ru.wikipedia.org/wiki/Сибирский_хаски'
    },
    {
      name: 'Немецкий дог',
      image: 'https://avatars.mds.yandex.net/i?id=2788c4432a029f770e644736be396687234bffc0-11459613-images-thumbs&n=13',
      description: 'Немецкие доги дружелюбные, терпеливые и надежные компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Немецкий_дог'
    },
    {
      name: 'Доберман',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/European_Dobermann.jpg/411px-European_Dobermann.jpg',
      description: 'Доберманы преданные, бесстрашные и внимательные компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Доберман'
    },
    {
      name: 'Ши-тцу',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Grupp_9%2C_SHIH_TZU%2C_SE_UCH_Yung_Lo%E2%80%99s_Heartbeat_%2824310212975%29.jpg/411px-Grupp_9%2C_SHIH_TZU%2C_SE_UCH_Yung_Lo%E2%80%99s_Heartbeat_%2824310212975%29.jpg',
      description: 'Ши-тцу нежные, игривые и общительные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Ши-тцу'
    },
    {
      name: 'Австралийская овчарка',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Australianshepherd01.jpg/411px-Australianshepherd01.jpg',
      description: 'Австралийские овчарки умные, работоспособные и энергичные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Австралийская_овчарка'
    },
    {
      name: 'Американский кокер-спаниель',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/American_Cocker_in_Tallinn.JPG/411px-American_Cocker_in_Tallinn.JPG',
      description: 'Кокер-спаниели нежные, умные и счастливые компаньоны.',
      link: 'https://ru.wikipedia.org/wiki/Американский_кокер-спаниель'
    },
    {
      name: 'Чихуахуа',
      image: 'https://avatars.mds.yandex.net/i?id=624b84044e215c04d8566ff409b0e224a252dde9-12609382-images-thumbs&n=13',
      description: 'Чихуахуа — маленькие, но храбрые и энергичные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Чихуахуа_(порода_собак)'
    },
    {
      name: 'Померанский шпиц',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pomeranian_Spitz.jpg/411px-Pomeranian_Spitz.jpg',
      description: 'Померанские шпицы дружелюбные, игривые и активные собаки.',
      link: 'https://ru.wikipedia.org/wiki/Померанский_шпиц'
    }
  ];

return (
  <div>
    <Header />
    <Cards breeds={dogBreeds} />
    <div style={styles.container}>
        <BreedComparison breeds={dogBreeds} />
        <FeedbackForm />
    </div>
  </div>
);
};

const styles = {
container: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start'
}
};

export default App;