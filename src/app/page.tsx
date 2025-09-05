interface MenuItem {
  name: string;
  price: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: string;
}

const menuItems: MenuItem[] = [
  // Biryani
  { name: "Mezbaan Special Biryani", price: 160, calories: 680, protein: 32, carbs: 85, fat: 20, category: "Biryani" },
  { name: "Chicken Dum Biryani (with Aloo)", price: 150, calories: 650, protein: 30, carbs: 80, fat: 18, category: "Biryani" },
  { name: "Chicken Hyderabadi Biryani", price: 150, calories: 700, protein: 34, carbs: 90, fat: 22, category: "Biryani" },
  { name: "Egg Biryani", price: 110, calories: 550, protein: 22, carbs: 70, fat: 15, category: "Biryani" },
  { name: "Mutton Biryani (Sunday Special)", price: 280, calories: 850, protein: 40, carbs: 95, fat: 28, category: "Biryani" },
  
  // Rolls & Kebab
  { name: "Chicken Roll", price: 80, calories: 380, protein: 18, carbs: 40, fat: 12, category: "Rolls & Kebab" },
  { name: "Chicken Egg Roll", price: 100, calories: 420, protein: 20, carbs: 42, fat: 14, category: "Rolls & Kebab" },
  { name: "Chicken Double Egg Roll", price: 110, calories: 460, protein: 22, carbs: 45, fat: 15, category: "Rolls & Kebab" },
  { name: "Double Chicken Roll", price: 140, calories: 500, protein: 28, carbs: 48, fat: 16, category: "Rolls & Kebab" },
  { name: "Double Chicken Egg Roll", price: 150, calories: 520, protein: 30, carbs: 50, fat: 17, category: "Rolls & Kebab" },
  { name: "Double Chicken Double Egg Roll", price: 160, calories: 560, protein: 32, carbs: 52, fat: 18, category: "Rolls & Kebab" },
  { name: "Egg Roll", price: 60, calories: 300, protein: 12, carbs: 35, fat: 9, category: "Rolls & Kebab" },
  { name: "Double Egg Roll", price: 70, calories: 350, protein: 16, carbs: 38, fat: 11, category: "Rolls & Kebab" },
  { name: "Veg. Masala Egg Roll", price: 80, calories: 370, protein: 14, carbs: 40, fat: 10, category: "Rolls & Kebab" },
  { name: "Paneer Egg Roll", price: 100, calories: 400, protein: 18, carbs: 42, fat: 12, category: "Rolls & Kebab" },
  { name: "Paneer Roll", price: 80, calories: 380, protein: 16, carbs: 40, fat: 11, category: "Rolls & Kebab" },
  { name: "Double Paneer Roll", price: 140, calories: 480, protein: 22, carbs: 45, fat: 15, category: "Rolls & Kebab" },
  { name: "Veg. Masala Roll", price: 70, calories: 320, protein: 10, carbs: 38, fat: 8, category: "Rolls & Kebab" },
  { name: "Mix Veg. Paneer Roll", price: 110, calories: 430, protein: 20, carbs: 44, fat: 13, category: "Rolls & Kebab" },
  { name: "Mezbaan Special Jumbo Roll", price: 280, calories: 750, protein: 36, carbs: 82, fat: 24, category: "Rolls & Kebab" },
  { name: "Chicken Fry Kabab", price: 160, calories: 450, protein: 28, carbs: 20, fat: 22, category: "Rolls & Kebab" },
  { name: "Egg Omlet (Half)", price: 30, calories: 150, protein: 8, carbs: 2, fat: 10, category: "Rolls & Kebab" },
  { name: "Egg Omlet (Full)", price: 50, calories: 250, protein: 14, carbs: 4, fat: 18, category: "Rolls & Kebab" },
  
  // Mughlai & Bread
  { name: "Egg Mughlai Paratha", price: 120, calories: 420, protein: 16, carbs: 48, fat: 14, category: "Mughlai & Bread" },
  { name: "Double Egg Mughlai Paratha", price: 130, calories: 460, protein: 20, carbs: 52, fat: 15, category: "Mughlai & Bread" },
  { name: "Chicken Egg Mughlai Paratha", price: 160, calories: 520, protein: 26, carbs: 55, fat: 18, category: "Mughlai & Bread" },
  { name: "Lachha Paratha", price: 35, calories: 200, protein: 4, carbs: 30, fat: 8, category: "Mughlai & Bread" },
  
  // Gravy
  { name: "Chicken Chaap", price: 150, calories: 480, protein: 26, carbs: 18, fat: 30, category: "Gravy" },
  { name: "Chicken Kosha", price: 150, calories: 500, protein: 28, carbs: 20, fat: 32, category: "Gravy" },
  
  // Mezbaan Combo Specials
  { name: "Chicken Chaap & Lachha Paratha Combo", price: 170, calories: 650, protein: 30, carbs: 50, fat: 24, category: "Mezbaan Combo Specials" },
  { name: "Egg Omlet & Lachha Paratha Combo", price: 70, calories: 400, protein: 18, carbs: 36, fat: 14, category: "Mezbaan Combo Specials" },
  { name: "Chicken Kosha & Lachha Paratha Combo", price: 170, calories: 670, protein: 32, carbs: 52, fat: 26, category: "Mezbaan Combo Specials" },
  
  // Desserts
  { name: "Firni", price: 60, calories: 280, protein: 6, carbs: 45, fat: 8, category: "Desserts" }
];

const categories = ["Biryani", "Rolls & Kebab", "Mughlai & Bread", "Gravy", "Mezbaan Combo Specials", "Desserts"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-red-900 text-white py-12 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">Mezbaan Biryani & Rolls</h1>
        <p className="text-xl md:text-2xl text-red-100 font-light">Relish the Delicacy of Kolkata Biryani</p>
      </header>

      {/* Menu Section */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {categories.map((category) => (
          <section key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-red-700 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-red-700 rounded-full"></span>
              {category}
            </h2>
            <div className="space-y-3">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200 hover:border-red-300 hover:scale-[1.01]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{item.name}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-2xl font-bold text-red-700">₹{item.price}</span>
                          <span className="text-gray-600 bg-gray-50 px-2 py-1 rounded">{item.calories} kcal</span>
                          <div className="flex gap-3 text-gray-600">
                            <span className="bg-blue-50 px-2 py-1 rounded text-blue-700">P: {item.protein}g</span>
                            <span className="bg-green-50 px-2 py-1 rounded text-green-700">C: {item.carbs}g</span>
                            <span className="bg-yellow-50 px-2 py-1 rounded text-yellow-700">F: {item.fat}g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Find Us</h2>
          <div className="flex justify-center">
            <a
              href="https://share.google/V5vvWrosuYZE61KsU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              View on Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-3 text-gray-200">Stall Timings</h3>
          <p className="text-gray-400 mb-6">Everyday, 11:30 AM – 11:30 PM</p>
          
          {/* Company Advertisement Section */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-500 text-sm font-medium">
                Digital Menu crafted with precision by <a href="https://www.lazlle.studio/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Lazlle & Co.</a>
              </p>
              <p className="text-gray-600 text-xs">
                Professional QR Code Menu Solutions for Restaurants
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}