// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/home";

function App() {
  return (
   
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* Future routes yahan aayengi jaise: */}
          {/* <Route path="/product/:id" element={<ProductPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Route>
      </Routes>
  );
}

export default App;