var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    itemsOrdered: 1,
    totalCost: '$34.00',
    shipTo: 'JS Masher',
    deliveryDate: 'Delivered Aug 8, 2020',
    deliveryComment: null,
    orderNumber: 'Order# 114-3941689-8772232',
    item: [
      {
        itemUrl: 'images/Javascript-for-impatient-programmers.jpg',
        category: 'Books',
        itemName: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindow: 'Return window closed on Sep 7, 2020',
        individualCost: '$31.55'
      }
    ]
  },

  {
    orderPlaced: 'July 19, 2020',
    itemsOrdered: 1,
    totalCost: '$44.53',
    shipTo: 'JS Masher',
    deliveryDate: 'Delivered Jul 20, 2020',
    deliveryComment: 'Your package was delievered. It was handed directly to a resident.',
    orderNumber: 'Order # 113-9984268-1280257',
    item: [
      {
        itemUrl: 'images/the-timless-way-of-building.jpg',
        category: 'Books',
        itemName: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindow: 'Return window closed on Sep 19, 2020',
        individualCost: '$41.33'
      }
    ]
  },
  {
    orderPlaced: 'July 4, 2020',
    itemsOrdered: 1,
    totalCost: '$17.22',
    shipTo: 'JS Masher',
    deliveryDate: 'Delivered Jul 78, 2020',
    deliveryComment: 'Your package was delievered.It was handed directly to a resident.',
    orderNumber: 'Order# 114-2875557-9059409',
    item: [
      {
        itemUrl: 'images/gamecube-controller-adapter.jpg',
        category: 'Electronics',
        itemName: 'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: null,
        returnWindow: 'Return window closed on Sep 25, 2020',
        individualCost: '$15.98'
      }
    ]
  },
  {
    orderPlaced: 'July 3, 2020',
    itemsOrdered: 2,
    totalCost: '$138.93',
    shipTo: 'JS Masher',
    deliveryDate: 'Delivered Jul 5, 2020',
    deliveryComment: null,
    orderNumber: 'Order Number 113-2883177-2648248',
    item: [
      {
        itemUrl: 'images/gamecube-controller-adapter.jpg',
        category: 'Electronics',
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        returnWindow: 'Return window closed on Aug 4, 2020',
        individualCost: '$94.95'
      },
      {
        itemUrl: 'images/the-art-of-sql.png',
        category: 'Books',
        itemName: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        returnWindow: 'Return window closed on Aug 4, 2020',
        individualCost: '33.99'
      }
    ]
  }
];

console.log('the category of the first item of the first order in the list is: ', orderHistory[0].item[0].category);
console.log('the itemName of the first item of the fourth order in the list is: ', orderHistory[3].item[0].itemName);
