const Dinosaur = require("./dinosaur")

class Park {

    constructor(name, ticketPrice, numberOfVisitors){
        this.name = name
        this.ticketPrice = ticketPrice
        this.numberOfVisitors = numberOfVisitors
        this.dinosaurs = []
    }

    addDinosaur(dinosaur){
        this.dinosaurs.push(dinosaur)
    }

    removeDinosaur(dinosaur){
        const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
        if (indexOfDinosaur > -1){
            this.dinosaurs.splice(indexOfDinosaur, 1)
        }
    }

    mostPopular(){
        const mostPopularDinosaur = this.dinosaurs[0]
        for (let i = 1; i < this.dinosaurs.length; i++){
            const currentDinosaur = this.dinosaurs[i]
            if (currentDinosaur.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay){
                mostPopularDinosaur = currentDinosaur
            }
        }
        return mostPopularDinosaur
    }

    allSpecies(speciesWeAreLookingFor){
        const particularSpecies = []
        for (let i = 0; i < this.dinosaurs.length; i++){
            const currentDinosaur = this.dinosaurs[i]
            if (currentDinosaur.species === speciesWeAreLookingFor){
                particularSpecies.push(currentDinosaur)
            }
        }
        return particularSpecies
    }

    annualVisitors(){
        const totalVisitors = (this.numberOfVisitors * 365)
        return totalVisitors
    }

    annualTicketSales(){
        const totalVisitors = this.annualVisitors()
        const totalSales = (totalVisitors * 365)
        return totalSales
    }

    removeAllSpecies(speciesToRemove){
        const speciesToDelete = []
        const speciesToKeep = []
        for (let i = 0; i < this.dinosaurs.length; i++){
            const currentDinosaur = this.dinosaurs[i]
            if(currentDinosaur.species === speciesToRemove){
                speciesToDelete.push(currentDinosaur)
            }
            else{
                speciesToKeep.push(currentDinosaur)
            }
        }
        this.dinosaurs = speciesToKeep
        return this.dinosaurs
    }

    dietTypes(){
        const dietTypes = {}
        this.dinosaurs.forEach((dinosaur) => {
            const diet = dinosaur.diet
            dietTypes[diet] = (dietTypes[diet] || 0) + 1
        })
        return dietTypes
    }
}
module.exports = Park