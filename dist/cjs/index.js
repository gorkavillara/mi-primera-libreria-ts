"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacionesMatematicas = void 0;
class OperacionesMatematicas {
    factorial(num) {
        if (num <= 0)
            throw new Error("Debería ser mayor que cero");
        let factorial = 1;
        for (let i = num; i > 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
    suma(...args) {
        let suma = 0;
        args.forEach(arg => {
            if (typeof arg === "number")
                suma += arg;
        });
        return suma;
    }
}
exports.OperacionesMatematicas = OperacionesMatematicas;
