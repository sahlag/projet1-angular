// Création de la classe du produit
export class Product {
    public id: number;
    public name: string;
    public description: string;
    constructor(id: number, name: string, description: string) {
        this.id =  id;
        this.name = name;
        this.description = description;
    }
}
// Création d'un produit de test
export const PRODUCT_TEST: Product = new Product(1, 'Hamac', 'Pour se reposer');

// Création d'un tableau de produit
export const TAB_PRODUCT: Product[] = [
    new Product(2, 'Pomme', 'Pour la forme'),
    new Product(3, 'Orange', 'Pour la santé'),
    new Product(4, 'banane', 'Pour l\'énergie'),
    new Product(5, 'pastéque', 'Pour la peaux'),
    new Product(6, 'melon', 'un vrai régale '),
    new Product(7, 'pêche', 'le roi des fruits'),
]; // ou arry<Product>
