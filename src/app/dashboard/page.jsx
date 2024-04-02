"use client"

export default function historial() {
    return (
        <div className=" w-scrren h-screen align-middle">
            <main className="flex h-full flex-col items-center px-10 md:px-36 py-4 bg-light-fondo dark:bg-dark-fondo"
            >
                <div className="grid min-h-full w-full grid-cols-1 place-items-center p-6 rounded-lg">
                    <div class="max-w-lg p-6 bg-light-acento-2 rounded-lg shadow-lg dark:bg-dark-acento-2 dark:border-gray-700">
                        <a href="dashboard/contratos">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-ligth-texto dark:text-dark-texto">Ver contratos generados</h5>
                        </a>
                        <p class="mb-3 font-normal text-ligth-texto dark:text-dark-texto">Aquí puesdes revisar todos los contratos que hayas generado hasta el momento.</p>
                        <a href="dashboard/contratos" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-texto dark:text-dark-texto bg-light-acento-2 rounded-lg hover:bg-light-acento-1 focus:outline-none dark:bg-dark-acento-2 dark:hover:bg-dark-acento-1">
                            Ver
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <div class="max-w-lg p-6 bg-light-acento-2 rounded-lg shadow-lg dark:bg-dark-acento-2 dark:border-gray-700">
                        <a href="dashborad/cuentas">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-ligth-texto dark:text-dark-texto">Ver cuenta de cobro generadas</h5>
                        </a>
                        <p class="mb-3 font-normal text-ligth-texto dark:text-dark-texto">Aquí puesdes revisar todas las cuentas de cobro que hayas generado hasta el momento.</p>
                        <a href="dashboard/cuentas" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-texto dark:text-dark-texto bg-light-acento-2 rounded-lg hover:bg-light-acento-1 focus:outline-none dark:bg-dark-acento-2 dark:hover:bg-dark-acento-1">
                            Ver
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </main>
        </div>


    )
}