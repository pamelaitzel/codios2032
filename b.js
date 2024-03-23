class Product {
    constructor(name, discount, hasDiscount) {
        this.name = name;
        this.discount = discount;
        this.hasDiscount = hasDiscount;
    }

    calculateTotalCost(quantity, unitPrice, paymentType) {
        let discount = this.hasDiscount ? this.discount : 0;
        if (paymentType === "contado") {
            discount += 0.07;
        }
        return quantity * unitPrice * (1 - discount);
    }
}
if (productType===""||quantity===""||unitPrice===""||paymentType===""){
    alert (" LLENE TODOS LOS CAMPOS REQUERIDOS PARA PODER CONTINUAR");
    return;
}
const products = {
    hielo: new Product("Hojas de Hielo Seco", 0.20, true),
    vigetas: new Product("Vigetas", 0.15, true),
    armazones: new Product("Armazones", 0, false),
};

document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", calculateCost);

    function calculateCost() {
        const productType = document.getElementById("product-type").value;
        const quantity = parseFloat(document.getElementById("quantity").value);
        const unitPrice = parseFloat(document.getElementById("unit-price").value);
        const paymentType = document.getElementById("payment-type").value;

        const product = products[productType];
        const totalCost = product.calculateTotalCost(quantity, unitPrice, paymentType);

        const result = document.getElementById("result");
        const totalCostElement = document.getElementById("total-cost");
        totalCostElement.textContent = "$" + totalCost.toFixed(2);
        result.classList.remove("hidden");
    }
});
