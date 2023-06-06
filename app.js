function CalculateTax(ExclusivePrice, TaxRate) {
    const InclusivePrice = (ExclusivePrice * TaxRate) + ExclusivePrice;
    return InclusivePrice;
}

console.log(`The Inclusive Price is ${CalculateTax(1000,0.15)} Kshs`);
