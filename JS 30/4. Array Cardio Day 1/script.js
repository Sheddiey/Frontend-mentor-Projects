const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];


const people = [ 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton',
    'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine',
    'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

    //Array.prototype.filter()
    //1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    console.table(fifteen);


    //Array.prototype.map()
    //2.Give Us an Array of the inventors First and Last names
    const inventorsNames = inventors.map(names => `${names.first} ${names.last}`);
    console.table(inventorsNames);

     
    //Array.prototype.sort()
    //3. Sort the inventors by birthdate, oldest to the youngest
    // let birthDate = inventors.sort((a, b) => (a.year < b.year) ? 1 : (a.year > b.year) ? -1 : 0);
    // birthDate.reverse()
    const birthDate = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1)
    console.table(birthDate);

    //Array.prototype.reduce()
    //4. How many years did all the inventors live
    const totalYearsLived = inventors.reduce((x, y) => {
        return x + (y.passed - y.year);
    }, 0);
    console.table(totalYearsLived)

    //5. sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    })
    console.table(oldest)

    //6.Create a list of Boulverands in paris that contain 'de' anywhere in the name
    //https://en.wikipedia.org/wiki/category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));

    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

    //7. sort exercise
    //sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
        
    });console.log(alpha)

    //reduce exercise
    //Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'walk', 'car', 'van', 'car', 'truck']

    const transportation = data.reduce((obj, item) => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});
    console.log(transportation);

