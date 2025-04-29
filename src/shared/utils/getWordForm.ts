type TWordForms = Record<"one" | "several" | "many", string>;

export function getWordForm(number: number, forms: TWordForms) {
  number = Math.abs(number) % 100;
  const n1 = number % 10;

  if (number > 10 && number < 20) {
    return forms.many;
  }
  if (n1 > 1 && n1 < 5) {
    return forms.several;
  }
  if (n1 === 1) {
    return forms.one;
  }
  return forms.many;
}
