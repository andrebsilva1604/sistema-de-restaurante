package com.restaurante.sistema_restaurante.service;

import com.restaurante.sistema_restaurante.entity.Categoria;
import com.restaurante.sistema_restaurante.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> listarTodasCategorias() {
        return categoriaRepository.findAll();
    }

    public Categoria salvarCategorias(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public Categoria buscarCategoriasPorId(Long id) {
        return categoriaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categoria não encontrada!"));
    }

    public void deletarCategoriaPorId(Long id) {
        categoriaRepository.deleteById(id);
    }
}
