"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    
    const discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
        return arr;
    } 
    
    if (discriminant === 0) {
        const root = -b / (2 * a);
        arr.push(root);
    } 
    
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        
        arr.push(root1, root2);
    }
    
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразуем годовую процентную ставку в месячную (от 0 до 1)
    const P = (percent / 100) / 12;
    
    // Тело кредита (сумма кредита минус первоначальный взнос)
    const S = amount - contribution;
    
    // Если первоначальный взнос покрывает всю сумму или больше — возвращаем 0
    if (S <= 0) {
        return 0;
    }
    
    // Количество месяцев
    const n = countMonths;
    
    // Ежемесячный платёж
    const monthlyPayment = S * (P + (P / ((Math.pow(1 + P, n) - 1))));
    
    // Общая сумма выплат
    const totalAmount = monthlyPayment * n;
    
    // Округляем до двух знаков после запятой и возвращаем число
    return Number(totalAmount.toFixed(2));
}