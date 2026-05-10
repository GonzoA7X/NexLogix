import { create } from 'zustand'

export const useStore = create((set) => ({
  metrics: null,
  loading: false,
  error: null,

  // Función asíncrona para traer los datos del Backend
  fetchMetrics: async () => {
    set({ loading: true });
    try {
      const response = await fetch('http://localhost:8000/api/dashboard');
      if (!response.ok) throw new Error('Error al conectar con la API');
      
      const data = await response.json();
      set({ metrics: data, loading: false, error: null });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }
}))
