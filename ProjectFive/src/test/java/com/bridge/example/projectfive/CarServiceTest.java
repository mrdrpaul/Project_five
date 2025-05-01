package com.bridge.example.projectfive;

import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class CarServiceTest {

    CarEntity car1;
    CarEntity car2;
    List<CarEntity> expectedCars;

    @Mock
    CarRepository carRepository;

    @InjectMocks
    CarService carService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        car1 = new CarEntity("Ford", "Focus", 2011, 3000.45, true);
        car2 = new CarEntity("Toyota", "Corolla", 1940, 34.33, true);
        expectedCars = List.of(car1, car2);
        car1.setId(1L);

    }

    @Test
    void shouldGetListOfAllCars() {
        when(carRepository.findAll()).thenReturn(expectedCars);
        List<CarEntity> carListRequest = carService.findAllCars();
        verify(carRepository, times(1)).findAll();
        assertThat(carListRequest).isEqualTo(expectedCars);
    }

    @Test
    void shouldCreateNewCar() {
        CarEntity MockCar = new CarEntity("Ford", "Focus", 2011, 3000.45, true);
        Mockito.when(carRepository.save(MockCar)).thenReturn(MockCar);
        CarEntity savedCar = carService.SaveCar(MockCar);
        verify(carRepository, times(1)).save(any(CarEntity.class));
        assert(savedCar.equals(MockCar));

    }
    @Test
    void shouldDeleteCar(){
            // Arrange
            Mockito.when(carRepository.existsById(1L)).thenReturn(true);

            // Act
            carService.deleteInventoryById(1L);

            // Assert
            verify(carRepository, times(1)).deleteById(1L);
        }
    @Test
    void shouldThrowIfCarNotFound() {
        // Arrange
        Mockito.when(carRepository.existsById(3L)).thenReturn(false);

        // Act + Assert
        assertThrows(EntityNotFoundException.class, () -> carService.deleteInventoryById(3L));

        // Verify deleteById was **not** called
        verify(carRepository, never()).deleteById(anyLong());
    }
}
