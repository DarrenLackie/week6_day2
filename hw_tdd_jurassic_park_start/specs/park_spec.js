const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 50, 100)
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur = new Dinosaur('T-Rex', 'Carnivore', 50)
    park.addDinosaur(dinosaur)
    const actual = dinosaur.species
    assert.deepStrictEqual(actual, 'T-Rex')
  });

  it('should be able to remove a dinosaur from its collection', function(){
    dinosaur = new Dinosaur('T-Rex', 'Carnivore', 50)
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 40)
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 20)
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.removeDinosaur(dinosaur)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50)
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 40)
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 20)
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.mostPopular()
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50)
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 40)
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 20)
    dinosaur4 = new Dinosaur('Velociraptor', 'Carnivore', 50)
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.allSpecies('Velociraptor')
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur4])
  });


  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.numberOfVisitors
    assert.strictEqual(actual, 100)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.annualVisitors()
    assert.strictEqual(actual, 36500)
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.annualTicketSales()
    assert.strictEqual(actual, 13322500)
  });

  it('should be able to remove a particular species from the collection', function(){
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50)
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 40)
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 20)
    dinosaur4 = new Dinosaur('Velociraptor', 'Carnivore', 50)
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.removeAllSpecies('Velociraptor')
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3])
  })

  it('should be able to provide an object showing the number of dinosaurs with a specific diet', function(){
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50)
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 40)
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 20)
    dinosaur4 = new Dinosaur('Velociraptor', 'Carnivore', 50)
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.dietTypes()
    assert.deepStrictEqual(actual, { 'Carnivore': 3, 'Herbivore': 1})
  })

});
