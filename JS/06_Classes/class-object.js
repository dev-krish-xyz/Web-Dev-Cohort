class School {
  constructor(name, location, students, ranking) {
    this.name = name;
    this.location = location;
    this.students = students;
    this.ranking = ranking;
  };

  getPass(){
    console.log('passed');
  };
  getRanking(){
    console.log(this.ranking);
  };
}
const ssvm = new School('SSVM', 'soro', 2000, '10th');
console.log(ssvm.name);
ssvm.getPass();
ssvm.getRanking();


