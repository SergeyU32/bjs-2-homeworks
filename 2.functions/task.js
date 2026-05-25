"use strict";

// Задача 1
function getArrayParams(...arr) {
    if (arr.length === 0) {
        return { min: Infinity, max: -Infinity, avg: 0 };
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }

    const avg = Number((sum / arr.length).toFixed(2));

    return { min, max, avg };
}

// Задача 2 — Насадки мясорубки

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEven = 0;
    let sumOdd = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEven = 0;
    let countEven = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }

    if (countEven === 0) return 0;

    return Number((sumEven / countEven).toFixed(2));
}

// Задача 3 — Агрегатор (мясорубка)

function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) return 0;

    let maxWorkerResult = -Infinity;

    for (let subArr of arrOfArr) {
        const result = func(...subArr);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}