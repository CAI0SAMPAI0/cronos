'use client';

import Image from "next/image";

export default function NotFound() {
    return (
        <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            {/* Imagem Not Found */}
            <Image
                src="/not-found.jpg"
                alt="404"
                width={300}
                height={300}
                className="mt-10"
            />

            {/* Conteudo da Página */}
            <h1 className="text-8xl font-black text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Página não existente</h2>
            <p className="text-gray-500 mb-8 max-w-md">
                A página que você está procurando não existe ou foi movida.
            </p>
            <button
                onClick={() => window.history.back()}
                className="
                    cursor-pointer
                    rounded-2xl
                    border-2 border-primary
                    bg-primary
                    px-6 py-3
                    font-medium text-white
                    shadow-sm
                    transition-transform duration-200
                    hover:scale-105
                    hover:border-chart-5
                    hover:bg-chart-5
                    active:scale-110
                    active:border-chart-5
                    active:bg-chart-5
                "
            >
                Voltar
            </button>
        </div>
    );
}