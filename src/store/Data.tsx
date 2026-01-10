import { title } from "process";
import CupCakeIcon from "../assets/icons/CupCakeIcon";
import FastFoodIcon from "../assets/icons/FastFoodIcon";
import FlameIcon from "../assets/icons/FlameIcon";
import FruitsIcon from "../assets/icons/FruitsIcon";
import MealIcon from "../assets/icons/MealIcon";
import MeatIcon from "../assets/icons/MeatIcon";
import NoodlesIcon from "../assets/icons/NoodlesIcon";
import PotIcon from "../assets/icons/PotIcon";
import RiceIcon from "../assets/icons/RiceIcon";
import SnackIcon from "../assets/icons/SnackIcon";
import SoupIcon from "../assets/icons/SoupIcon";
import WineGlassesIcon from "../assets/icons/WineGlassesIcon";

import applePie from "../assets/images/applePie/applePie.jpg";
import applePie1 from "../assets/images/applePie/applePie1.jpg";
import applePie2 from "../assets/images/applePie/applePie2.jpg";
import applePie3 from "../assets/images/applePie/applePie3.jpg";

export interface CategoriesProps {
    name: string;
    icon: JSX.Element;
    color?: string;
}

export interface DirectionsProps {
    id: number;
    img?: string;
    description: string;
}

export interface IngredientsProps {
    title: string;
    ingredientsList: string[];
}

export interface RecipeProps {
    id: number;
    name: string;
    description: string;
    category: string[];
    image?: string;
    ingredients: string[];
    // ingredients: string[] | IngredientsProps[];
    directions: DirectionsProps[];
}

