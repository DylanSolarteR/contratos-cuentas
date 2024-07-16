import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';
import { AppContext } from '@/context';

// Mock del contexto
const renderWithContext = (daltonismo, isLogged = false) => {
    return render(
        <AppContext.Provider value={{ daltonismo, isLogged, setIsLogged: jest.fn() }}>
            <Navbar />
        </AppContext.Provider>
    );
};

describe('Navbar Component', () => {
    test('applies correct classes for normal vision', () => {
        renderWithContext('normal');

        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('shadow-light-acento-2 dark:shadow-dark-acento-2');
    });

    test('applies correct classes for protanopia', () => {
        renderWithContext('protanopia');

        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('shadow-protanopia-light-acento-2 dark:shadow-protanopia-dark-acento-2');
    });

    test('applies correct classes for deuteranopia', () => {
        renderWithContext('deuteranopia');

        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('shadow-deuteranopia-light-acento-2 dark:shadow-deuteranopia-dark-acento-2');
    });

    test('applies correct classes for tritanopia', () => {
        renderWithContext('tritanopia');

        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('shadow-tritanopia-light-acento-2 dark:shadow-tritanopia-dark-acento-2');
    });

    // Agrega más pruebas según sea necesario
});
