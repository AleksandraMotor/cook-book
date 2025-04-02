import pancakes from '../assets/images/test-img/pancakes.jpg';
import prep from '../assets/images/test-img/prep.jpg';
import other from '../assets/images/test-img/other.jpg';
import chicken from '../assets/images/test-img/chicken.jpg';
import chickenPrep from '../assets/images/test-img/chickenPrep.jpg';
import spaghetti from '../assets/images/test-img/spaghetti.jpg';
import pasta from '../assets/images/test-img/pasta.jpg';
import cheese from '../assets/images/test-img/cheese.jpg';

export const RecipesData = [
    {
        title: 'banana pancakes with blueberries',
        meals: ['breakfast&brunch', 'quick&easy', 'healthy', 'pancakes'],
        time: {
            prepTime: '5 min',
            cookTime: '5-10 min',
            totalTime: '15 min'
        },
        quantity: [10, 'pancakes'],
        ingredients: {
            bananas: 2,
            eggs: 2, 
            flour: [7, 'tablespoon'],
            coconut_oil: [3, 'tablespoon'],
            baking_powder: [1, 'teaspoon']
        },
        directions: ['Ugnieść banany w misce.', 'Dodać pozostałe składniki i wymieszać', 'Smażyć na rozgrzanej patelni z olejem kokosowym (może być też zwykły olej) ok. 3-5min na stronę', 'Borówki dodać w trakcie smażenia lub do masy.'],
        image: pancakes,
        images: [prep, other]
    },
    {
        title: 'croutons with garlic butter',
        meals: ['snacks&appetizers', 'quick&easy'],
        time: {
            prepTime: '30 min',
            cookTime: '15-20 min',
            totalTime: '30-60 min'
        },
        quantity: [4, 'croutons'],
        ingredients: {
            baguette: 1,
            butter: [50, 'g'], 
            garlic: [10, 'cloves'],
            provencal_herbs: [1, 'tablespoon'],
            salt: [0.5, 'teaspoon']
        },
        directions: ['Obrać i pokroić czosnek. Można tez użyć praski.', 'Wymieszać masło, przyprawy i czosnek. Najlepiej zostawić na noc.', 'Rozgrzać piekarnik', 'Pokroic bagietkę i  posmarować masłem czosnkowym z obu stron.', 'Piec w nagrzanym do 180°C piekarniku.'],
        image: other,
        images: [prep, other, pancakes]
    },

    {
        title: 'Spaghetti Bolonese',
        meals: ['dinner', 'quick&easy'],
        time: {
            prepTime: '30 min',
            cookTime: '30 min',
            totalTime: '60 min'
        },
        quantity: 2,
        ingredients: {
            pasta: [300, 'g'],
            oil: [3, 'tablespoon'], 
            garlic: [5, 'cloves'],
            provencal_herbs: [2, 'tablespoon'],
            salt: [0.5, 'teaspoon'],
            tomato: [250, 'g'],
            ground_beef: [300, 'g'],
            parmesan: [15, 'g']
        },
        directions: ['All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'],
        image: spaghetti,
        images: [pasta, cheese, spaghetti]
    },
    {
        title: 'lorem1',
        meals: ['dinner', 'fancy'],
        time: {
            prepTime: '130 min',
            cookTime: '150-200 min',
            totalTime: '330 min'
        },
        quantity: 2,
        ingredients: {
            chicken: 1,
            butter: [15, 'g'], 
            garlic: [3, 'cloves'],
            provencal_herbs: [2, 'teaspoon'],
            salt: [0.5, 'teaspoon'],
            potatoes: [0.5, 'kg']
        },
        directions: ['There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.'],
        image: chicken,
        images: [chickenPrep, pasta, other, cheese, pancakes]
    },
    {
        title: 'lorem2',
        meals: ['snacks&appetizers', 'quick&easy', 'croutons'],
        time: {
            prepTime: '30 min',
            cookTime: '15-20 min',
            totalTime: '30-60 min'
        },
        quantity: [4, 'croutons'],
        ingredients: {
            baguette: 0,
            butter: 'aaa'
        },
        directions: ['All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'],
        image: null,
    }
];