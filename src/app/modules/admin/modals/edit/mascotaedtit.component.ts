import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IonicModule,
  ToastController,
  ModalController, // <-- Asegúrate de que se use aquí abajo
} from '@ionic/angular';

@Component({
  selector: 'app-mascotaedtit',
  templateUrl: './mascotaedtit.component.html',
  styleUrls: ['./mascotaedtit.component.css'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class MascotaedtitComponent implements OnInit {
  @Input() mascotaAEditar: any;
  
  imagenArchivo: File | null = null;
  imagenPreview: string | ArrayBuffer | null = null;
  mascotaForm!: FormGroup;

  // 1. INYECTAMOS CORRECTAMENTE EL MODALCONTROLLER AQUÍ
  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private modalController: ModalController 
  ) {}

  ngOnInit() {
    this.initForm();
    this.cargarInformacionEnCampos(); 
  }

  initForm() {
    // 2. CORREGIMOS LOS VALIDATORS PARA QUE NO QUEDEN VACÍOS
    this.mascotaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      edad: [null, [Validators.required, Validators.min(0)]],
      descripcion: ['', [Validators.required]],
      imagen: [''],
      estado: ['', [Validators.required]],
    });
  }

  cargarInformacionEnCampos() {
    if (this.mascotaAEditar) {
      this.mascotaForm.patchValue({
        nombre: this.mascotaAEditar.nombre,
        tipo: this.mascotaAEditar.tipo,
        raza: this.mascotaAEditar.raza,
        edad: this.mascotaAEditar.edad,
        descripcion: this.mascotaAEditar.descripcion,
        estado: this.mascotaAEditar.estado
      });

      if (this.mascotaAEditar.imagen && typeof this.mascotaAEditar.imagen === 'string') {
        this.imagenPreview = this.mascotaAEditar.imagen;
      }
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.imagenArchivo = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async guardarCambios() {
    if (this.mascotaForm.valid) {
      const mascotaModificada = {
        ...this.mascotaForm.value,
        imagen: this.imagenArchivo || this.mascotaAEditar.imagen, 
      };

      console.log('💾 GUARDANDO CAMBIOS...', mascotaModificada);

      // Opcional: Aquí puedes buscar en tu MASCOTAS_DATA para actualizar el registro real si lo deseas

      const toast = await this.toastController.create({
        message: `¡Se guardaron los cambios de ${mascotaModificada.nombre}!`,
        duration: 3000,
        color: 'success',
        position: 'bottom',
      });
      await toast.present();

      // Al guardar, cerramos mandando la data modificada de regreso
      this.modalController.dismiss(mascotaModificada);
    }
  }

  cancelar() {
    console.log('Edición cancelada');
    
    // 3. CORRECTO: Usamos el modalController para cerrar la ventana actual
    this.modalController.getTop().then(overlay => {
      if (overlay) {
        this.modalController.dismiss();
      }
    }).catch(err => {
      console.log('Error al cerrar el modal:', err);
    });
  }
}