var random_words = [
    'Dog',
    'Cat',
    'Bird',
    'Pig',
    'Sheep',
    'Duck',
    'Elephant',
    'Monkey',
    'Turtle',
    'Fish',
    'Penguin',
    'Frog',
    'Fireplace',
    'Sink',
    'Washing machine',
    'Microwave',
    'Bookshelf',
    'Dinner Table',
    'Toaster',
    'Bed',
    'Mirror',
    'Television',
    'Computer',
    'Car',
    'Ice Cream',
    'Tacos',
    'Pizza',
    'Soup',
    'Sandwich',
    'Chips',
    'French Fries',
    'Hamburger',
    'City',
    'Farm',
    'Storm',
    'Sunset',
    'Forest',
    'River',
    'Winter',
    'Valley',
    'Beach',
    'Mountains',
    'Soccer',
    'Basketball',
    'Baseball',
    'Volleyball',
    'Hockey',
    'Bowling',
    'Tennis',
    'Ice Skating',
    'Gymnastics'
]

function randomWord(){
    //Getting a random word from the array
    return random_words[Math.floor(Math.random() * random_words.length)]
}

export { randomWord };



