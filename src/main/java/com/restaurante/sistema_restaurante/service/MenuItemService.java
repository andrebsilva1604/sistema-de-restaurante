package com.restaurante.sistema_restaurante.service;

import com.restaurante.sistema_restaurante.entity.MenuItem;
import com.restaurante.sistema_restaurante.repository.MenuItemRepository;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public class MenuItemService {

    private MenuItemRepository menuItemRepository;

    public List<MenuItem> listarMenuItem() {
        return menuItemRepository.findAll();
    }

    public MenuItem salvarMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    public MenuItem buscarMenuItemPorId (Long id) {
        return menuItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item do menu não encontrado."));
    }

    public void deletarMenuItemPorId(Long id) {
        menuItemRepository.deleteById(id);
    }

}
