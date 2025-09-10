import pancakes from '../assets/images/test-img/pancakes.jpg';
import prep from '../assets/images/test-img/prep.jpg';
import other from '../assets/images/test-img/other.jpg';
import chicken from '../assets/images/test-img/chicken.jpg';
import chickenPrep from '../assets/images/test-img/chickenPrep.jpg';
import spaghetti from '../assets/images/test-img/spaghetti.jpg';
import pasta from '../assets/images/test-img/pasta.jpg';
import cheese from '../assets/images/test-img/cheese.jpg';
import eggWhite from '../assets/images/test-img/eggWhite.jpg';
import eggYellow from '../assets/images/test-img/eggYellow.jpg';
import cocoa from '../assets/images/test-img/cocoa.jpg';
import sandCake from '../assets/images/test-img/sandCake.jpg';

export interface DataProps {
    id: number;
    name: string;
    img?: string;
    category?: string[];
    description: string;
    // ingredientsList?: any[];
    // method?: {
    //     id?: number;
    //     img?: string;
    //     description?: string;
    // }[];
};

export const categories = [
    'fancy',
    'healthy',
    'one pot',
    'quick&easy',
    'quick snack',
    'spicy',
    'sweet',
    'baked',
    'cooked',
    'fried',
    'tea time'
];

export const ingredients = [
    'chicken',
    'corn',
    'bananas',
    'eggs', 
    'flour',
    'coconut_oil',
    'baking_powder'
]

