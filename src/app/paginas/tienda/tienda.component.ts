import { Component, inject } from '@angular/core';
import { SaludoComponent } from '../../elementos/saludo/saludo.component';
import { ProductoComponent } from '../../elementos/producto/producto.component';
import { Product } from '../../interfaces/product';
import { ProductoService } from '../../servicios/producto.service';
@Component({
  selector: 'app-tienda',
  imports: [SaludoComponent, ProductoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent {
  listaDeProductos: Product[] = [];
  productoService: ProductoService = inject(ProductoService); 
  constructor(){
    this.listaDeProductos =  this.productoService.obtenerTodosLosProductos();
  }


}
