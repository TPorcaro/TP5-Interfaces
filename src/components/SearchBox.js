import React from "react";
import "../assets/styles/search.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function SearchBox() {
  const top100Films = [
    { title: "Alcalá de Henares" },
    { title: "Ávila" },
    { title: "Barcelona" },
    { title: "Bilbao" },
    { title: "Burgos" },
    { title: "Cáceres" },
    { title: "Cuenca" },
    { title: "Granada" },
    { title: "Ibiza" },
    { title: "Málaga" },
    { title: "Madrid" },
    { title: "São Paulo" },
    { title: "Río de Janeiro" },
    { title: "Brasilia" },
    { title: "Salvador de Bahía" },
    { title: "Belo Horizonte" },
    { title: "Fortaleza" },
    { title: "Curitiba" },
    { title: "Porto Alegre" },
    { title: "Mar del Plata" },
    { title: "Cataratas del Iguazú" },
    { title: "Ushuaia" },
    { title: "Ciudad de Mendoza" },
    { title: "San Martín de Los Andes" },
    { title: "Villa La Angostura" },
    { title: "Purmamarca" },
    { title: "Cafayate" },
    { title: "Ciudad de Salta" },
    { title: "Ciudad Autónoma de Buenos Aires" },
    { title: "El Cafalate" },
    { title: "Montevideo" },
    { title: "Punta del Este" },
    { title: "Colonia del Sacramento" },
    { title: "Edtambul" },
    { title: "Nueva York" },
    { title: "Singapur" },
    { title: "Macau" },
    { title: "Londres" },
  ];
  return (
    <div class="containerDiv">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        options={top100Films.map((option) => option.title)}
        className="autoComplete"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar destino"
            margin="normal"
            variant="outlined"
            className="inputSearch"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
        />
        <a className="filterText">Filtros</a>
    </div>
  );
}

export default SearchBox;