export const Data = [
    {
        id: 0,
        name: 'test',
        category: ['healthy', 'quick&easy', 'spicy'],
        description: 'Opis testu'
    },
    {
        id: 1,
        name: 'Babka piaskowa',
        img: sandCake,
        category: ['fancy', 'sweet'],
        description: 'Nie tylko na Wielkanoc',
        ingredients: ['eggs'],
        ingredientsList: [
            '4 whole eggs',
            '1 glass',
            '1 glass wheat flour',
            '0.5 glass potato flour',
            '1 teaspoon baking powder',
            '1 whole vanilla sugar',
            '250 g margarine'
        ],
        directions: [
            {
                id: 1,
                img: eggWhite,
                description: 'Białka ubic z cukrem na sztywna pianę.'
            },
            {
                id: 2,
                img: eggYellow,
                description: 'Dodać żółtka z proszkiem do pieczenia, a następnie obie mąki. Na końcu dodać roztopioną i ostudzoną margarynę.'
            },
            {
                id: 3,
                img: cocoa,
                description: 'Masę wylać na wysmarowaną tłuszczem i wyłożona papierem blaszkę. (Opcjonalnie: Wymieszać 1/4 masy z kakao i wylać na blachę przed włożeniem do piekarniaka.)'
            },
            {
                id: 4,
                img: sandCake,
                description: 'Piec w 180 stopniach C. (Opjconalnie: Polać lukrem lub polewą czkoladową.)'
            }
        ],
    },
    {
        id: 2,
        name: 'banana pancakes with blueberries',
        img: pancakes,
        category: ['healthy', 'quick snack', 'breakfast&brunch', 'quick&easy', 'pancakes'],
        description: 'Placki z bananów z borówkami. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        ingredients: ['eggs'],
        // time: {
        //     prepTime: '5 min',
        //     cookTime: '5-10 min',
        //     totalTime: '15 min'
        // },
        // quantity: [10, 'pancakes'],
        ingredientsList: {
            bananas: [2, 'whole'],
            eggs: [2, 'whole'], 
            flour: [7, 'tablespoon'],
            coconut_oil: [3, 'tablespoon'],
            baking_powder: [1, 'teaspoon']
        },
        directions: [
            {
                id: 1,
                img: prep,
                description: 'Ugnieść banany w misce.'
            },
            {
                id: 2,
                img: other,
                description: 'Dodać pozostałe składniki i wymieszać. Smażyć na rozgrzanej patelni z olejem kokosowym (może być też zwykły olej) ok. 3-5min na stronę. Borówki dodać w trakcie smażenia lub do masy.',
            }
        ],
    },
    {
        id: 3,
        name: 'Croutons with garlic butter',
        category: ['quick snack', 'snacks&appetizers', 'quick&easy'],
        description: 'Obrać i pokroić czosnek.',
        ingredients: {
            baguette: 1,
            butter: [50, 'g'], 
            garlic: [10, 'cloves'],
            provencal_herbs: [1, 'tablespoon'],
            salt: [0.5, 'teaspoon']
        },
        directions: [
            {
                id: 1,
                description: 'Obrać i pokroić czosnek. Można tez użyć praski. Wymieszać masło, przyprawy i czosnek. Najlepiej zostawić na noc. Rozgrzać piekarnik. Pokroic bagietkę i  posmarować masłem czosnkowym z obu stron. Piec w nagrzanym do 180°C piekarniku.',
            }
        ],
    },
    {
        id: 4,
        name: 'Spaghetti Bolonese',
        img: spaghetti,
        category: ['quick snack', 'one pot', 'spicy'],
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
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
        directions: [
            {
                id: 1,
                img: pasta,
                descripion: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
            },
            {
                id: 2,
                img: cheese,
                descritpion: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            },
            {
                id: 3,
                img: spaghetti,
                description: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            }
        ]
    },
    {
        id: 5,
        name: 'Ciasto wiśniowe',
        img: sandCake,
        category: ['quick&easy', 'sweet', 'tea time', 'baked'],
        ingredients: ['eggs', 'cherries', 'flour'],
        description: 'Wiśnie lub inne owoce',
        ingredientsList: [
            '4 eggs',
            '1 glass of sugar',
            '1,5 glass wheat flour',
            '2/3 glass margarine',
            '2 teaspoon baking powder',
        ],
        directions: [
            {
                id: 1,
                img: eggWhite,
                description: 'Białka ubic z cukrem na sztywna pianę.'
            },
            {
                id: 2,
                img: eggYellow,
                description: 'Dodać żółtka z proszkiem do pieczenia, a następnie obie mąki. Na końcu dodać roztopioną i ostudzoną margarynę.'
            },
            {
                id: 3,
                img: cocoa,
                description: 'Masę wylać na wysmarowaną tłuszczem i wyłożona papierem blaszkę. (Opcjonalnie: Wymieszać 1/4 masy z kakao i wylać na blachę przed włożeniem do piekarniaka.)'
            },
            {
                id: 4,
                img: sandCake,
                description: 'Piec w 180 °C.'
            }
        ],
    },
    {
        id: 6,
        name: 'Waffles',
        img: sandCake,
        category: ['quick&easy', 'sweet'],
        ingredients: ['eggs', 'flour'],
        description: 'Gofry',
        ingredientsList: [
            '1,5 glass wheat flour',
            'a pinch of salt',
            '1,5 teaspoon baking powder',
            '2 whole eggs',
            '2 teaspoon of sugar',
            '0,5 glass of oil',
            '1,3 glass of milk'
        ],
    },
    {
        id: 7,
        name: 'Bułka w formie',
        category: ['quick&easy', 'bread'],
        ingredients: ['eggs', 'flour'],
        description: 'Bagietki?',
        ingredientsList: [
            '20g butter',
            '1 egg white',
            '8g salt',
            '400g wheat flour',
            '10g of sugar',
            '1 packet of dry yeast',
            '260g milk'
        ],
        directions: [
            {
                id: 1,
                description: 'Piec w 190 °C.'
            }
        ],
    },
    {
        id: 8,
        name: 'Chałka',
        category: ['quick&easy', 'sweet'],
        ingredients: ['eggs', 'flour'],
        description: 'Sweet Bread',
        ingredientsList: [
            '25g wet yeast',
            '50g of sugar',
            '100ml milk',
            '1/2 spoon of oli',
            '1 whole egg',
            'a pinch of salt',
            '285g wheat flour',
        ],
        directions: [
            {
                id: 1,
                description: 'Piec w ? °C.'
            }
        ],
    },
    {
        id: 9,
        name: 'Szarlotka',
        category: ['sweet'],
        ingredients: ['eggs', 'flour', 'apples'],
        description: 'ApplePie',
        ingredientsList: [
            '250g margarine',
            '4 egg yolks',
            '3 spoons of sour cream',
            '4 spoons of sugar',
            '3 glass wheat flour',
            '1 teaspoon baking powder',
        ],
        directions: [
            {
                id: 1,
                description: 'Piec w 180-200 °C. Ok 0,5-1h.'
            }
        ],
    },
    {
        id: 10,
        name: 'Bułeczki na śniadanie',
        category: ['quick&easy', 'buns'],
        ingredients: ['eggs', 'flour'],
        description: 'buns',
        ingredientsList: [
            '500g wheat flour 750',
            '4 spoons of butter',
            '1 teaspoon of salt',
            '50g of yeast',
            '1 spoon of sugar',
        ],
        directions: [
            {
                id: 1,
                description: 'Do szklanki wkładamy drożdże, zasypujemy cukrem, chwilę czekamy, a następnie mieszkmy do rozpuszczenia. Ciasto mieszamy i wkłądamy na całą noc do lodówki.'
            },
            {
                id: 2,
                description: 'Następnego dnia dzielimy na 8-12 bułeczek i układamy na natłuszczonej formie. Wierzch smarujemy masłem i robimy niewielkie nacięcie nożem. Odstawiamy na 20 min.'
            },
            {
                id: 3,
                description: 'Piec 15-20 min w 225 °C.'
            }
        ],
    },
    {
        id: 11,
        name: 'Chleb podstawowy',
        category: ['quick&easy', 'bread', 'bread machine'],
        ingredients: ['eggs', 'flour'],
        description: 'chleb z maszyny 1000g',
        ingredientsList: [
            '1 teaspoon of oil',
            '260ml water',
            '1 egg',
            '1 teaspoon of sugar',
            '1 teaspoon of salt',
            '500g wheat flour 750',            
            '7g of dry yeast or 16 of wet yeast',
        ],
        directions: [
            {
                id: 1,
                description: '1 spory bochenek, czas zgodny z programem maszyny ok 3,5h'
            },
        ],
    },
    {
        id: 12,
        name: 'Chleb pszenno-żytni',
        category: ['quick&easy', 'bread', 'bread machine'],
        ingredients: ['eggs', 'flour'],
        description: 'chleb z maszyny 1000g',
        ingredientsList: [
            '1 spoon of oil',
            '200g water',
            '1/2 teaspoon of sugar',
            '1/2 teaspoon of salt',
            '150g rye bread flour 720',            
            '180g wheat flour 550',            
            '4g of dry yeast or 10 of wet yeast',
        ],
        directions: [
            {
                id: 1,
                description: '1 spory bochenek, czas zgodny z programem maszyny ok 3,5h'
            },
        ],
    },
    {
        id: 13,
        name: 'cucumber soup',
        category: ['quick&easy', 'soup'],
        ingredients: ['cucumber'],
        description: 'zupa ogórkowa',
        ingredientsList: [
            '2 carrots',
            '0,5 parsley root',
            '2 spoons of leek',
            '2 spoons of butter',
            '1 spoon of Vegeta',
            '3-4 potatoes',
            '3 pickles',
            '2-3 spoons of sour cream'
        ],
        directions: [
            {
                id: 1,
                description: 'Zetrzeć na tarce marchew na grubej a pietruszkę na drobnej tarce. Por drobno pokroić.'
            },
            {
                id: 2,
                description: 'Całość przysmażyć na maśle. Dolac pół garnka wody, dodać przyprawy, ziemniaki i zagotować.'
            },
            {
                id: 3,
                description: 'Gdy ziemniaki będą miękkie dodac starte ogórki i zahartowac śmietanę.'
            },
        ],
    },
    {
        id: 14,
        name: 'Barszcz Czerwony z jakiem i ziemniakami',
        category: ['fancy', 'soup'],
        ingredients: ['burak'],
        description: 'barszcz czerwony',
        ingredientsList: [
            '2 carrots',
            '0,5 parsley root',
            '2 spoons of leek',
            '2 spoons of butter',
            '1 spoon of Vegeta',
            '3-4 potatoes',
            '3 pickles',
            '2-3 spoons of sour cream'
        ],
        directions: [
            {
                id: 1,
                description: 'Zetrzeć na tarce marchew na grubej a pietruszkę na drobnej tarce. Por drobno pokroić.'
            },
            {
                id: 2,
                description: 'Całość przysmażyć na maśle. Dolac pół garnka wody, dodać przyprawy, ziemniaki i zagotować.'
            },
            {
                id: 3,
                description: 'Gdy ziemniaki będą miękkie dodac starte ogórki i zahartowac śmietanę.'
            },
        ],
    },
]

