package com.bridge.example.projectfive;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarService {

    CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<CarEntity> findAllCars() {
        return carRepository.findAll();
    }

    public CarEntity SaveCar(CarEntity mockCar) {
        return carRepository.save(mockCar);
    }

    public void deleteInventoryById(Long id) {
        if (carRepository.existsById(id)) {
            carRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Item not found.");
        }
    }
}
