exports.seed = function (knex) {
  return knex("docente")
    .del()
    .then(function () {
      return knex("docente").insert([
        {
          cedula: "1712345678",
          apellido_paterno: "Encalada",
          apellido_materno: "Prieto",
          nombre1: "Mauricio",
          nombre2: "Jose",
          correo_insti: "mauricio.encalada@yavirac.edu.ec",
          contrato: "Tiempo completo",
          n_horas: "40",
        },
        {
          cedula: "1798765432",
          apellido_paterno: "Tituaña",
          apellido_materno: "Lopez",
          nombre1: "Carlos",
          nombre2: "Alberto",
          correo_insti: "carlos.tituania@yavirac.edu.ec",
          contrato: "Medio tiempo",
          n_horas: "20",
        },
      ]);
    });
};
