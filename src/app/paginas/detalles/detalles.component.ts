import { Component, inject } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productoService: ProductoService = inject(ProductoService);
  detalleProducto: Product | undefined;
  constructor(){
    const idProducto = Number(this.route.snapshot.params['id']);
    // this.detalleProducto = this.productoService.obtenerProductoPorId(idProducto)
    // console.log(this.detalleProducto)
    this.productoService.obtenerProductoPorId(idProducto).subscribe(
      data => this.detalleProducto = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }
}
