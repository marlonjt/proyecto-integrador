require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conexión a BD via knex
const knex = require("./db/knex");

// ── DOCENTES ──────────────────────────────────────────────
// GET todos los docentes
app.get("/api/docentes", async (req, res) => {
  try {
    const docentes = await knex("docente").select("*");
    res.json(docentes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET docente por id
app.get("/api/docentes/:id", async (req, res) => {
  try {
    const docente = await knex("docente")
      .where("id_docente", req.params.id)
      .first();
    if (!docente)
      return res.status(404).json({ error: "Docente no encontrado" });
    res.json(docente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST crear docente
app.post("/api/docentes", async (req, res) => {
  try {
    const {
      cedula,
      apellido_paterno,
      apellido_materno,
      nombre1,
      nombre2,
      correo_insti,
      contrato,
      n_horas,
    } = req.body;
    const [nuevo] = await knex("docente").insert(
      {
        cedula,
        apellido_paterno,
        apellido_materno,
        nombre1,
        nombre2,
        correo_insti,
        contrato,
        n_horas,
      },
      ["*"],
    );
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT actualizar docente
app.put("/api/docentes/:id", async (req, res) => {
  try {
    const [actualizado] = await knex("docente")
      .where("id_docente", req.params.id)
      .update(req.body, ["*"]);
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE eliminar docente
app.delete("/api/docentes/:id", async (req, res) => {
  try {
    await knex("docente").where("id_docente", req.params.id).del();
    res.json({ mensaje: "Docente eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── INICIO ────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    mensaje: "API Yavirac funcionando",
    endpoints: [
      "GET    /api/docentes",
      "GET    /api/docentes/:id",
      "POST   /api/docentes",
      "PUT    /api/docentes/:id",
      "DELETE /api/docentes/:id",
    ],
  });
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));
