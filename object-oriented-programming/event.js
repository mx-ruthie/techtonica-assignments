//this.name & this.price are global variables within the TicketType class
class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
//this.name, this.description, etc. are global variables within the Event class
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
//tName & tPrice are local variables within addAvailableTickets
  addAvailableTickets(tName, tPrice) {
    //creating new Obj to list all ticket types
    const tType = new TicketType(tName, tPrice);
    //.push will push available tickets into availableTickets array
    this.availableTickets.push(tType);
  }
  allTickets() {
    let result = "";
    for (let i = 0; i < this.availableTickets.length; i++) {
      //prints Ticket Price examples from curriculum Line 71-77
      result += `${i + 1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `
    }console.log(result)
    //Prints All tickets + ticket namme & price on page
    return (`All tickets:  ${result}`)
  }

  searchTickets(lower, upper) {//value for lower & upper declared oon Line 63
    let priceRange = "NOT AVAILABLE"
    for (let j = 0; j < this.availableTickets.length; j++) {
      if (this.availableTickets[j].price >= lower && this.availableTickets[j].price <= upper){ 
        priceRange = ""
        priceRange += `Eligible tickets ${j} ${this.availableTickets[j].name} $${this.availableTickets[j].price}`
      }//have to use price & name from event Class to callback, not from local variable in AddAvailableTickets
    }
    return priceRange;
  }
}
//available tickets are relevant and linked
const eventObj1 = new Event('KLOS Golden Gala','An evening with hollywood vampires');
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
//console.log(eventObj1.name);

const eventEmpty = new Array();
eventEmpty.push(eventObj1, eventObj2, eventObj3);
console.log(eventEmpty);

document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  eventEmpty.forEach((item) => {
    html += `<li>${item.name} - ${item.description} - ${item.allTickets()}- ${item.searchTickets(0, 200)}`;//value for lower & upper
  });
  document.querySelector('#event').innerHTML = html;
});

//Ticket Prices- ticket examples from curriculum
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
// console.log(eventObj1.allTickets());
// console.log(eventObj2.allTickets());
// console.log(eventObj3.allTickets());
//console.log(eventObj1.searchTickets(0, 200));
//console.log(eventObj1.searchTickets(0, 75));
