function calcularCosto() {
    const numDias = parseInt(document.getElementById("dias").value);
    const precioDiario = parseFloat(document.getElementById("precioDiario").value);
    
    let descuento = 0;
    
    if (numDias > 15) {
        descuento = 0.2; 
    } else if (numDias > 10) {
        descuento = 0.15; 
    } else if (numDias > 5) {
        descuento = 0.1;
    }
    
    const subtotal = numDias * precioDiario;
    const descuentoTotal = subtotal * descuento;
    const totalAPagar = subtotal - descuentoTotal;
    
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("descuento").textContent = descuentoTotal.toFixed(2);
    document.getElementById("total").textContent = totalAPagar.toFixed(2);
}