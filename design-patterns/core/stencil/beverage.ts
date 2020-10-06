export abstract class CaffeineBevarage {
  public prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  public abstract brew(): string;
  public abstract addCondiments(): string;

  public boilWater() {
    return "Boiling water";
  }

  public pourInCup() {
    return "pourInCup";
  }
}
