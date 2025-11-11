package com.restaurante.sistema_restaurante.repository;

import com.restaurante.sistema_restaurante.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
