import Ember from "ember";

export default Ember.View.extend({
  templateName: 'vehicle-history',
  service: "Vidange",
  dateOfExecution : "27/11/2015",
  expectedDateOfExecution : "25/12/2016",
  serviceProvider: "Thomas D.",
  advise: "Faire attention à la rouille sous le capot",
  offer: "Pneu chez Oscaro -50%, Pneu chez Allopneu -30%",
  invoice: "Facture du ",
});
 