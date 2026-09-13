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

export const menuCategories = ["Todas", "Especialidades do Chef", "Tacos", "Bowls", "Pizzas", "Tapas / Bite’zinhos", "Acompanhamentos", "Bebidas Quentes", "Águas", "Bebidas Frias", "Carne", "Frango", "Vegetariano", "Menu Infantil", "Peixe", "Pregos", "Burgers", "Tostadas", "Sandes Saudáveis", "Pequeno-Almoço / Brunch", "Milkshakes", "Smoothies", "Bebidas Frescas", "Cervejas", "Cocktails", "Sangrias", "Vinhos", "Pastelaria", "Sobremesas", "Whiskey", "Vodka", "Gin", "Rum & Licor", "Brandy & Aguardente", "Tequila", "Espumante", "Outros"];

export const menuItems: MenuItem[] = [
  { name: "Espetada de Kebab & Frango Marinados", price: "1.350 MT", category: "Especialidades do Chef" },
  { name: "Filetes de Peixe Panados c/ Arroz de Gambas", price: "1.700 MT", category: "Especialidades do Chef" },
  { name: "Tábua Surf & Turf (Para Partilhar)", price: "3.500 MT", category: "Especialidades do Chef" },
  { name: "Tábua de Carnes a Surf (Para Partilhar)", price: "3.800 MT", category: "Especialidades do Chef" },
  { name: "Tábua de Peixe & Marisco 4 Surf (Para Partilhar)", price: "4.500 MT", category: "Especialidades do Chef" },
];

export const featuredMenu = menuItems.slice(0, 5);

export const whatsappUrl = (message: string) => `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;