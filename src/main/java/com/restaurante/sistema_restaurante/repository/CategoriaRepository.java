package com.restaurante.sistema_restaurante.repository;

import com.restaurante.sistema_restaurante.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