export const RecipesData = [
    {
        id: 0,
        name: 'Test',
        description: 'Przepis testowy',
        category: ['large meal', 'one-pot', 'spicy',],
        image: applePie,
        ingredients: ['500 g mąki pszennej - np. typ 500','250 g masła', '200 g waniliowego serka homogenizowanego - mały kubełek', '70 g cukru pudru - około 1/3 szklanki', '1 saszetka cukru wanilinowego - 16 g', '1,5 łyżeczki proszku do pieczenia', '6 jabłek - najlepiej szara reneta lub antonówka', '1 łyżeczka cynamonu - do 5 g', '1 łyżka drobnego cukru - 10 g'],
        directions: [
            {
                id: 0,
                description: 'ciasto bez użycia jajek'
            },
            {
                id: 1,
                description: 'dokładny opis wykonania'
            },
            {
                id: 2,
                description: 'tylko kilka łatwo dostępnych składników'
            }
        ]
    },
    {
        id: 1,
        name: 'Szarlotka z połówkami jabłek',
        description: 'Szarlotka z połówkami jabłek to jedna z ciekawszych szarlotek pieczonych. Zobacz jak krok po kroku przygotować ten niezwykły deser dla miłośników jabłek i cynamonu.',
        category: ['sweet'],
        image: applePie,
        ingredients: ['500 g mąki pszennej - np. typ 500','250 g masła', '200 g waniliowego serka homogenizowanego - mały kubełek', '70 g cukru pudru - około 1/3 szklanki', '1 saszetka cukru wanilinowego - 16 g', '1,5 łyżeczki proszku do pieczenia'], 
        // ingredients: [
        //     {
        //         title: 'Składniki na ciasto',
        //         ingredientsList: ['500 g mąki pszennej - np. typ 500','250 g masła', '200 g waniliowego serka homogenizowanego - mały kubełek', '70 g cukru pudru - około 1/3 szklanki', '1 saszetka cukru wanilinowego - 16 g', '1,5 łyżeczki proszku do pieczenia'], 
        //     },
        //     {
        //         title: 'Pozostałe składniki',
        //         ingredientsList: ['6 jabłek - najlepiej szara reneta lub antonówka', '1 łyżeczka cynamonu - do 5 g', '1 łyżka drobnego cukru - 10 g'],
        //     }
        // ],
        directions: [
            {
                id: 0,
                img: applePie1,
                description: 'Zacznij od zagniecenia ciasta. W jednej misce umieść razem: 500 gramów mąki pszennej np. typ. 500 (poznańska lub wrocławska). Idealna będzie też mąka pszenna luksusowa typ. 550. Będzie to połowa klasycznego, kilogramowego opakowania mąki; 70 gramów cukru pudru, czyli 3 łyżki z lekkim czubem, a licząc na szklanki około 1/3 pojemności szklanki; 1 saszetka cukru wanilinowego o wadze 16 gramów, którą można też śmiało pominąć lub dać tylko trochę pasty lub esencji waniliowej; 1,5 łyżeczki proszku do pieczenia; 250 gramów zimnego masła, czyli trochę ponad jedną kostkę o wadze 200 gramów; 200 gramów waniliowego serka homogenizowanego - mały kubełek np. Rolmlecz.'
            },
            {
                id: 1,
                img: applePie2,
                description: 'Ciasto wyrabiaj dłońmi lub mikserem z hakami do ciasta kruchego. Postaraj się to zrobić szybko. Wolę wyrabiać ciasto ręcznie w dużej misce, ale możesz też zrobić to na dużej desce, czystym blacie lub na stolnicy. Przy tych proporcjach składników ciasto powinno wyjść idealnie plastyczne. Z ciasta uformuj kulę. Zawiń ją w przezroczystą folię spożywczą i umieść w lodówce na 30 minut. Po tym czasie podziel ciasto na dwa kawałki. Moje ciasto ważyło łącznie około jednego kilograma. Ciasto podzieliłam na kawałki o wadze 450 gramów i 550 gramów. Cięższy kawałek ciasta zawiń ponownie w folię i odłóż do lodówki. Lżejszy kawałek rozwałkuj na placek wielkości formy. Podczas wałkowania warto podsypywać ciasto odrobiną mąki. Placek wyłóż do formy wyłożonej papierem do pieczenia (Aby paski papieru trzymały się wewnętrznych rantów, formę posmaruj wcześniej od środka odrobiną masła).',
            },
            {
                id: 2,
                img: applePie3,
                description: 'Na formę 24 x 34 cm potrzebujesz sześć jabłek. Wczesną jesienią polecam antonówki, zaś późniejszą jesienią lepsza będzie szara reneta. Sześć jabłek szara reneta ważyło u mnie przed obraniem około 1700 gramów. Jabłka cienko obierz, a następnie każdą sztukę przekrój wzdłuż na pół. Wytnij szypułkę oraz ogonek wraz ze skórką oraz ostrożnie usuń całe gniazdo nasienne. Połówki jabłek układaj na spodzie ciasta płaską stroną do dołu. Na koniec oprósz jabłka cynamonem (jedna łyżeczka) i drobnym cukrem lub cukrem waniliowym (jedna łyżka).'
            }
        ]
    },
    {
        id: 2,
        name: 'Orange Chicken',
        description: '542 Calories | 46g Protein | 59g Carbs | 14g Fat',
        category: ['healthy',],
        // image: applePie,
        ingredients: ['1000g Boneless Skinless Chicken Thighs, cubed', '2 Tsp Black Pepper', '30g Minced Garlic', '30g Ginger Paste', '2 Tsp Red Pepper Flakes', '30g Honey', '30g Sriracha', '100g Freshly Squeezed Orange Juice', '1.5 Tbsp Orange Zest', '30g Dark Soy Sauce'],
        directions: [
            {
                id: 0,
                description: 'Cube boneless chicken thighs and marinate with black pepper, garlic, ginger, chilli flakes, honey, sriracha, fresh orange juice, orange zest, and dark soy sauce. Let it marinate for at least 30 minutes for maximum flavour'
            },
            {
                id: 1,
                description: 'Bake or air fry the chicken at 200C / 400F for 19-22 minutes until golden and slightly charred, then let it rest in all those juices.'
            }
        ]
    },
    {
        id: 3,
        name: 'Toasted Sesame Garlic Rice',
        description: 'toast sesame seeds in a pan with a little butter until golden. Add garlic and cook until fragrant, then stir in cooked rice. Mix until fluffy.',
        category: ['rice',],
        // image: applePie,
        ingredients: ['15g Reduced Fat Butter', '25g Sesame Seeds', '20g Minced Garlic', '250g Uncooked White Rice/690g Cooked (leftover or day old cooked is best)', '50g Green Onion (green part)', 'Garnish Sesame Seeds'],
        directions: [
            {
                id: 0,
                description: 'toast sesame seeds in a pan with a little butter until golden. Add garlic and cook until fragrant, then stir in cooked rice. Mix until fluffy.'
            }
        ]
    },
    {
        id: 0,
        name: 'Cucumber Salad',
        description: 'Make the crunchy vinegar based slaw for balance and texture.',
        category: ['healthy',],
        ingredients: ['300g Green Cabbage, thinly sliced', '400g Cucumber, thinly sliced', '200g Red Onion, thinly sliced', '200g Carrots, grated', '150g Green Onion, finely chopped', '25g Rice Vinegar', '1 or 2 Tsp Red Pepper Flakes', '20g Honey'],
        directions: [
            {
                id: 0,
                description: 'Make the crunchy vinegar based slaw for balance and texture.'
            }
        ]
    },
]

export const CategoriesData = [
    {
        name: 'large meal',
        icon: <MealIcon/>,
        color: '#33A7A0'
    },
    {
        name: 'quick snack',
        icon: <SnackIcon/>,
        color: '#892CAA'
    },
    {
        name: 'healthy',
        icon: <FruitsIcon/>,
        color: '#72AB39'
    },
    {
        name: 'fast food',
        icon: <FastFoodIcon/>,
        color: '#F99417'
    },
    {
        name: 'rice',
        icon: <RiceIcon/>,
        color: '#F5958A'
    },
    {
        name: 'noodles',
        icon: <NoodlesIcon/>,
        color: '#3178C6'
    },
    {
        name: 'meat',
        icon: <MeatIcon/>,
        color: '#B93535'
    },
    {
        name: 'soup',
        icon: <SoupIcon/>,
        color: '#38D2C7'
    },
        {
        name: 'spicy',
        icon: <FlameIcon/>,
        color: '#E86717'
    },
    {
        name: 'sweet',
        icon: <CupCakeIcon/>,
        color: '#D889EC'
    },
    {
        name: 'one-pot',
        icon: <PotIcon/>,
        color: '#5E442E'
    },
    {
        name: 'fancy',
        icon: <WineGlassesIcon/>,
        color: '#7738D0'
    },
];