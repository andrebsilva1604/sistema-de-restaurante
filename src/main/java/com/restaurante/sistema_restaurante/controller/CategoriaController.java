package com.restaurante.sistema_restaurante.controller;

import com.restaurante.sistema_restaurante.entity.Categoria;
import com.restaurante.sistema_restaurante.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<Categoria> listarTodasCategorias(){
        return categoriaService.listarTodasCategorias();
    }

    @PostMapping
    public Categoria criarCategoria(@RequestBody Categoria categoria) {
        return categoriaService.salvarCategorias(categoria);
    }

    @GetMapping("/{id}")
    public Categoria buscarCategoriaPorId(@PathVariable Long id) {
        return categoriaService.buscarCategoriasPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarCategoriaPorId(@PathVariable Long id) {
        categoriaService.deletarCategoriaPorId(id);
    }
}
