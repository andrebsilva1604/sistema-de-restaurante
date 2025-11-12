package com.restaurante.sistema_restaurante.controller;

import com.restaurante.sistema_restaurante.entity.MenuItem;
import com.restaurante.sistema_restaurante.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu-itens")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping
    public List<MenuItem> listarMenuItem(){
        return menuItemService.listarMenuItem();
    }

    @PostMapping
    public MenuItem criarMenuItem(@RequestBody MenuItem menuItem) {
        return menuItemService.salvarMenuItem(menuItem);
    }

    @GetMapping("/{id}")
    public MenuItem buscarMenuItemPorId(@PathVariable Long id) {
        return menuItemService.buscarMenuItemPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarMenuItemPorId(@PathVariable Long id) {
        menuItemService.deletarMenuItemPorId(id);
    }
}
