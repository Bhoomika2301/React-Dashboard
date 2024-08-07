// Sample data for orders
const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: 124.00, status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: 305.02, status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: 54.88, status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: 56.00, status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: 545.00, status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: 128.20, status: 'Delivered' }
];

// Sample data for customer feedback
const feedback = [
    {
        customer: 'Jenny Wilson',
        rating: 5,
        comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
    },
    {
        customer: 'Dianne Russell',
        rating: 4,
        comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
    },
    {
        customer: 'Devon Lane',
        rating: 5,
        comment: 'Normally wings are wings, but theirs are lean meaty and tender, and fresh tasting. You can get all flat or all drumstick if you want.'
    }
];

// Summary statistics
const summary = {
    totalOrders: 75,
    totalDelivered: 70,
    totalCancelled: 5,
    totalRevenue: 12000, // in dollars
    netProfit: 6759.25, // in dollars
    orderCompletionRate: 70 // in percentage
};

// Activity data (for graph)
const activity = [
    { day: 5, orders: 3000 },
    { day: 6, orders: 3200 },
    { day: 7, orders: 3400 },
    { day: 8, orders: 3600 },
    { day: 9, orders: 3800 },
    { day: 10, orders: 4000 },
    { day: 11, orders: 4200 },
    { day: 12, orders: 4400 },
    { day: 13, orders: 4600 },
    { day: 14, orders: 4800 },
    { day: 15, orders: 5000 },
    { day: 16, orders: 5200 },
    { day: 17, orders: 5400 },
    { day: 18, orders: 5600 },
    { day: 19, orders: 5800 },
    { day: 20, orders: 6000 },
    { day: 21, orders: 6200 },
    { day: 22, orders: 6400 }
];

// Goals, popular dishes, and menus (for sidebar)
const goals = ['Increase customer satisfaction', 'Expand menu options', 'Improve delivery times'];
const popularDishes = ['Mushroom Risotto', 'Eggs Benedict', 'Wings'];
const menus = ['Breakfast', 'Lunch', 'Dinner'];

module.exports = {
    orders,
    feedback,
    summary,
    activity,
    goals,
    popularDishes,
    menus
};
