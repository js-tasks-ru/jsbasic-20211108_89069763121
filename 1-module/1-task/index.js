function factorial(n) {
    // Проверяем: бесконечность, дробные и отрицательные числа.
  if (n < 0 || n % 1 !== 0 || Number.isFinite(n) === false) {
    return NaN;
  }

  // Запускаем цикл, чтобы вычислить факториал.
  let factorial = 1;
  for (let i = 1; i <= n; i++ ) {
    factorial = factorial * i;
  }

  return factorial;
}