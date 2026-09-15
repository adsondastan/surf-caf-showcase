export type MenuItem = { name: string; price: string; category: string; description?: string };

export const restaurant = {
  name: "SURF CAFÉ",
  phone: "+258 86 862 2655",
  phoneHref: "+258868622655",
  whatsapp: "258868622655",
  address: "Nr. 6, Rua das FPLM, Nampula, Moçambique",
  openingHours: ["Segunda a sexta: 06:00 – 23:00", "Sábado e domingo: 07:00 – 23:00"],
  socialLinks: { instagram: "", facebook: "", tiktok: "" },
  reviews: { rating: "4,2", count: 225, note: "Informação aproximada encontrada" },
};

export const menuCategories = [
  "Todas",
  "Especialidades do Chef",
  "Extra Ingredientes Tábuas",
  "Whiskey",
  "Vodka",
  "Gin",
  "Tacos",
  "Bowls",
  "Pizzas",
  "Extra Ingredientes Pizzas",
  "Tapas",
  "Bite'zinhos",
  "Acompanhamentos",
  "Bebidas Quentes",
  "Águas",
  "Extras Leite",
  "Bebidas Frias",
  "Carne",
  "Frango",
  "Vegetariano",
  "Menu Infantil",
  "Extras",
  "Peixe",
  "Marisco",
  "Pregos",
  "Burguers",
  "Tostadas à Surf",
  "Sandes Saudáveis",
  "Pequeno Almoço",
  "Brunch à Carta",
  "Vinho Tinto",
  "Vinho Tinto Copo",
  "Vinho Branco Copo",
  "Vinho Branco",
  "Vinho Rosé & Verde",
  "Vinho do Porto Copo",
  "Milkshakes",
  "Smoothies",
  "Bebidas Frescas",
  "Cervejas",
  "Cocktails",
  "Cidras",
  "Sangrias Jarro",
  "Pastelaria",
  "Sobremesas",
  "Rum & Licor",
  "Brandy & Aguardente",
  "Tequila",
  "Outros",
  "Espumante"
];

