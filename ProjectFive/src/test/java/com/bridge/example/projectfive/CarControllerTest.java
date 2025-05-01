package com.bridge.example.projectfive;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class CarControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private CarService carService;

    CarEntity carEntity = new CarEntity("Ford", "Mustang", 2019, 25000.69, true);
    CarEntity carEntity1 = new CarEntity("Chevy","Silverado",2025,75000.87,false);
    List<CarEntity> carList;
    @BeforeEach
    void setUp() {
        carList=List.of(carEntity,carEntity1);
        Mockito.when(carService.findAllCars()).thenReturn(carList);
    }

    @Test
    void shouldGetAllCarEntities() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/car"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void shouldCreateACar() throws Exception{
        Mockito.when(carService.SaveCar(carEntity)).thenReturn(carEntity);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/car/create").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(carEntity))).andExpect(status().isCreated());

    }
    @Test
    void shouldDeleteCarById(){

    }
}
