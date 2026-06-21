export interface Users {
  
  id: number;
  nombre: string;
  correo: string;
  ClaveHash: string;
  tipoUsuario: 'Adoptante' | 'Fundacion';

}
