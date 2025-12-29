interface PriceParams {
  price: number;
  discount: number;
  isInstallment: boolean;
  months?: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: PriceParams): number => {
  let newPrice: number = price * (1 - discount / 100);

  if (isInstallment && months && months > 0) {
    return newPrice / months;
  }

  return newPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250