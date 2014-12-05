import Ember from "ember";

export default Ember.View.extend({
  templateName: 'vehicle-history',
  service: "Vidange",
  provider: "Thomas D.",
  advise: "Prenez un criquet et placer le sous le capot",
  offer: "Pneu chez Oscaro, Pneu chez Allopneu"
});
 