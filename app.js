function CalculateTax(ExclusivePrice, TaxRate) {
    const InclusivePrice = (ExclusivePrice * TaxRate) + ExclusivePrice;
    console.log(InclusivePrice);
}
CalculateTax(1000,0.15)
