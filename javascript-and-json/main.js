var library = [
  {
    isbn: '978-0486656229',
    title: 'General Chemistry (Dover Books on Chemistry) 3rd Revised ed. Edition',
    author: 'Linus Pauling'
  },
  {
    isbn: '979-8364891020',
    title: "Rapid Interpretation of EKG's",
    author: 'Dale Dubin, MD'
  },
  {
    isbn: '978-1936221349',
    title: 'Organic Chemistry 6th Edition',
    author: 'Prof. Marc Loudon, James Parise'
  }

];

console.log('library value :  ', library);
console.log('typeof library value :  ', typeof library);
console.log(' JSON.stringify(library) value :  ', JSON.stringify(library));
console.log('typeof JSON.stringify(library) value :  ', typeof JSON.stringify(library));

var studentList = '[{"student":"Jenny","id":"979864"},{"student":"Joseph","id":"992563"},{"student":"Elizabeth","id":"989654"}]';
console.log('studentList value :  ', studentList);
console.log('typeof studentList value :  ', typeof studentList);

console.log('JSON.parse(studentList) value :  ', JSON.parse(studentList));
console.log('typeof JSON.parse(studentList) value :  ', typeof JSON.parse(studentList));
