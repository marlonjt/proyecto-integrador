import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { DialogoComponent } from "../dialogo/dialogo.component";
import { SelectionModel } from "@angular/cdk/collections";
import { HttpClient } from "@angular/common/http";
import { Listacatalogos } from "../modelos/listacatalogos";
import { Docente } from "../modelos/docente";
import { Estudiante } from "../modelos/estudiante";
import jsPDF from "jspdf";

const API = "http://localhost:3000/api";

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo.component.html",
  styleUrls: ["./catalogo.component.css"],
})
export class CatalogoComponent implements OnInit {
  nombreColumnas: string[];
  listaCatalogos: Listacatalogos[];
  verTabla = false;
  dataSource;
  tablaSeleccionada: number;
  selection = new SelectionModel<string>(true, []);
  cargando = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.listaCatalogos = [
      { descripcion: "Docentes", tabla: "Docentes" },
      { descripcion: "Estudiantes", tabla: "Estudiantes" },
    ];
  }

  verDatos() {
    this.verTabla = false;
    this.cargando = true;
    if (this.tablaSeleccionada == 0) {
      this.http.get<Docente[]>(`${API}/docentes`).subscribe({
        next: (data) => {
          if (data.length === 0) {
            this.cargando = false;
            return;
          }
          this.nombreColumnas = Object.keys(data[0]);
          this.dataSource = new MatTableDataSource<Docente>(data);
          this.dataSource.paginator = this.paginator;
          this.verTabla = true;
          this.cargando = false;
        },
        error: () => {
          alert(
            "Error al cargar docentes. Verifica que el servidor corra en puerto 3000.",
          );
          this.cargando = false;
        },
      });
    } else if (this.tablaSeleccionada == 1) {
      const estudiantes: Estudiante[] = [
        {
          nombre: "Jean",
          nombre2: "Pierre",
          apellido: "Arias",
          apellido2: "Perez",
          domicilio: "Pintado",
        },
        {
          nombre: "Jose",
          nombre2: "Andres",
          apellido: "Alvarez",
          apellido2: "Quinto",
          domicilio: "Magdalena",
        },
      ];
      this.nombreColumnas = Object.keys(estudiantes[0]);
      this.dataSource = new MatTableDataSource<Estudiante>(estudiantes);
      this.dataSource.paginator = this.paginator;
      this.verTabla = true;
      this.cargando = false;
    } else {
      this.verTabla = false;
      this.cargando = false;
    }
  }

  buscar(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(registro): void {
    this.dialog.open(DialogoComponent, { width: "50%", data: registro });
  }

  verpdf() {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });
    doc.setFontSize(38);
    doc.text("FORMULARIO INSTITUCIONAL", 150, 20, { align: "center" });
    doc.line(20, 22, 285, 22);
    doc.setFontSize(20);
    doc.setFont("courier", "normal");
    doc.text("NOMBRE:", 20, 30);
    doc.text("APELLIDO:", 20, 40);
    doc.text("EDAD:", 20, 50);
    doc.text("DIRECCION:", 20, 60);
    doc.text("EMAIL:", 20, 70);
    doc.text("CARGO INSTITUCIONAL:", 20, 80);
    doc.line(20, 85, 285, 85);
    doc.text("CARRERA:", 20, 90);
    doc.setFontSize(15);
    doc.text("D.Software", 20, 100);
    doc.rect(60, 96, 5, 5);
    doc.text("D.Modas", 70, 100);
    doc.rect(98, 96, 5, 5);
    doc.text("A.Culinario", 110, 100);
    doc.rect(150, 96, 5, 5);
    doc.setFontSize(20);
    doc.text("JORNADA:", 20, 110);
    doc.setFontSize(15);
    doc.text("MATUTINA", 20, 118);
    doc.rect(50, 115, 5, 5);
    doc.text("VESPERTINA", 65, 118);
    doc.rect(98, 115, 5, 5);
    doc.text("NOCTURNA", 110, 118);
    doc.rect(140, 115, 5, 5);
    doc.line(20, 125, 285, 125);
    doc.setFontSize(20);
    doc.text("INSTITUTOS:", 20, 130);
    doc.setFontSize(15);
    doc.text("BENITO JUAREZ", 20, 140);
    doc.rect(65, 135, 5, 5);
    doc.text("GRAN COLOMBIA", 75, 140);
    doc.rect(120, 135, 5, 5);
    doc.text("24 DE MAYO", 130, 140);
    doc.rect(165, 135, 5, 5);
    doc.save("formulario-yavirac.pdf");
  }
}
