package com.bridge.example.projectfive;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/car")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public ResponseEntity<List<CarEntity>> getCarEntities() {
        return ResponseEntity.ok(carService.findAllCars());
    }

    @PostMapping("/create")
    public ResponseEntity<CarEntity> CreateCar (@RequestBody CarEntity newCar){
        carService.SaveCar(newCar);
        return ResponseEntity.status(201).body(newCar);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCar(@PathVariable Long id){
        carService.deleteInventoryById(id);
    }
}