export const RecipesData = [
    // {
    //     title: 'banana pancakes with blueberries',
    //     meals: ['breakfast&brunch', 'quick&easy', 'healthy', 'pancakes'],
    //     time: {
    //         prepTime: '5 min',
    //         cookTime: '5-10 min',
    //         totalTime: '15 min'
    //     },
    //     quantity: [10, 'pancakes'],
    //     ingredients: {
    //         bananas: 2,
    //         eggs: 2, 
    //         flour: [7, 'tablespoon'],
    //         coconut_oil: [3, 'tablespoon'],
    //         baking_powder: [1, 'teaspoon']
    //     },
    //     directions: ['Ugnieść banany w misce.', 'Dodać pozostałe składniki i wymieszać', 'Smażyć na rozgrzanej patelni z olejem kokosowym (może być też zwykły olej) ok. 3-5min na stronę', 'Borówki dodać w trakcie smażenia lub do masy.'],
    //     image: pancakes,
    //     images: [prep, other]
    // },
    // {
    //     title: 'croutons with garlic butter',
    //     meals: ['snacks&appetizers', 'quick&easy'],
    //     time: {
    //         prepTime: '30 min',
    //         cookTime: '15-20 min',
    //         totalTime: '30-60 min'
    //     },
    //     quantity: [4, 'croutons'],
    //     ingredients: {
    //         baguette: 1,
    //         butter: [50, 'g'], 
    //         garlic: [10, 'cloves'],
    //         provencal_herbs: [1, 'tablespoon'],
    //         salt: [0.5, 'teaspoon']
    //     },
    //     directions: ['Obrać i pokroić czosnek. Można tez użyć praski.', 'Wymieszać masło, przyprawy i czosnek. Najlepiej zostawić na noc.', 'Rozgrzać piekarnik', 'Pokroic bagietkę i  posmarować masłem czosnkowym z obu stron.', 'Piec w nagrzanym do 180°C piekarniku.'],
    //     image: other,
    //     images: [prep, other, pancakes]
    // },
    // {
    //     title: 'Spaghetti Bolonese',
    //     meals: ['dinner', 'quick&easy'],
    //     time: {
    //         prepTime: '30 min',
    //         cookTime: '30 min',
    //         totalTime: '60 min'
    //     },
    //     quantity: 2,
    //     ingredients: {
    //         pasta: [300, 'g'],
    //         oil: [3, 'tablespoon'], 
    //         garlic: [5, 'cloves'],
    //         provencal_herbs: [2, 'tablespoon'],
    //         salt: [0.5, 'teaspoon'],
    //         tomato: [250, 'g'],
    //         ground_beef: [300, 'g'],
    //         parmesan: [15, 'g']
    //     },
    //     directions: ['All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.', 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'],
    //     image: spaghetti,
    //     images: [pasta, cheese, spaghetti]
    // },
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