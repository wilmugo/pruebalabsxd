import { Component } from "@angular/core";
import { Persona } from "../../models/persona";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "listadesplegable";
  personaArray: Persona[] = [
    {
      id: "one",
      nombre: "Josep",
      apellido: "Perez",
      edad: 22,
      biografia: "Estudiante de cine",
      telefonos: ["04115746289", "8761234"]
    },
    {
      id: "two",
      nombre: "Trina",
      apellido: "Guzman",
      edad: 33,
      biografia: "Estudiante de Arte",
      telefonos: ["04115746289", "8761234"]
    },
    {
      id: "three",
      nombre: "Yira",
      apellido: "Newman",
      edad: 28,
      biografia: "Estudiante de cine",
      telefonos: ["04115746289", "8761234"]
    }
  ];
}
