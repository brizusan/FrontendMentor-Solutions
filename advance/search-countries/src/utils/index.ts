
export const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
};

export const formatList = (arr: string[]) => {
  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });

  return formatter.format(arr)
};
