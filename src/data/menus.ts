export const menus = {
  cscheme: {
    name: 'C-Scheme',
    categories: [
      {
        tab: 'Coffee',
        title: 'Coffee',
        note: 'All espresso drinks available with oat / almond milk at ₹40 extra',
        items: [
          { name: 'Espresso', price: 120, desc: 'Double shot, dark roast' },
          { name: 'Americano', price: 150 },
          { name: 'Cappuccino', price: 180 },
          { name: 'Flat White', price: 200 },
          { name: 'Latte', price: 190 },
          { name: 'Cortado', price: 170 },
          { name: 'Mocha', price: 210, desc: 'Dark chocolate, espresso, steamed milk' },
          { name: 'Cold Brew', price: 220, desc: '18-hour slow brew, served over ice' },
          { name: 'Iced Latte', price: 200 },
          { name: 'Filter Coffee', price: 130, desc: 'South Indian drip, decoction & milk' },
          { name: 'Affogato', price: 230, desc: 'Vanilla gelato drowned in espresso' },
          { name: 'Signature Town Brew', price: 250, desc: 'House blend, cardamom-infused milk foam' },
        ],
      },
      {
        tab: 'Tea & More',
        title: 'Tea & Infusions',
        subsections: [
          {
            title: 'Hot Tea',
            items: [
              { name: 'Masala Chai', price: 90, desc: 'Ginger, cardamom, cloves' },
              { name: 'Darjeeling First Flush', price: 150 },
              { name: 'Green Tea', price: 120 },
              { name: 'Chamomile', price: 130 },
              { name: 'Earl Grey', price: 130 },
            ],
          },
          {
            title: 'Cold Drinks',
            items: [
              { name: 'Iced Matcha Latte', price: 210 },
              { name: 'Mango Lassi', price: 160 },
              { name: 'Fresh Lime Soda', price: 100 },
              { name: 'Sparkling Water', price: 80 },
            ],
          },
        ],
      },
      {
        tab: 'Food',
        title: 'All Day Food',
        note: 'Served 8 AM – 10 PM',
        subsections: [
          {
            title: 'Breakfast & Brunch',
            items: [
              { name: 'Avocado Toast', price: 240, desc: 'Sourdough, cherry tomatoes, chilli flakes' },
              { name: 'Eggs Benedict', price: 280, desc: 'Poached eggs, hollandaise, ham on English muffin' },
              { name: 'Acai Bowl', price: 260, desc: 'Granola, banana, honey drizzle' },
              { name: 'French Toast', price: 220, desc: 'Brioche, maple syrup, fresh berries' },
              { name: 'Masala Omelette', price: 180 },
            ],
          },
          {
            title: 'Snacks & Mains',
            items: [
              { name: 'Grilled Sandwich', price: 200, desc: 'Cheese, tomato, basil pesto' },
              { name: 'Pasta Aglio e Olio', price: 280 },
              { name: 'Caesar Salad', price: 240 },
              { name: 'Margherita Pizza', price: 320, desc: 'Thin crust, San Marzano tomato, mozzarella' },
              { name: 'Quiche of the Day', price: 230 },
            ],
          },
        ],
        note2: '★ Chef recommends pairing the Town Brew with Avocado Toast',
      },
      {
        tab: 'Desserts',
        title: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: 260, desc: 'Served warm with vanilla gelato' },
          { name: 'Tiramisu', price: 240 },
          { name: 'Cheesecake', price: 220, desc: 'New York style, berry coulis' },
          { name: 'Croissant', price: 120, desc: 'Butter, freshly baked' },
          { name: 'Banana Bread', price: 140 },
          { name: 'Macarons (4 pcs)', price: 180 },
        ],
      },
    ],
  },

  malviya: {
    name: 'Malviya Nagar',
    categories: [
      {
        tab: 'Coffee',
        title: 'Coffee',
        note: 'All espresso drinks available with oat / almond milk at ₹40 extra',
        items: [
          { name: 'Espresso', price: 120, desc: 'Double shot, dark roast' },
          { name: 'Americano', price: 150 },
          { name: 'Cappuccino', price: 180 },
          { name: 'Flat White', price: 200 },
          { name: 'Latte', price: 190 },
          { name: 'Cortado', price: 170 },
          { name: 'Mocha', price: 210, desc: 'Dark chocolate, espresso, steamed milk' },
          { name: 'Cold Brew', price: 220, desc: '18-hour slow brew, served over ice' },
          { name: 'Iced Latte', price: 200 },
          { name: 'Filter Coffee', price: 130, desc: 'South Indian drip, decoction & milk' },
          { name: 'Affogato', price: 230, desc: 'Vanilla gelato drowned in espresso' },
          { name: 'Signature Town Brew', price: 250, desc: 'House blend, cardamom-infused milk foam' },
        ],
      },
      {
        tab: 'Tea & More',
        title: 'Tea & Infusions',
        subsections: [
          {
            title: 'Hot Tea',
            items: [
              { name: 'Masala Chai', price: 90, desc: 'Ginger, cardamom, cloves' },
              { name: 'Darjeeling First Flush', price: 150 },
              { name: 'Green Tea', price: 120 },
              { name: 'Chamomile', price: 130 },
              { name: 'Earl Grey', price: 130 },
            ],
          },
          {
            title: 'Cold Drinks',
            items: [
              { name: 'Iced Matcha Latte', price: 210 },
              { name: 'Mango Lassi', price: 160 },
              { name: 'Fresh Lime Soda', price: 100 },
              { name: 'Sparkling Water', price: 80 },
            ],
          },
        ],
      },
      {
        tab: 'Food',
        title: 'All Day Food',
        note: 'Served 8 AM – 10 PM',
        subsections: [
          {
            title: 'Breakfast & Brunch',
            items: [
              { name: 'Avocado Toast', price: 240, desc: 'Sourdough, cherry tomatoes, chilli flakes' },
              { name: 'Eggs Benedict', price: 280, desc: 'Poached eggs, hollandaise, ham on English muffin' },
              { name: 'Acai Bowl', price: 260, desc: 'Granola, banana, honey drizzle' },
              { name: 'French Toast', price: 220, desc: 'Brioche, maple syrup, fresh berries' },
              { name: 'Masala Omelette', price: 180 },
            ],
          },
          {
            title: 'Snacks & Mains',
            items: [
              { name: 'Grilled Sandwich', price: 200, desc: 'Cheese, tomato, basil pesto' },
              { name: 'Pasta Aglio e Olio', price: 280 },
              { name: 'Caesar Salad', price: 240 },
              { name: 'Margherita Pizza', price: 320, desc: 'Thin crust, San Marzano tomato, mozzarella' },
              { name: 'Quiche of the Day', price: 230 },
            ],
          },
        ],
      },
      {
        tab: 'Desserts',
        title: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: 260, desc: 'Served warm with vanilla gelato' },
          { name: 'Tiramisu', price: 240 },
          { name: 'Cheesecake', price: 220, desc: 'New York style, berry coulis' },
          { name: 'Croissant', price: 120, desc: 'Butter, freshly baked' },
          { name: 'Banana Bread', price: 140 },
          { name: 'Macarons (4 pcs)', price: 180 },
        ],
      },
    ],
  },

  vidyut: {
    name: 'Vidyut Nagar',
    categories: [
      {
        tab: 'Coffee',
        title: 'Coffee',
        note: 'All espresso drinks available with oat / almond milk at ₹40 extra',
        items: [
          { name: 'Espresso', price: 120, desc: 'Double shot, dark roast' },
          { name: 'Americano', price: 150 },
          { name: 'Cappuccino', price: 180 },
          { name: 'Flat White', price: 200 },
          { name: 'Latte', price: 190 },
          { name: 'Cortado', price: 170 },
          { name: 'Mocha', price: 210, desc: 'Dark chocolate, espresso, steamed milk' },
          { name: 'Cold Brew', price: 220, desc: '18-hour slow brew, served over ice' },
          { name: 'Iced Latte', price: 200 },
          { name: 'Filter Coffee', price: 130, desc: 'South Indian drip, decoction & milk' },
          { name: 'Affogato', price: 230, desc: 'Vanilla gelato drowned in espresso' },
          { name: 'Signature Town Brew', price: 250, desc: 'House blend, cardamom-infused milk foam' },
        ],
      },
      {
        tab: 'Tea & More',
        title: 'Tea & Infusions',
        subsections: [
          {
            title: 'Hot Tea',
            items: [
              { name: 'Masala Chai', price: 90, desc: 'Ginger, cardamom, cloves' },
              { name: 'Darjeeling First Flush', price: 150 },
              { name: 'Green Tea', price: 120 },
              { name: 'Chamomile', price: 130 },
              { name: 'Earl Grey', price: 130 },
            ],
          },
          {
            title: 'Cold Drinks',
            items: [
              { name: 'Iced Matcha Latte', price: 210 },
              { name: 'Mango Lassi', price: 160 },
              { name: 'Fresh Lime Soda', price: 100 },
              { name: 'Sparkling Water', price: 80 },
            ],
          },
        ],
      },
      {
        tab: 'Food',
        title: 'All Day Food',
        note: 'Served 8 AM – 10 PM',
        subsections: [
          {
            title: 'Breakfast & Brunch',
            items: [
              { name: 'Avocado Toast', price: 240, desc: 'Sourdough, cherry tomatoes, chilli flakes' },
              { name: 'Eggs Benedict', price: 280, desc: 'Poached eggs, hollandaise, ham on English muffin' },
              { name: 'Acai Bowl', price: 260, desc: 'Granola, banana, honey drizzle' },
              { name: 'French Toast', price: 220, desc: 'Brioche, maple syrup, fresh berries' },
              { name: 'Masala Omelette', price: 180 },
            ],
          },
          {
            title: 'Snacks & Mains',
            items: [
              { name: 'Grilled Sandwich', price: 200, desc: 'Cheese, tomato, basil pesto' },
              { name: 'Pasta Aglio e Olio', price: 280 },
              { name: 'Caesar Salad', price: 240 },
              { name: 'Margherita Pizza', price: 320, desc: 'Thin crust, San Marzano tomato, mozzarella' },
              { name: 'Quiche of the Day', price: 230 },
            ],
          },
        ],
      },
      {
        tab: 'Desserts',
        title: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: 260, desc: 'Served warm with vanilla gelato' },
          { name: 'Tiramisu', price: 240 },
          { name: 'Cheesecake', price: 220, desc: 'New York style, berry coulis' },
          { name: 'Croissant', price: 120, desc: 'Butter, freshly baked' },
          { name: 'Banana Bread', price: 140 },
          { name: 'Macarons (4 pcs)', price: 180 },
        ],
      },
    ],
  },

  sirsi: {
    name: 'Sirsi Road',
    categories: [
      {
        tab: 'Coffee',
        title: 'Coffee',
        note: 'All espresso drinks available with oat / almond milk at ₹40 extra',
        items: [
          { name: 'Espresso', price: 120, desc: 'Double shot, dark roast' },
          { name: 'Americano', price: 150 },
          { name: 'Cappuccino', price: 180 },
          { name: 'Flat White', price: 200 },
          { name: 'Latte', price: 190 },
          { name: 'Cortado', price: 170 },
          { name: 'Mocha', price: 210, desc: 'Dark chocolate, espresso, steamed milk' },
          { name: 'Cold Brew', price: 220, desc: '18-hour slow brew, served over ice' },
          { name: 'Iced Latte', price: 200 },
          { name: 'Filter Coffee', price: 130, desc: 'South Indian drip, decoction & milk' },
          { name: 'Affogato', price: 230, desc: 'Vanilla gelato drowned in espresso' },
          { name: 'Signature Town Brew', price: 250, desc: 'House blend, cardamom-infused milk foam' },
        ],
      },
      {
        tab: 'Tea & More',
        title: 'Tea & Infusions',
        subsections: [
          {
            title: 'Hot Tea',
            items: [
              { name: 'Masala Chai', price: 90, desc: 'Ginger, cardamom, cloves' },
              { name: 'Darjeeling First Flush', price: 150 },
              { name: 'Green Tea', price: 120 },
              { name: 'Chamomile', price: 130 },
              { name: 'Earl Grey', price: 130 },
            ],
          },
          {
            title: 'Cold Drinks',
            items: [
              { name: 'Iced Matcha Latte', price: 210 },
              { name: 'Mango Lassi', price: 160 },
              { name: 'Fresh Lime Soda', price: 100 },
              { name: 'Sparkling Water', price: 80 },
            ],
          },
        ],
      },
      {
        tab: 'Food',
        title: 'All Day Food',
        note: 'Served 8 AM – 10 PM',
        subsections: [
          {
            title: 'Breakfast & Brunch',
            items: [
              { name: 'Avocado Toast', price: 240, desc: 'Sourdough, cherry tomatoes, chilli flakes' },
              { name: 'Eggs Benedict', price: 280, desc: 'Poached eggs, hollandaise, ham on English muffin' },
              { name: 'Acai Bowl', price: 260, desc: 'Granola, banana, honey drizzle' },
              { name: 'French Toast', price: 220, desc: 'Brioche, maple syrup, fresh berries' },
              { name: 'Masala Omelette', price: 180 },
            ],
          },
          {
            title: 'Snacks & Mains',
            items: [
              { name: 'Grilled Sandwich', price: 200, desc: 'Cheese, tomato, basil pesto' },
              { name: 'Pasta Aglio e Olio', price: 280 },
              { name: 'Caesar Salad', price: 240 },
              { name: 'Margherita Pizza', price: 320, desc: 'Thin crust, San Marzano tomato, mozzarella' },
              { name: 'Quiche of the Day', price: 230 },
            ],
          },
        ],
      },
      {
        tab: 'Desserts',
        title: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: 260, desc: 'Served warm with vanilla gelato' },
          { name: 'Tiramisu', price: 240 },
          { name: 'Cheesecake', price: 220, desc: 'New York style, berry coulis' },
          { name: 'Croissant', price: 120, desc: 'Butter, freshly baked' },
          { name: 'Banana Bread', price: 140 },
          { name: 'Macarons (4 pcs)', price: 180 },
        ],
      },
    ],
  },
} as const;
