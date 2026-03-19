import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-docente",
  templateUrl: "./docente.component.html",
  styleUrls: ["./docente.component.css"],
})
export class DocenteComponent implements OnInit {
  // Controles del formulario — uno por campo
  cedulaControl = new FormControl("");
  nombreControl = new FormControl("");
  apellidoControl = new FormControl("");
  contratoControl = new FormControl("");
  horasControl = new FormControl("");
  cursoControl = new FormControl("");
  paraleloControl = new FormControl("");

  mensaje = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  guardar() {
    const docente = {
      cedula: this.cedulaControl.value,
      nombre1: this.nombreControl.value,
      apellido_paterno: this.apellidoControl.value,
      apellido_materno: "",
      nombre2: "",
      correo_insti: "",
      contrato: this.contratoControl.value,
      n_horas: this.horasControl.value,
    };

    this.http.post("http://localhost:3000/api/docentes", docente).subscribe({
      next: () => (this.mensaje = "✅ Docente guardado correctamente"),
      error: () => (this.mensaje = "❌ Error al guardar"),
    });
  }

  cancelar() {
    this.cedulaControl.reset();
    this.nombreControl.reset();
    this.apellidoControl.reset();
    this.contratoControl.reset();
    this.horasControl.reset();
    this.cursoControl.reset();
    this.paraleloControl.reset();
    this.mensaje = "";
  }
}
