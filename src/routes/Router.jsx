import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

function Router({ selected, onAdd, onRemove }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex selected={selected} onAdd={onAdd} onRemove={onRemove} />
          }
        />
        <Route
          path="/dex/:id"
          element={
            <PokemonDetail
              selected={selected}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
