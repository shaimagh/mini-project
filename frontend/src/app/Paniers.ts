export class Paniers {
  public idPanier: number;
  public prix: number;
  public idProduit: number;

  constructor(idPanier: number, prix: number, idProduit: number) {
    this.idPanier = idPanier;
      this.prix = prix;
      this.idProduit = idProduit;
  }
}
