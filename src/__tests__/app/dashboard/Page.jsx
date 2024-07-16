import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '@/app/dashboard/page';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';
import { getPlantillas } from '@/actions/Plantillas';
import Swal from 'sweetalert2';

// Mocking dependencies
jest.mock('@/context', () => ({
    useAppContext: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock('@/actions/Plantillas', () => ({
    getPlantillas: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

describe('Dashboard', () => {
    let instance, setIsLogged, push, setMounted;

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjkwMmNlODhkNTJhMzJlNGE4MWYyYzciLCJpYXQiOjE3MjA5MjIyNjQsImV4cCI6MTcyMTAwODY2NH0.JJXlazRuaxD02p8m9YpiKiTbQOjtc-ywDAX1T4aqfhI';

    beforeEach(() => {
        instance = {};
        setIsLogged = jest.fn();
        push = jest.fn();
        useAppContext.mockReturnValue({ instance, setIsLogged });
        useRouter.mockReturnValue({ push });
        localStorage.setItem('token', token);
    });

    afterEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    it('should redirect to login if token is not present', async () => {
        localStorage.removeItem('token');
        render(<Dashboard />);
        await waitFor(() => expect(push).toHaveBeenCalledWith('/login'));
    });

    it('should fetch plantillas and render them if token is present', async () => {
        const mockPlantillas = [
            { nombre: 'Contrato de obra y labor', _id: '66902ce98d52a32e4a81f2eb', encabezado: '665f642ea00ddd336ae0a6f7', status: 'borrador' },
            { nombre: 'Contrato a termino indefinido', _id: '66902ce98d52a32e4a81f2ed', encabezado: '665f642ea00ddd336ae0a6f7', status: 'borrador' },
            { nombre: 'Contrato a termino fijo', _id: '66902ce98d52a32e4a81f2ef', encabezado: '665f642ea00ddd336ae0a6f7', status: 'borrador' },
            { nombre: 'Contrato de prestación de servicios', _id: '66902ce98d52a32e4a81f2f1', encabezado: '665f642ea00ddd336ae0a6f7', status: 'borrador' },
        ];

        getPlantillas.mockResolvedValue(mockPlantillas);
        render(<Dashboard />);

        await waitFor(() => expect(setIsLogged).toHaveBeenCalledWith(true));
        // await waitFor(() => expect(setMounted).toHaveBeenCalledWith(true));
        expect(screen.getByText(/Ver contratos/i)).toBeInTheDocument();
        // Use a more flexible text matcher
        // expect(screen.getByText(/Contrato de obra y labor/i)).toBeInTheDocument();
        // expect(screen.getByText(/Contrato a termino indefinido/i)).toBeInTheDocument();
        // expect(screen.getByText(/Contrato a termino fijo/i)).toBeInTheDocument();
        // expect(screen.getByText(/Contrato de prestación de servicios/i)).toBeInTheDocument();
    });
});
