import { validateCurrency } from '../lib/shoppingBasket';

describe('validateCurrency', () => {
    test('Returns $5.00 for input 5', () => {
        expect(validateCurrency(5)).toBe('$5.00');
    });
    
    test('Returns $23.80 for input 23.8', () => {
        expect(validateCurrency(23.8)).toBe('$23.80');
    });
    
    test('Returns £12.30 for input 12.3', () => {
        expect(validateCurrency(12.3)).toBe('£12.30');
    });
})