export const menuItems: MenuItem[] = [
  {
    name: "Espetada de Kebab & Frango Marinados",
    price: "1.350 MT",
    category: "Especialidades do Chef",
    description: "Kebab & Frango Marinados, Louro, Alho, Limão, Iogurte Grego, Grelhados em Espetos & Servidos c/ Arroz, Batata Frita & Salada Mista"
  },
  {
    name: "Filetes de Peixe Panados c/ Arroz de Gambas",
    price: "1.700 MT",
    category: "Especialidades do Chef",
    description: "Filetes de Peixe Panado, Temperado c/ Molho de Manteiga & Limão, Molho Tártaro, Servidos c/ Arroz de Gambas & Tomate"
  },
  {
    name: "Tábua Surf & Turf (Para Partilhar)",
    price: "3.500 MT",
    category: "Especialidades do Chef",
    description: "Tábua Combinada c/ Picanha ao Alho Grelhado & Camarão Médio Grelhado c/ Manteiga de Limão servido c/ Arroz Basmati, Feijão Preto, Banana Frita, Couve Salteada & Batata Frita"
  },
  {
    name: "Tábua de Carnes à Surf (Para Partilhar)",
    price: "3.800 MT",
    category: "Especialidades do Chef"
  },
  {
    name: "Tábua de Peixe & Marisco á Surf (Para Partilhar)",
    price: "4.300 MT",
    category: "Especialidades do Chef"
  },
  {
    name: "Corações",
    price: "60 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Coxas e Peito de Frango",
    price: "270 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Chouriço de Vaca",
    price: "420 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Alcatra",
    price: "650 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Picanha",
    price: "1.350 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Ameijoas",
    price: "600 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Bacalhau / Lula",
    price: "750 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Camarão Médio",
    price: "780 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Filete Peixe",
    price: "1.380 MT",
    category: "Extra Ingredientes Tábuas"
  },
  {
    name: "Jameson Stout Edition",
    price: "400 MT",
    category: "Whiskey"
  },
  {
    name: "Jameson IPA Edition",
    price: "400 MT",
    category: "Whiskey"
  },
  {
    name: "Jameson Black Barrel",
    price: "450 MT",
    category: "Whiskey"
  },
  {
    name: "Monkey Shoulder",
    price: "400 MT",
    category: "Whiskey"
  },
  {
    name: "JW Black Label",
    price: "400 MT",
    category: "Whiskey"
  },
  {
    name: "JW Double Black",
    price: "600 MT",
    category: "Whiskey"
  },
  {
    name: "JW Green Label",
    price: "700 MT",
    category: "Whiskey"
  },
  {
    name: "JW Blue Label",
    price: "1.950 MT",
    category: "Whiskey"
  },
  {
    name: "Glenfiddich 12 Anos",
    price: "400 MT",
    category: "Whiskey"
  },
  {
    name: "Glenfiddich 15 Anos",
    price: "500 MT",
    category: "Whiskey"
  },
  {
    name: "Glenfiddich 18 anos",
    price: "1.250 MT",
    category: "Whiskey"
  },
  {
    name: "Macallan 12 anos",
    price: "1.000 MT",
    category: "Whiskey"
  },
  {
    name: "Glenlivet Founders",
    price: "450 MT",
    category: "Whiskey"
  },
  {
    name: "Balvenie 12 Anos",
    price: "950 MT",
    category: "Whiskey"
  },
  {
    name: "Caol lla 12 anos",
    price: "1.200 MT",
    category: "Whiskey"
  },
  {
    name: "J.Daniels Single Cask",
    price: "1.200 MT",
    category: "Whiskey"
  },
  {
    name: "Absolut",
    price: "350 MT",
    category: "Vodka"
  },
  {
    name: "Ciroc",
    price: "400 MT",
    category: "Vodka"
  },
  {
    name: "Grey Goose",
    price: "500 MT",
    category: "Vodka"
  },
  {
    name: "Belvedere",
    price: "600 MT",
    category: "Vodka"
  },
  {
    name: "Bombay",
    price: "350 MT",
    category: "Gin"
  },
  {
    name: "Tanqueray",
    price: "400 MT",
    category: "Gin"
  },
  {
    name: "Star Bombay",
    price: "450 MT",
    category: "Gin"
  },
  {
    name: "Hendrick's",
    price: "600 MT",
    category: "Gin"
  },
  {
    name: "Tacos Vegetarianos",
    price: "750 MT",
    category: "Tacos",
    description: "3 Tacos de Legumes Salteados em Soja c/ Alho, Cebola, Pimentos, Cenoura, Feijão Verde, Repolho Roxo & Mozzarella"
  },
  {
    name: "Tacos Frango",
    price: "850 MT",
    category: "Tacos",
    description: "3 Tacos de Frango Grelhado c/ Abacate, Alface Trinchado, Milho, Cebola Roxa, Cheddar & Mozzarella"
  },
  {
    name: "Tacos Chilli de Carne",
    price: "950 MT",
    category: "Tacos",
    description: "3 Tacos de Carne Moída Salteada c/ Alho, Cebola, Tomate, Pimentos, Jalapeños, Cheddar & Mozzarella"
  },
  {
    name: "Tacos Atum Fresco",
    price: "980 MT",
    category: "Tacos",
    description: "3 Tacos de Atum Fresco Braseado c/ Sementes de Sésamo, Cebola, Tomate, Pimentos, Glaze Balsâmico, Cheddar & Mozzarella"
  },
  {
    name: "Tacos Salmão",
    price: "1.300 MT",
    category: "Tacos",
    description: "3 Tacos de Salmão Fumado, Abacate, Cebola Roxa, Limão, Queijo Créme, Cheddar & Mozzarella"
  },
  {
    name: "Burrito Bowl",
    price: "850 MT",
    category: "Bowls"
  },
  {
    name: "Chicken Tika Bowl",
    price: "900 MT",
    category: "Bowls"
  },
  {
    name: "Lebanese Bowl",
    price: "900 MT",
    category: "Bowls"
  },
  {
    name: "Chinese Bowl",
    price: "980 MT",
    category: "Bowls"
  },
  {
    name: "Foccacia c/ Alho",
    price: "650 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Margarita",
    price: "850 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Regina",
    price: "950 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Vegetariana",
    price: "1.150 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Chicken Tika",
    price: "1.100 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Havaiana",
    price: "1.300 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Tonno & Oliva",
    price: "1.300 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza BBQ Chicken",
    price: "1.100 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Pepperoni",
    price: "1.250 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Mexicana",
    price: "1.350 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Amantes Carne",
    price: "1.600 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza do Mar",
    price: "1.600 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza Amantes Queijo",
    price: "1.700 MT",
    category: "Pizzas"
  },
  {
    name: "Pizza de Chocolate",
    price: "800 MT",
    category: "Pizzas"
  },
  {
    name: "Frango / Carne / Atum / Camarão / Peperoni",
    price: "250 MT",
    category: "Extra Ingredientes Pizzas"
  },
  {
    name: "Peixinhos da Horta",
    price: "650 MT",
    category: "Tapas"
  },
  {
    name: "Nachos",
    price: "650 MT",
    category: "Tapas"
  },
  {
    name: "Chamussa Queijo & Mel",
    price: "750 MT",
    category: "Tapas"
  },
  {
    name: "Lulas Alhinho",
    price: "750 MT",
    category: "Tapas"
  },
  {
    name: "Tempura de Camarão",
    price: "900 MT",
    category: "Tapas"
  },
  {
    name: "Pica Pau Alcatra",
    price: "925 MT",
    category: "Tapas"
  },
  {
    name: "Camarão ao Guilho",
    price: "975 MT",
    category: "Tapas"
  },
  {
    name: "Baguete Alho & Queijo",
    price: "350 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Casquinhas de Batata",
    price: "350 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Batata Harra c/ Ervas",
    price: "350 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Aros de Cebola",
    price: "350 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Asinhas de Frango",
    price: "550 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Tiras de Frango",
    price: "600 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Dedos de Mozzarella",
    price: "600 MT",
    category: "Bite'zinhos"
  },
  {
    name: "Salada Mista",
    price: "250 MT",
    category: "Acompanhamentos"
  },
  {
    name: "Batata Frita",
    price: "250 MT",
    category: "Acompanhamentos"
  },
  {
    name: "Batata Cozida",
    price: "250 MT",
    category: "Acompanhamentos"
  },
  {
    name: "Arroz Basmati",
    price: "250 MT",
    category: "Acompanhamentos"
  },
  {
    name: "Arroz de Legumes",
    price: "300 MT",
    category: "Acompanhamentos"
  },
  {
    name: "Legumes Salteados",
    price: "300 MT",
    category: "Acompanhamentos"
  },
  {
    name: "Carioca Limão",
    price: "150 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Chás Diversos",
    price: "150 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Chá c/ Leite",
    price: "180 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Carioca Café",
    price: "100 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Café Espresso",
    price: "100 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Descafeinado",
    price: "150 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Garoto",
    price: "120 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Garoto Descaf.",
    price: "150 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Abatanado",
    price: "180 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Abatanado Descaf.",
    price: "200 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Duplo Espresso",
    price: "180 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Meia de Leite",
    price: "180 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Meia de Leite Descaf.",
    price: "200 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Galão",
    price: "200 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Galão Descaf.",
    price: "220 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Hot Chocolate",
    price: "250 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Cappuccino",
    price: "300 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Moccaccino",
    price: "300 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Substituição de Leite",
    price: "+80 MT",
    category: "Bebidas Quentes"
  },
  {
    name: "Água 50cl",
    price: "90 MT",
    category: "Águas"
  },
  {
    name: "Água c/ Gás Namaa",
    price: "160 MT",
    category: "Águas"
  },
  {
    name: "Água Tónica",
    price: "170 MT",
    category: "Águas"
  },
  {
    name: "Água Pedras",
    price: "280 MT",
    category: "Águas"
  },
  {
    name: "Água Pedras Sabor",
    price: "280 MT",
    category: "Águas"
  },
  {
    name: "Leite Normal",
    price: "80 MT",
    category: "Extras Leite"
  },
  {
    name: "Soja / Côco / Amêndoa",
    price: "150 MT",
    category: "Extras Leite"
  },
  {
    name: "Refrigerante 33cl",
    price: "170 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Refrigerante Diet 33cl",
    price: "180 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Sumol",
    price: "150 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Ginger Ale",
    price: "180 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Minute Maid Lata",
    price: "210 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Ice Tea",
    price: "220 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Red Bull",
    price: "300 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Sumo Natural Fruta",
    price: "400 MT",
    category: "Bebidas Frias"
  },
  {
    name: "Fettuccine al Ragù",
    price: "1.100 MT",
    category: "Carne"
  },
  {
    name: "Lasanha al Ragù",
    price: "1.250 MT",
    category: "Carne"
  },
  {
    name: "Espetada Madeirense",
    price: "1.650 MT",
    category: "Carne"
  },
  {
    name: "Bisté Mexicano",
    price: "1.750 MT",
    category: "Carne"
  },
  {
    name: "Bife á Surf Café",
    price: "1.900 MT",
    category: "Carne"
  },
  {
    name: "Tornedó à Dijon",
    price: "2.400 MT",
    category: "Carne"
  },
  {
    name: "Trinchado à Pimenta",
    price: "2.100 MT",
    category: "Carne"
  },
  {
    name: "Picanha ao Alho",
    price: "2.300 MT",
    category: "Carne"
  },
  {
    name: "Frango Grelhado — Meio",
    price: "800 MT",
    category: "Frango",
    description: "Frango Grelhado c/ Batata Frita & Salada Mista"
  },
  {
    name: "Frango Grelhado — Inteiro",
    price: "1.350 MT",
    category: "Frango",
    description: "Frango Grelhado c/ Batata Frita & Salada Mista"
  },
  {
    name: "Espetada de Frango",
    price: "950 MT",
    category: "Frango"
  },
  {
    name: "Fettucine Campagnola",
    price: "1.200 MT",
    category: "Frango"
  },
  {
    name: "Strogonoff de Frango",
    price: "1.500 MT",
    category: "Frango"
  },
  {
    name: "Aglio Olio",
    price: "800 MT",
    category: "Vegetariano"
  },
  {
    name: "Fettuccine Arrabiata",
    price: "750 MT",
    category: "Vegetariano"
  },
  {
    name: "Hakka Noodles",
    price: "850 MT",
    category: "Vegetariano"
  },
  {
    name: "Panados de Frango",
    price: "600 MT",
    category: "Menu Infantil"
  },
  {
    name: "Filetes de Peixe",
    price: "650 MT",
    category: "Menu Infantil"
  },
  {
    name: "Massa Bolonhesa",
    price: "700 MT",
    category: "Menu Infantil"
  },
  {
    name: "Queijo / Fiambre / Ovo",
    price: "100 MT",
    category: "Extras"
  },
  {
    name: "Cebola / Milho / Pimento",
    price: "100 MT",
    category: "Extras"
  },
  {
    name: "Banana Frita",
    price: "200 MT",
    category: "Extras"
  },
  {
    name: "Feijão Preto",
    price: "250 MT",
    category: "Extras"
  },
  {
    name: "Lulas Grelhadas",
    price: "1.500 MT",
    category: "Peixe"
  },
  {
    name: "Bacalhau á Brás",
    price: "1.450 MT",
    category: "Peixe"
  },
  {
    name: "Atum Braseado",
    price: "1.750 MT",
    category: "Peixe"
  },
  {
    name: "Lascas de Bacalhau",
    price: "2.100 MT",
    category: "Peixe"
  },
  {
    name: "Peixe do Dia Escalado por KG",
    price: "2.450 MT",
    category: "Peixe"
  },
  {
    name: "Espetada de Lula, Peixe & Camarão",
    price: "1.600 MT",
    category: "Marisco"
  },
  {
    name: "Arroz de Gambas",
    price: "1.650 MT",
    category: "Marisco"
  },
  {
    name: "Camarão da Frigideira",
    price: "1.800 MT",
    category: "Marisco"
  },
  {
    name: "Camarão Grelhado",
    price: "1.850 MT",
    category: "Marisco"
  },
  {
    name: "Arroz do Mar",
    price: "2.200 MT",
    category: "Marisco"
  },
  {
    name: "Prego de Frango",
    price: "650 MT",
    category: "Pregos"
  },
  {
    name: "Prego Preguiçoso",
    price: "800 MT",
    category: "Pregos"
  },
  {
    name: "Prego Alcatra",
    price: "850 MT",
    category: "Pregos"
  },
  {
    name: "Prego Completo",
    price: "925 MT",
    category: "Pregos"
  },
  {
    name: "Prego Picanha",
    price: "1.150 MT",
    category: "Pregos"
  },
  {
    name: "Prego no Prato",
    price: "1.200 MT",
    category: "Pregos"
  },
  {
    name: "Prego Fillett Mignon",
    price: "1.250 MT",
    category: "Pregos"
  },
  {
    name: "Cachoro Quente",
    price: "550 MT",
    category: "Burguers"
  },
  {
    name: "Burguer de Frango",
    price: "850 MT",
    category: "Burguers"
  },
  {
    name: "Burguer Cheddar",
    price: "850 MT",
    category: "Burguers"
  },
  {
    name: "Burguer no Prato",
    price: "950 MT",
    category: "Burguers"
  },
  {
    name: "Burguer Completo",
    price: "975 MT",
    category: "Burguers"
  },
  {
    name: "Burguer Picanha",
    price: "1.100 MT",
    category: "Burguers"
  },
  {
    name: "Wrap Mexicano",
    price: "750 MT",
    category: "Tostadas à Surf"
  },
  {
    name: "Wrap de Atum",
    price: "800 MT",
    category: "Tostadas à Surf"
  },
  {
    name: "Roast Beef",
    price: "800 MT",
    category: "Tostadas à Surf"
  },
  {
    name: "Club de Frango",
    price: "890 MT",
    category: "Tostadas à Surf"
  },
  {
    name: "Shwarma Misto",
    price: "900 MT",
    category: "Tostadas à Surf"
  },
  {
    name: "Wrap Butter Chicken",
    price: "700 MT",
    category: "Sandes Saudáveis"
  },
  {
    name: "Bruschetta de Macon",
    price: "750 MT",
    category: "Sandes Saudáveis"
  },
  {
    name: "Frango Supremo",
    price: "850 MT",
    category: "Sandes Saudáveis"
  },
  {
    name: "Abacate & Frango",
    price: "850 MT",
    category: "Sandes Saudáveis"
  },
  {
    name: "Bagel de Salmão",
    price: "1.400 MT",
    category: "Sandes Saudáveis"
  },
  {
    name: "Ovos Estrelados",
    price: "375 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Ovos Mexidos",
    price: "400 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Ovos Escalfados",
    price: "450 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Omelete Simples",
    price: "450 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Omelete c/ Queijo",
    price: "500 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Omelete c/ Fiambre",
    price: "500 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Omelete Mista",
    price: "550 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Omelete Atum & Queijo",
    price: "800 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "French Toast, Mel & Frutos Tropicais",
    price: "700 MT",
    category: "Pequeno Almoço"
  },
  {
    name: "Iogurte Grego, Frutos Tropicais & Granola",
    price: "600 MT",
    category: "Brunch à Carta"
  },
  {
    name: "Abacate & Macon",
    price: "800 MT",
    category: "Brunch à Carta"
  },
  {
    name: "English Breakfast",
    price: "850 MT",
    category: "Brunch à Carta"
  },
  {
    name: "Eggs Florentine",
    price: "850 MT",
    category: "Brunch à Carta"
  },
  {
    name: "Eggs Benedict",
    price: "900 MT",
    category: "Brunch à Carta"
  },
  {
    name: "Eggs Royale",
    price: "1.250 MT",
    category: "Brunch à Carta"
  },
  {
    name: "Casa da Malta 25cl",
    price: "450 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Casa da Malta 75cl",
    price: "1.350 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Arroba Pias",
    price: "1.350 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Frontera Cabernet",
    price: "1.500 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Nederburg 56",
    price: "1.850 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Marquês C. Concha",
    price: "2.800 MT",
    category: "Vinho Tinto"
  },
  {
    name: "EA",
    price: "2.400 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Nederb. Winemaster",
    price: "2.400 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Carm Douro",
    price: "3.900 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Marquês Borba Res.",
    price: "4.500 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Vallado Douro 2012",
    price: "4.900 MT",
    category: "Vinho Tinto"
  },
  {
    name: "Arroba Pias",
    price: "400 MT",
    category: "Vinho Tinto Copo"
  },
  {
    name: "Arroba Pias",
    price: "400 MT",
    category: "Vinho Branco Copo"
  },
  {
    name: "Fleur Du Cap",
    price: "1.400 MT",
    category: "Vinho Branco"
  },
  {
    name: "Frontera Sauvignon",
    price: "1.500 MT",
    category: "Vinho Branco"
  },
  {
    name: "Adega de Borba",
    price: "1.950 MT",
    category: "Vinho Branco"
  },
  {
    name: "Esporão Verdelho",
    price: "3.500 MT",
    category: "Vinho Branco"
  },
  {
    name: "Casal Garcia Verde",
    price: "1.800 MT",
    category: "Vinho Rosé & Verde"
  },
  {
    name: "Mateus Rosé",
    price: "1.950 MT",
    category: "Vinho Rosé & Verde"
  },
  {
    name: "Dona Antónia",
    price: "1.000 MT",
    category: "Vinho do Porto Copo"
  },
  {
    name: "Baunilha",
    price: "350 MT",
    category: "Milkshakes"
  },
  {
    name: "Morango",
    price: "350 MT",
    category: "Milkshakes"
  },
  {
    name: "Chocolate",
    price: "350 MT",
    category: "Milkshakes"
  },
  {
    name: "Banana",
    price: "380 MT",
    category: "Milkshakes"
  },
  {
    name: "Banana & Morango",
    price: "400 MT",
    category: "Milkshakes"
  },
  {
    name: "Baunilha & Oreo",
    price: "450 MT",
    category: "Milkshakes"
  },
  {
    name: "Morango & Marshmallows",
    price: "450 MT",
    category: "Milkshakes"
  },
  {
    name: "Tropical",
    price: "450 MT",
    category: "Smoothies",
    description: "Banana, Espinafres, Laranja & Ananás"
  },
  {
    name: "Chiango",
    price: "500 MT",
    category: "Smoothies",
    description: "Banana, Morango & Sementes de Chia"
  },
  {
    name: "Amêndonela",
    price: "550 MT",
    category: "Smoothies",
    description: "Manteiga Amendoin, Banana, Canela"
  },
  {
    name: "Limonada Surf",
    price: "550 MT",
    category: "Bebidas Frescas"
  },
  {
    name: "Coke Float",
    price: "350 MT",
    category: "Bebidas Frescas"
  },
  {
    name: "Iced Coffee",
    price: "350 MT",
    category: "Bebidas Frescas"
  },
  {
    name: "Iced Latté",
    price: "350 MT",
    category: "Bebidas Frescas"
  },
  {
    name: "Vanilla Iced Latté",
    price: "400 MT",
    category: "Bebidas Frescas"
  },
  {
    name: "Anacana",
    price: "550 MT",
    category: "Bebidas Frescas",
    description: "Ananás, Leite de Côco & Banana"
  },
  {
    name: "Verdinha",
    price: "550 MT",
    category: "Bebidas Frescas",
    description: "Espinafres, Laranja, Pêra de Abacate, Banana & Pepino"
  },
  {
    name: "Imperial 2M",
    price: "120 MT",
    category: "Cervejas"
  },
  {
    name: "Imperial 2M Grande",
    price: "180 MT",
    category: "Cervejas"
  },
  {
    name: "Stella",
    price: "250 MT",
    category: "Cervejas"
  },
  {
    name: "2M",
    price: "150 MT",
    category: "Cervejas"
  },
  {
    name: "Castle Lite 30cl",
    price: "200 MT",
    category: "Cervejas"
  },
  {
    name: "Laurentina Preta",
    price: "150 MT",
    category: "Cervejas"
  },
  {
    name: "Heineken Mini",
    price: "250 MT",
    category: "Cervejas"
  },
  {
    name: "Super Bock",
    price: "250 MT",
    category: "Cervejas"
  },
  {
    name: "Coronita",
    price: "250 MT",
    category: "Cervejas"
  },
  {
    name: "Mimosa de Laranja",
    price: "650 MT",
    category: "Cocktails"
  },
  {
    name: "Bellinni de Péssego",
    price: "650 MT",
    category: "Cocktails"
  },
  {
    name: "Caipirinha Lima",
    price: "650 MT",
    category: "Cocktails"
  },
  {
    name: "Caipirinha Morango",
    price: "750 MT",
    category: "Cocktails"
  },
  {
    name: "Caipiroska Maracujá",
    price: "750 MT",
    category: "Cocktails"
  },
  {
    name: "Mojito Lima",
    price: "750 MT",
    category: "Cocktails"
  },
  {
    name: "Cuba Libre",
    price: "750 MT",
    category: "Cocktails"
  },
  {
    name: "Old Fashioned",
    price: "850 MT",
    category: "Cocktails"
  },
  {
    name: "Surf Sunset",
    price: "850 MT",
    category: "Cocktails"
  },
  {
    name: "Hunters Gold / Savana",
    price: "250 MT",
    category: "Cidras"
  },
  {
    name: "Brutal Fruit",
    price: "250 MT",
    category: "Cidras"
  },
  {
    name: "Smirnoff Spin",
    price: "200 MT",
    category: "Cidras"
  },
  {
    name: "Breezer Sabor",
    price: "200 MT",
    category: "Cidras"
  },
  {
    name: "Sangria Tinto",
    price: "2.000 MT",
    category: "Sangrias Jarro"
  },
  {
    name: "Sangria Branca",
    price: "2.000 MT",
    category: "Sangrias Jarro"
  },
  {
    name: "Sangria Espumante",
    price: "2.250 MT",
    category: "Sangrias Jarro"
  },
  {
    name: "Pastel Nata",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Bolo Arroz",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Bolo Feijão",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Queque",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Bola Berlim",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Bola Berlim c/ Créme",
    price: "130 MT",
    category: "Pastelaria"
  },
  {
    name: "Donut",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Caracol",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Mil Folhas",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Palmier Simples",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Palmier Recheado",
    price: "130 MT",
    category: "Pastelaria"
  },
  {
    name: "Palmier Coberto",
    price: "130 MT",
    category: "Pastelaria"
  },
  {
    name: "Orelha",
    price: "110 MT",
    category: "Pastelaria"
  },
  {
    name: "Torta",
    price: "130 MT",
    category: "Pastelaria"
  },
  {
    name: "Duchesa",
    price: "190 MT",
    category: "Pastelaria"
  },
  {
    name: "Diversos c/ Créme",
    price: "160 MT",
    category: "Pastelaria"
  },
  {
    name: "Diversos c/ Chocolate",
    price: "190 MT",
    category: "Pastelaria"
  },
  {
    name: "Croissant Brioche",
    price: "130 MT",
    category: "Pastelaria"
  },
  {
    name: "Croissant Folhados",
    price: "130 MT",
    category: "Pastelaria"
  },
  {
    name: "Gelatina de Fruta",
    price: "200 MT",
    category: "Sobremesas"
  },
  {
    name: "Fatia de Molotov",
    price: "200 MT",
    category: "Sobremesas"
  },
  {
    name: "Fruta da Época",
    price: "250 MT",
    category: "Sobremesas"
  },
  {
    name: "Salame de Chocolate",
    price: "250 MT",
    category: "Sobremesas"
  },
  {
    name: "Fatia de Pudim Flan",
    price: "250 MT",
    category: "Sobremesas"
  },
  {
    name: "Fatia Bolo da Casa",
    price: "250 MT",
    category: "Sobremesas"
  },
  {
    name: "Mousse de Chocolate",
    price: "300 MT",
    category: "Sobremesas"
  },
  {
    name: "Taça Gelado 2 Bolas",
    price: "300 MT",
    category: "Sobremesas"
  },
  {
    name: "Taça Gelado 3 Bolas",
    price: "350 MT",
    category: "Sobremesas"
  },
  {
    name: "Salada Fruta",
    price: "350 MT",
    category: "Sobremesas"
  },
  {
    name: "Fatia Bolo Chocolate",
    price: "350 MT",
    category: "Sobremesas"
  },
  {
    name: "Fatia Floresta Negra",
    price: "350 MT",
    category: "Sobremesas"
  },
  {
    name: "Panquecas c/ Nutella",
    price: "400 MT",
    category: "Sobremesas"
  },
  {
    name: "Panquecas c/ Gelado",
    price: "400 MT",
    category: "Sobremesas"
  },
  {
    name: "Arroz Doce Flambé",
    price: "400 MT",
    category: "Sobremesas"
  },
  {
    name: "Fatia Cheesecake",
    price: "400 MT",
    category: "Sobremesas"
  },
  {
    name: "Malibu",
    price: "350 MT",
    category: "Rum & Licor"
  },
  {
    name: "Bacardi",
    price: "350 MT",
    category: "Rum & Licor"
  },
  {
    name: "Amarula",
    price: "350 MT",
    category: "Rum & Licor"
  },
  {
    name: "Beirão",
    price: "350 MT",
    category: "Rum & Licor"
  },
  {
    name: "Peach Schnapps",
    price: "350 MT",
    category: "Rum & Licor"
  },
  {
    name: "Cachaça 51",
    price: "400 MT",
    category: "Rum & Licor"
  },
  {
    name: "Disarono Amaretto",
    price: "400 MT",
    category: "Rum & Licor"
  },
  {
    name: "Triple Sec",
    price: "350 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Hennessy VS",
    price: "600 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Remy Martin VSOP",
    price: "750 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Macieira",
    price: "350 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Fim de Século",
    price: "450 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Martini Russo",
    price: "350 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Martini Bianco",
    price: "350 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Antiqua VSOP",
    price: "500 MT",
    category: "Brandy & Aguardente"
  },
  {
    name: "Patrón Silver",
    price: "650 MT",
    category: "Tequila"
  },
  {
    name: "Jaggermeister",
    price: "250 MT",
    category: "Outros"
  },
  {
    name: "J.C Le Domaine",
    price: "2.000 MT",
    category: "Espumante"
  },
  {
    name: "J.C Le Fleurette",
    price: "2.000 MT",
    category: "Espumante"
  },
  {
    name: "Veuve Clicquot",
    price: "14.950 MT",
    category: "Espumante"
  }
];

export const featuredMenu = menuItems.slice(0, 5);

export const whatsappUrl = (message: string) => `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;
