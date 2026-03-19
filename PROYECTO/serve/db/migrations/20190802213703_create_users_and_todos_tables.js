exports.up = function (knex) {
  return (
    knex.schema
      // 1. Tablas independientes primero
      .createTable("tipo_de_malla", function (table) {
        table.increments("id_malla");
        table.string("malla_nueva", 50).notNullable();
        table.string("malla_antigua", 50).notNullable();
        table.date("fecha_aprobada").notNullable();
      })
      .createTable("nivel", function (table) {
        table.increments("id_nivel");
        table.string("nombre", 50).notNullable();
      })
      .createTable("docente", function (table) {
        table.increments("id_docente");
        table.string("cedula", 50).notNullable();
        table.string("apellido_paterno", 50).notNullable();
        table.string("apellido_materno", 50).notNullable();
        table.string("nombre1", 50).notNullable();
        table.string("nombre2", 50).notNullable();
        table.string("correo_insti", 50).notNullable();
        table.string("contrato", 50).notNullable();
        table.string("n_horas", 50).notNullable();
      })
      // 2. Tablas que dependen de nivel y tipo_de_malla
      .createTable("asignaturas", function (table) {
        table.increments("id_asignaturas");
        table.string("nombre", 50).notNullable();
        table.integer("malla").notNullable();
        table.integer("nivel").notNullable();
        table.foreign("malla").references("id_malla").inTable("tipo_de_malla");
        table.foreign("nivel").references("id_nivel").inTable("nivel");
      })
      .createTable("paralelo", function (table) {
        table.increments("id_paralelo");
        table.string("nombre", 50).notNullable();
        table.integer("nivel").notNullable();
        table.foreign("nivel").references("id_nivel").inTable("nivel");
      })
      // 3. Tablas que dependen de nivel y paralelo
      .createTable("curso", function (table) {
        table.increments("id_curso");
        table.string("nombre", 50).notNullable();
        table.integer("nivel").notNullable();
        table.integer("paralelo").notNullable();
        table.foreign("nivel").references("id_nivel").inTable("nivel");
        table.foreign("paralelo").references("id_paralelo").inTable("paralelo");
      })
      // 4. Tablas que dependen de docente
      .createTable("asignacion", function (table) {
        table.increments("id_asignacion");
        table.date("fecha_asignacion").notNullable();
        table.integer("docente").notNullable();
        table.foreign("docente").references("id_docente").inTable("docente");
      })
      .createTable("detalle_asignacion", function (table) {
        table.increments("id_detalle_asignacion");
        table.integer("asignacion").notNullable();
        table.integer("asignatura").notNullable();
        table.integer("curso").notNullable();
        table
          .foreign("asignacion")
          .references("id_asignacion")
          .inTable("asignacion");
        table
          .foreign("asignatura")
          .references("id_asignaturas")
          .inTable("asignaturas");
        table.foreign("curso").references("id_curso").inTable("curso");
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("detalle_asignacion")
    .dropTableIfExists("asignacion")
    .dropTableIfExists("curso")
    .dropTableIfExists("paralelo")
    .dropTableIfExists("asignaturas")
    .dropTableIfExists("docente")
    .dropTableIfExists("nivel")
    .dropTableIfExists("tipo_de_malla");
};
