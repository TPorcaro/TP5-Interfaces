import React, { useState } from "react";
import "../assets/styles/search.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";function SearchBox() {
  const options = [
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
  const [searchTerm, setSearchTerm] = useState("  ");

  return (
    <div className="searchCtn">
      <Grid container="true" justify="center" >
        <Grid item="true">
          <input
            type="text"
            placeholder="Buscar destino.."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          {options.filter((val) => {
            if (searchTerm.length > 2) { 
              if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
              }
          }return null;
        })
        .map((val, key) => {
          return key <= 5 ? (
            <div className="user" key={key}>
              <p>{val.title}</p>
            </div>
          ) : (
            ""
          );
        })}
        </Grid>
        <Grid item="true">
          <Button size="large" className="btnSearch">
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBox;
